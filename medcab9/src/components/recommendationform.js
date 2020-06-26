import React, { useState } from 'react';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
import * as yup from 'yup';
import axios from 'axios';
import styled from "styled-components";

const RecommendInfo = styled.div`
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  margin: 0, auto;
`;


const RecommendForm = () => {
  const [formData, setFormData] = useState({
    pain: false,
    anxiety: false,
    sleepy: false,
    hungry: false,
    indica: false,
    sativa: false,
    hybrid: false,
    edible: false,
    flower: false,
    drink: false,
  });

  const schema = yup.object().shape({
    pain: yup.boolean(),
    anxiety: yup.boolean(),
    sleepy: yup.boolean(),
    hungry: yup.boolean(),
    indica: yup.boolean(),
    sativa: yup.boolean(),
    hybrid: yup.boolean(),
    edible: yup.boolean(),
    flower: yup.boolean(),
    drink: yup.boolean(),
  })
  const submit = () => {
      schema.validate(formData).then(() => {
          axios.post('https://medcab-td.herokuapp.com/predictions', formData).then( (res) => {
              console.log(res.data, 'Make Selection')
          })
      })
  }
  const handleChange = e => {
      setFormData({...formData, [e.target.name]: e.target.checked})
  }
  
  return(
    <RecommendInfo>
    <Form onSubmit={(e) => {
        e.preventDefault()
        submit()
    }}>
        <FormGroup tag='fieldset'>
          <legend>Info Needed for Recommendations</legend>
          <h2>Ailment</h2>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='pain' checked={formData.sleep} onChange={handleChange} />
             Pain
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='anxiety' checked={formData.pain} onChange={handleChange} />
              Anxiety
            </Label>
          </FormGroup>
          <h2>Effects</h2>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='sleepy' checked={formData.eating} onChange={handleChange} />
              Sleepy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='hungry' checked={formData.cancer} onChange={handleChange} />
              Hungry
            </Label>
          </FormGroup>
          <h2>Type</h2>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='indica' checked={formData.glaucoma} onChange={handleChange} />
              Indica
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='sativa' checked={formData.nausea} onChange={handleChange} />
              Sativa
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='hybird' checked={formData.mental} onChange={handleChange} />
              Hybrid
            </Label>
          </FormGroup>
          <h2>Intake</h2>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='edible' checked={formData.mental} onChange={handleChange} />
              Edible
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='flower' checked={formData.mental} onChange={handleChange} />
              Flower
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='drink' checked={formData.mental} onChange={handleChange} />
              Drink
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </FormGroup>
    </Form>
    </RecommendInfo>
  )
}

export default RecommendForm;





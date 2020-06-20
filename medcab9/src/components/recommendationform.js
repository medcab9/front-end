import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const RecommendForm = ({
  errors,
  touched,
  values,
  status,
  history,
  postRecForm
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    postRecForm(values, history);
  };

  return (
    <div className="form-container">
      <Form className="recommendation-form" onSubmit={handleSubmit}>
        <label className="recommend-label"> Ailment: </label>
        <Field component="select" name="ailment" placeholder="Ailment">
          <option>Please Select Ailment</option>
          <option value="Pain">Pain</option>
          <option value="Anxiety">Anxiety</option>
        </Field>
        {touched.ailment && errors.ailment && (
          <span className="error"> {errors.ailment} </span>
        )}
        <label className="recommend-label"> Effects: </label>
        <Field component="select" name="effects" placeholder="Effects">
          <option>Please Select desired effects</option>
          <option value="Sleepy">Sleepy</option>
          <option value="Hungry">Hungry</option>
        </Field>
        {touched.effects && errors.effects && (
          <span className="error"> {errors.effects} </span>
        )}
        <label className="recommend-label"> Type: </label>
        <Field component="select" name="type" placeholder="Type">
          <option>Please Select desired type of strain</option>
          <option value="Indica">Indica</option>
          <option value="Sativa">Sativa</option>
          <option value="Hybrid">Hybrid</option>
        </Field>
        {touched.type && errors.type && (
          <span className="error"> {errors.type} </span>
        )}
        <label className="recommend-label"> Intake: </label>
        <Field component="select" name="intake" placeholder="Intake">
          <option>Please Select desired Intake</option>
          <option value="Edible">Edible</option>
          <option value="Flower">Flower</option>
          <option value="Drink">Drink</option>
        </Field>
        {touched.intake && errors.intake && (
          <span className="error"> {errors.intake} </span>
        )}
        <label className="recommend-label"> Extra Information: </label>
        <Field
          as="textarea"
          rows="10"
          cols="40"
          type="text"
          name="info"
          placeholder="Extra Information"
        />
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikRecommendForm = withFormik({
  mapPropsToValues({ ailment, effects, type, intake, info }) {
    return {
      ailment: ailment || "",
      effects: effects || "",
      type: type || "",
      intake: intake || "",
      info: info || ""
    };
  },

  validationSchema: Yup.object().shape({
    ailments: Yup.string().oneOf([
        "Pain",
        "Anxiety",
    ]),

    effects: Yup.string().oneOf([
        "Sleepy",  
        "Hungry",
    ]),

    type: Yup.string().oneOf([
        "Indica", 
        "Sativa", 
        "Hybrid"
    ]),
    
    intake: Yup.string().oneOf([
      "Edible",
      "Flower",
      "Drink"
    ]),
    info: Yup.string()
  })
})(RecommendForm);

export default connect(state => state, actionCreators)(FormikRecommendForm);
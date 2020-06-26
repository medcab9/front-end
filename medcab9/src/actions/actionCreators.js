import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

const signinApi = "https://cannedmedical.herokuapp.com/auth/login";
const signupApi = "https://cannedmedical.herokuapp.com/auth/register";

// User Signup
export const userSignup = (userData, history) => dispatch => {
  axiosWithAuth()
    .post(signupApi, userData)
    .then(({ data }) => {
      dispatch({ type: types.SIGN_UP });
      localStorage.setItem("token", data.token);
      history.push("/signup");
    })
    .catch(err => console.log(err));
};
//!! User Signup

// User Signin && Signout
export const userLogin = (signinData, history) => dispatch => {
  axiosWithAuth()
    .post(signinApi, signinData)
    .then(({ data }) => {
      dispatch({ type: types.SIGN_IN });
      localStorage.setItem("token", data.token);
      history.push("/strains");
    })
    .catch(err => console.log(err));
};

export const signout = history => {
  // history.push("/");
  localStorage.removeItem("token");
  return { type: types.SIGN_OUT };
};
// User Logout

//posting form for recommendations

export const postRecForm = recData => dispatch => {
  const stringObjRecData = JSON.stringify(recData);
  axiosWithAuth()
    .post(
      `https://medcab-td.herokuapp.com/predictions`,
      { body: stringObjRecData }
    )
    .then(({ data }) => {
      dispatch(displayRecList(data));
    })
    .catch(err => console.log(err));
};
//!! posting form for recommendations

//get  && display recommendations from DS API for recommendations page
export const displayRecList = recommended => {
  return { type: types.GET_RECOMMENDED, payload: recommended };
};

//post recommendation to backend and display in the ReviewList Component
export const setReviewList = recommended => {
  return { type: types.SAVE_RECOMMENDED, payload: recommended };
};

export const saveRecommended = recommended => dispatch => {
  axiosWithAuth()
    .post("https://cannedmedical.herokuapp.com/saved", recommended)
    .then(({ data }) => {
      // NEED AT LEAST ID OF NEW REVIEW FROM BACKEND
      dispatch(setReviewList(recommended));
    })
    .catch(err => console.log(err));
};
//!!post recommendation to backend


import { publicRequest } from "../../requestMethods"
import { loginFailure, loginStart, loginSuccuess } from "./userRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart())

  try {
    const res = await publicRequest.post("/login", user);
    console.log(res.data)
    dispatch(loginSuccuess(res.data))
  } catch (err) {
    console.log(err.message)
    dispatch(loginFailure());
  }
}
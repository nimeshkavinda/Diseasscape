import types from "../../types";
import { generateSyncAction } from "../../utils";
import { auth } from "../../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = (email, password) => async (dispatch) => {
  dispatch(generateSyncAction(types.user.signIn.started));
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const data = userCredential.user;
      dispatch(generateSyncAction(types.user.signIn.success, data));
    })
    .catch((err) => {
      //   const errorCode = error.code;
      const error = err.message;
      dispatch(generateSyncAction(types.user.signIn.failed, error));
    });
};

export default signIn;

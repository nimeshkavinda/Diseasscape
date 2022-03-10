import types from "../../types";
import { generateSyncAction } from "../../utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const signIn = (email, password) => async (dispatch) => {
  dispatch(generateSyncAction(types.user.signIn.started));
  //   try {
  //     const data = await signInWithEmailAndPassword(auth, email, password);
  //     dispatch(generateSyncAction(types.user.signIn.success, data));
  //   } catch (err) {
  //     const error = err.message;
  //     dispatch(generateSyncAction(types.user.signIn.failed, error));
  //   }
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

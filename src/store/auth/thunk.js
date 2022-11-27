import { checkinCredentials } from "./"


export const checkingAuthentication = (email, password) => {

   return async (dispatch) => {
      dispatch(checkinCredentials())
   }
}

export const startGoogleSingIn = (email, password) => {

   return async (dispatch) => {
      dispatch(checkinCredentials())
   }
}
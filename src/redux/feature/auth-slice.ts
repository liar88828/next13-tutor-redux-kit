import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type ValueType = {
  isAuth: boolean,
  username: string,
  uid: string,
  isModerator: boolean,
}

type initialStateType = {
  value: ValueType
}

const initialState = {
  value: {
    isAuth: false,
    username: '',
    uid: "",
    isModerator: false,
  } as ValueType
} as initialStateType

let d = Date.now()
const auth = createSlice( {
  name: "auth",
  initialState,
  reducers: {

    toggleModerator( state ) {
      state.value.isModerator = !state.value.isModerator
    },

    logOut() {
      return initialState
    },

    logIn(
      state,
      action: PayloadAction<string>
    ) {

      // console.log( action,)
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: d.toString(),
          isModerator: false
        }
      }
    }
  }
} )

export const { logIn, logOut, toggleModerator } = auth.actions
export default auth.reducer
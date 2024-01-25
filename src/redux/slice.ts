import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginAcc } from "./type/Type";


  interface initial {
    userAcc: {name: string,Login:string,imgAvatar:string},
    user: boolean
  }

  const initialState:initial = {
    userAcc: {name: '',Login: '',imgAvatar: ''},
    user: false,
  }

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    createLogin: (state,{payload}:PayloadAction<LoginAcc>) => {
      if(payload)
      state.userAcc.name = payload.name
      state.userAcc.Login = payload.Login
      state.userAcc.imgAvatar = payload.imgAvatar
      state.user = true
    }
  }
})


export const {reducer,actions} = slice
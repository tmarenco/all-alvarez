import { configureStore } from '@reduxjs/toolkit'
import { goalsSlice } from './goals/goalsSlice'
import { teamSlice } from './teams/teamsSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    goals: goalsSlice.reducer,
    teams: teamSlice.reducer,
    auth: authSlice.reducer
  },
})
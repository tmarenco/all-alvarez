import { createSlice } from '@reduxjs/toolkit';
import teams from "/src/assets/data/teams.js";

const defaultTeam = "Argentina National Team"; 

export const teamSlice = createSlice({
    name: 'teams',
    initialState: {
        active: teams.find(team => team.name === defaultTeam),
        teams
    },
    reducers: {
       setActiveTeam: (state, action) => {
            state.active = action.payload;
       }
  },
});
export const { setActiveTeam } = teamSlice.actions;
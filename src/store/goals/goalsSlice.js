import { createSlice } from '@reduxjs/toolkit';
export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
       isSaving: false,
       isLoading: false,
       goalSaved: '',
       goals: [],
       active: null
    },
    reducers: {
       addNewGoal: ( state, action ) => {
        console.log(action.payload)
        state.goals.push(action.payload)
       },
       setActiveGoal: ( state, action ) => {
        state.active = action.payload
       },
       startLoadingGoals: ( state, action ) => {
        state.isLoading = true;
       },
       setGoals: ( state, action ) => {
        state.goals = [
            {
                order: 1,
                team: 'River Plate',
                rival: 'Independiente',
                season: '18/19',
                competition: 'Liga Profesional de Fútbol Argentino',
                url: 'https://www.youtube.com/watch?v=Sua7n4rfkL0&ab_channel=RiverPlate',
                result: "3-0"
            },
            {
                order: 2,
                team: 'River Plate',
                rival: 'Inter',
                season: '18/19',
                competition: 'Copa Libertadores',
                url: 'https://www.youtube.com/watch?v=Sua7n4rfkL0&ab_channel=RiverPlate',
                result: '2-2'
            },
            {
                order: 3,
                team: 'River Plate',
                rival: 'Central Córdoba',
                season: '18/19',
                competition: 'Copa Argentina',
                url: 'https://www.youtube.com/watch?v=Sua7n4rfkL0&ab_channel=RiverPlate',
                result: '0-3'
            },
            {
                order: 4,
                team: 'River Plate',
                rival: 'San Pablo',
                season: '19/20',
                competition: 'Copa Libertadores',
                url: 'https://www.youtube.com/watch?v=Sua7n4rfkL0&ab_channel=RiverPlate',
                result: '2-2'
            },
            {
                order: 5,
                team: 'Argentina National Team',
                rival: 'Deportivo Binacional',
                season: '19/20',
                competition: 'Copa Libertadores',
                url: 'https://www.youtube.com/watch?v=Sua7n4rfkL0&ab_channel=RiverPlate',
                result: '0-6'
            },
            {
                order: 6,
                team: 'Manchester City',
                rival: 'Deportivo Binacional',
                season: '22/23',
                competition: 'Copa Libertadores',
                url: 'https://www.youtube.com/watch?v=Sua7n4rfkL0&ab_channel=RiverPlate',
                result: '0-6'
            }
        ]
       },
       setSavingGoal: ( state ) => {
        //Cuando guardemos uno, seteamos isSaving en true 
       },
       updateGoal: ( state, action ) => {

       },
       removeGoal: ( state, action ) => {

       }
  },
});
export const { addNewGoal, setActiveGoal, setGoals, setSavingGoal, updateGoal, removeGoal } = goalsSlice.actions;
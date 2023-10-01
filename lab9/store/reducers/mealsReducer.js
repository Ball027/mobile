import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
    meals:MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[]
    };

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE :
            if(state.favoriteMeals.findIndex(action.mealId)>=0){
                state.favoriteMeals.splice()
                return state.favoriteMeals.findIndex(action.mealId);
            }
            else{

                state.favoriteMeals.splice()
                return -1;
            }
        default:
        return state;
        } };       
export default mealsReducer;
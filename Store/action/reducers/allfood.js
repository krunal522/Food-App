import LISTCATEGORYS from '../../../data/list-categoryitem';
// import TOGGLE_FAVORITE from './../../action/meal';

const initialState = {
    foods: LISTCATEGORYS,
    filteredFood: LISTCATEGORYS,
    lastName: "krunal",
    favoriteFood: [],
};
const foodReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            let status = state.favoriteFood.includes(action.foodId);
            if (status) {
                const arr = state.favoriteFood;
                let index = arr.indexOf(action.foodId);
                return { ...state, favoriteFood: arr.slice(index + 1, 1) };
            }
            else {
                return { ...state, favoriteFood: state.favoriteFood.concat(action.foodId) };
            }
        default:
            return state;
    }
}
export default foodReducers;
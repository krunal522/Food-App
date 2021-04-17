import LISTCATEGORYS from '../../../data/list-categoryitem';

const initialState = {
    foods: LISTCATEGORYS,
    isveg=vegitable,
    isnonveg=nonvegitable
};

const foodReducers = (state = initialState, action) => {
    return state;
}
export default foodReducers;
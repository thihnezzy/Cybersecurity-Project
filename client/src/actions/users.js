import * as api from '../api';

//Action Creators
//Function that returns an action
//Redux Thunk allows us to return a function instead of an action object
const getUsers  = () => async (dispatch) => {
    try {
        const { data } = await api.fetchItems();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}


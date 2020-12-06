//initail state value ...state & search term
export const initialState = {
    term:null,
};

export const actionTypes ={
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state,action)=>{
    console.log(action);

    switch(action.type){    //when term is set , return
        case actionTypes.SET_SEARCH_TERM:
            return{
                ...state,
                term:action.term,
            };
        default:
            return state;
    }
};

export default reducer;
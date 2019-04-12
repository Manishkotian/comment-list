import Constants from '../constants';
const initialState = {
    commentList: [],
    idCount: 0,
};

function Reducer(state = initialState, action) {
    switch (action.type) {
    case Constants.ADD_COMMENT_LIST:
        const value = {
            id: state.idCount,
            comment: [action.payload],
        }
        state.commentList.push(value)
        
        console.log( state.commentList)
        return {
            ...state,
            idCount: state.idCount + 1,
            commentList : state.commentList,
        };
    default:
        return state;
    }
}

export default Reducer;
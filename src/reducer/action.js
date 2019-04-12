import Constants from '../constants';

export const addNewComment = (data) => {
    return ({type:Constants.ADD_COMMENT_LIST, payload:data});
};
export default { addNewComment};




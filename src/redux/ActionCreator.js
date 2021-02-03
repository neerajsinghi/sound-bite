import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
import * as api from '../utils/api'

export const CREATE_COMMENT = 'CREATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UP_VOTES_COMMENT = 'UP_VOTES_COMMENT'
export const DOWN_VOTES_COMMENT = 'DOWN_VOTES_COMMENT'
export const GET_COMMENT = 'GET_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export function createCommentAction(comment) {

  return {
    type: CREATE_COMMENT,
    comment
  }
}

export function createComment(comment) {

  return (dispatch) => {

    api.createComment(comment).then(
      (res) => {
        dispatch(createCommentAction(res))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

export function deleteCommentAction(commentId) {

  return {
    type: DELETE_COMMENT,
    commentId
  }
}

export function deleteComment(commentId) {

  return (dispatch) => {

    api.deleteComment(commentId).then(
      () => {
        dispatch(deleteCommentAction(commentId))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

export function decrVoteCommentAction(comment) {

  return {
    type: DOWN_VOTES_COMMENT,
    comment
  }
}

export function decrVoteComment(commentId) {

  return (dispatch) => {

    api.decrVoteComment(commentId).then(
      (comment) => {
        dispatch(decrVoteCommentAction(comment))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

export function addVoteCommentAction(comment) {

  return {
    type: UP_VOTES_COMMENT,
    comment
  }
}

export function addVoteComment(commentId) {

  return (dispatch) => {

    api.addVoteComment(commentId).then(
      (comment) => {
        dispatch(addVoteCommentAction(comment))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

export function getCommentAction(comment) {

  return {
    type: GET_COMMENT,
    comment
  }
}

export function getComment(commentId) {

  return (dispatch) => {

    api.getComment(commentId).then(
      (comment) => {
        dispatch(getCommentAction(comment))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

export function updateCommentAction(comment) {

  return {
    type: UPDATE_COMMENT,
    comment
  }
}

export function updateComment(comment) {

  return (dispatch) => {

    api.updateComment(comment).then(
      (res) => {
        dispatch(updateCommentAction({comment: res}))
      }
    ).catch(error => {

      console.log(error);

    })

  }

}

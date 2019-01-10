import * as api from '../utils/api'

export const CREATE_COMMENT = 'CREATE_COMMENT'

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


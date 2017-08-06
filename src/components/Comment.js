import React from 'react';
import Divider from 'material-ui/Divider';

import {formatTimestamp} from '../utils/';


/**
 * Render compact category on home page
 */
const Comment = (props) => {
  const { comment } = props;

  return (
    <div>
      <p>{comment.body}</p>
      <p><i>Vote Score: {comment.voteScore}</i></p>
      <p><i>by {comment.author} at {formatTimestamp(comment.timestamp)}</i></p>
      <Divider />
    </div>
  )
};

export default Comment;
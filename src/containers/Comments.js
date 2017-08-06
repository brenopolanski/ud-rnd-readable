import React from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../api/comments/actions';
import Comment from '../components/Comment';

class Comments extends React.Component {
  componentWillMount() {
    const { id } = this.props;

    !this.props.fetching && !this.props.fetched
      && this.props.fetchComments(id);
  }

  render() {
    const {
      comments
    } = this.props;

    const mappedComments = comments
      ? comments
        .filter(comment => (!comment.deleted && !comment.parentDeleted))
        .sort((a, b) => a['voteScore'] < b['voteScore'])
        .map((comment, i) =>
          <Comment
            comment={comment}
            key={i}
          />
        )
      : [];

    return (
      <div>
        <h3>Comments</h3>

        {mappedComments}
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => {
  return {
    comments: comments.comments,
    fetching: comments.fetching,
    fetched: comments.fetched,
    error: comments.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(fetchComments(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
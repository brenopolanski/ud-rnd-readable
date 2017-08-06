import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { pinkA200, transparent } from 'material-ui/styles/colors';

import {
  deletePost,
  editPost,
  fetchPost
} from '../api/post/actions';
import {formatTimestamp} from '../utils/';
import { votePost } from '../api/votePost/actions';

import PostFormModal from './PostFormModal';


/**
 * Detailed view for a post
 */
class DetailedPost extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props.match.params;
    const { updating } = this.props;
    const nextUpdating = nextProps.updating;
    const nextUpdated = nextProps.updated;

    // re-fetch post if vote is successfully updated
    ( updating && !nextUpdating && nextUpdated )
      && this.props.fetchPost(id);
  }

  delete = () => {
    const { id } = this.props.match.params;

    this.props.deletePost(id);
  }

  edit = (values) => {
    const { id } = this.props.match.params;

    values.id = id;
    this.props.editPost(values);
  }

  votePost = (vote) => {
    const { id } = this.props.match.params;

    this.props.votePost(id, vote);
  }

  render() {
    const {
      post,
      fetching,
      fetched,
      updating,
      updated,
      error
    } = this.props;

    if (!post) {
      return (
        <CircularProgress size={80}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%'
          }}
          thickness={5}
        />
      )
    }

    return (
      <article>
        <h2>{post.title}</h2>
        <Chip>
          <Avatar
            size={32}
            color={pinkA200}
            backgroundColor={transparent}
          >
            { post.category ? post.category[0].toUpperCase() : '' }
          </Avatar>
          { post.category }
        </Chip>

        <p>by {post.author} on {formatTimestamp(post.timestamp)}</p>
        <p><i>Vote Score: {post.voteScore}</i></p>

        <PostFormModal
          label="edit"
          handleSubmit={this.edit}
          post={post}
        />

        <RaisedButton
          label="Delete"
          onTouchTap={() => this.delete()}
        />

        <RaisedButton
          label="Up Vote"
          primary={true}
          onTouchTap={() => this.votePost('upVote')}
        />

        <RaisedButton
          label="Down Vote"
          secondary={true}
          onTouchTap={() => this.votePost('downVote')}
        />

        <Paper
          zDepth={1}
          style={{
            marginTop: 20,
            padding: 20
          }}
        >
          <p>{post.body}</p>
        </Paper>
      </article>
    )
  }
}

const mapStateToProps = ({ post, votePost }) => {
  return {
    post: post.post,
    fetching: post.fetching,
    fetched: post.fetched,
    error: post.error,

    updating: votePost.updating,
    updated: votePost.updated,
    voteError: votePost.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    fetchPost: (id) => dispatch(fetchPost(id)),
    editPost: (post) => dispatch(editPost(post)),
    votePost: (id, vote) => dispatch(votePost(id, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedPost);
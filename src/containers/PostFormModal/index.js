
import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { toggleModal } from './actions';

import PostForm from '../PostForm';


class PostFormModal extends React.Component {
  handleOpen = () => {
    this.props.toggleModal(true);
  };

  handleClose = () => {
    this.props.toggleModal(false);
  }

  render () {
    const {
      visible,
      label,
      handleSubmit,
      post,
      categories,
      selectedCategory
    } = this.props;

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    const title = post ? `Edit "${post.title}"` : 'New Post';

    return (
      <div style={{display: 'inline'}}>
        <RaisedButton
          label={label}
          onTouchTap={this.handleOpen}
        />

        <Dialog
          title={title}
          actions={actions}
          modal={false}
          open={visible || false}
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose}
        >
          <PostForm
            post={post}
            onSubmit={handleSubmit}
            categories={categories}
            selectedCategory={selectedCategory}
          />
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = ({ modalDialog }) => {
  return {
    visible: modalDialog.visible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (visible) => dispatch(toggleModal(visible))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFormModal);
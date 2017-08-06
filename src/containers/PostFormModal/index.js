
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
      edit,
      post
    } = this.props;

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton
          label={label}
          onTouchTap={this.handleOpen}
        />

        <Dialog
          title={`Edit "${post.title}"`}
          actions={actions}
          modal={false}
          open={visible || false}
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose}
        >
          <PostForm
            post={post}
            onSubmit={edit}
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
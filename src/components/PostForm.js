import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form'


const PostForm = (props) => {
  const {
    handleSubmit,
    post
  } = props;

  const title = post ? post.title : '';
  const body = post ? post.body : '';

  const formData = {
    title,
    body
  }

  const actions = [
    <FlatButton
      label="Submit"
      primary={true}
      onTouchTap={this.handleClose}
      key={1}
    />,
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="title"
        component="input"
        type="text"
        value={title}
      />

      {actions}
    </form>
  )
};


export default reduxForm({
  form: 'post'
})(PostForm);
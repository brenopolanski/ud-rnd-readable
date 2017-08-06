import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form';


class PostForm extends React.Component {
  componentDidMount() {
    const {
      initialize,
      post
    } = this.props;

    initialize({
      title: post.title,
      body: post.body
    });
  }

  required = (value) => {
    return value ? undefined : 'Required';
  }

  submit = (e) => {
    // manually submit the form due to use of material UI button
    this.props.handleSubmit();
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      post
    } = this.props;

    // Submit button
    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.submit}
        disabled={pristine || submitting}
        key={1}
      />,
    ];

    // wrapper for rendering Material UI when using redux-form Field
    const renderTextField = ({
      input,
      label,
      rows,
      meta: { touched, error },
      ...custom
    }) =>
      <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        rows={rows || 1}
        fullWidth={true}
        {...input}
        {...custom}
      />

    return (
      <form
        onSubmit={handleSubmit}
        ref={(form) => { this.form = form; }}
      >
        <Field
          name="title"
          component={renderTextField}
          label="Title"
          type="text"
          validate={[this.required]}
        />
        <br />
        <Field
          name="body"
          component={renderTextField}
          label="Content"
          rows={15}
          validate={[this.required]}
        />

        <br />

        {actions}
      </form>
    );
  }
};


const postReduxForm = reduxForm({
  form: 'post',
})(PostForm);

export default postReduxForm;
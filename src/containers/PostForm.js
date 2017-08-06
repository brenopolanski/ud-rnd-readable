import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { Field, reduxForm } from 'redux-form';


class PostForm extends React.Component {
  componentDidMount() {
    const {
      initialize,
      post
    } = this.props;

    post && initialize({
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
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
      categories,
      post,
      selectedCategory
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
      disabled,
      meta: { touched, error },
      ...custom
    }) =>
      <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        disabled={disabled}
        rows={rows || 1}
        fullWidth={true}
        {...input}
        {...custom}
      />

    const renderSelectField = ({
      input,
      label,
      value,
      meta: { touched, error },
      children,
      ...custom
    }) =>
      <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        value={value}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
      />

    // render options for category select
    let categoryOptions = '';

    if (categories) {
      categoryOptions = categories.map((cat, i) => {
        const name = cat.name;
        return <MenuItem
          key={i}
          value={name}
          primaryText={name}
        />
      });
    } else if (post) {
      categoryOptions = <MenuItem
        value={post.category}
        primaryText={post.category}
      />
    }

    // render default category
    let defaultCategory = '';
    if (selectedCategory) defaultCategory = selectedCategory;
    if (post) defaultCategory = post.category

    return (
      <form
        onSubmit={handleSubmit}
        ref={(form) => { this.form = form; }}
      >
        <Field
          name="title"
          component={renderTextField}
          label="Title"
          disabled={false}
          type="text"
        />
        <br />
        <Field
          name="author"
          component={renderTextField}
          label="Author"
          disabled={(post && post.author)}
          type="text"
        />
        <br />
        <Field
          label="Category"
          value={defaultCategory}
          name="category"
          component={renderSelectField}
        >
          {categoryOptions}
        </Field>
        <br />
        <Field
          name="body"
          component={renderTextField}
          label="Content"
          disabled={false}
          rows={15}
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
import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


/**
 * Render select field for category
 */
const CategorySelect = (props) => {
  const {
    categories,
    changeOption,
    selected,
  } = props;

  const optionEls = categories && categories.length
    ? categories.map((option, i) =>
        <MenuItem
          value={option.name}
          key={i}
          primaryText={option.name}
        />
      )
    : [];

  const value = selected ||
    (categories && categories.length ? categories[0].name : '');

  return (
    <SelectField
      floatingLabelText="Select Category"
      value={value}
      onChange={changeOption}
      autoWidth={true}
    >
      {optionEls}
    </SelectField>
  )
}

export default CategorySelect;
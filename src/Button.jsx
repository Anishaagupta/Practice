import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
}
Button.propTypes = {
  //propTypes is a property
  name: PropTypes.string, // PropTypes is imported from propr-type
  //name: PropTypes.string.isRequired // isRequired is for requirement(compulsory)
};
Button.defaultProps = {
  // to provide default values
  name: 'Anisha GUpta',
};
export default Button;

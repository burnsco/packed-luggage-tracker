import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Item.styles';

const Item = (props) => (
  <div className="ItemWrapper">
    Test content
  </div>
);

Item.propTypes = {
  // bla: PropTypes.string,
};

Item.defaultProps = {
  // bla: 'test',
};

export default Item;

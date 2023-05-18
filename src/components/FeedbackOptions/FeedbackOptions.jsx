import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map((name, i) => (
        <button key={i} type="button" className={css.option} onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      ))}
    </div>
  )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
}
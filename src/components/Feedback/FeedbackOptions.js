import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const capitalize = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option, idx) => {
        return (
          <button
            className={styles.feedbackBtn}
            type="button"
            name={option}
            key={idx}
            onClick={onLeaveFeedback}
          >
            {capitalize(option)}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

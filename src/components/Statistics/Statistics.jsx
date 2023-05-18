import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
          {(good > 0 || neutral > 0 || bad > 0) ? (
            <div>
          <p>
            Good: <span>{good}</span>
          </p>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>
          </div>
          ) : (<Notification message="There is no feedback :("></Notification>)
          }
          {total > 0  && (
          <p>
            Total: <span>{total}</span>
          </p>
          )}
          {positivePercentage > 0 && (
            <p>
              Positive feedback: <span>{positivePercentage}%</span>
            </p>
          )}
        </div>
    )
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad:  PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}
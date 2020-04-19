import React, { Component, Fragment } from 'react';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    const { name } = evt.target;
    this.setState(s => {
      return { [name]: s[name] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100,
    );
  }

  render() {
    return (
      <Fragment>
        <Section title={'Please leave your feedback!'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'No feedback given!'} />
          )}
        </Section>
      </Fragment>
    );
  }
}

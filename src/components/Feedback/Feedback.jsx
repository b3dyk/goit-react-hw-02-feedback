import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export class Feedback extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleFeedback = evt => {
    const key = evt.target.name;
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.bad + prevState.neutral,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.floor((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

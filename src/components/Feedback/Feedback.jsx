import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
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
    const { good, neutral, bad } = this.state;

    // const keys = Object.keys(this.state);
    // const values = Object.values(this.state);

    return (
      <Section title="Please leave your feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />

        {good || neutral || bad ? (
          <Statistics state={this.state} />
        ) : (
          <p>No feedback given</p>
        )}
      </Section>
    );
  }
}

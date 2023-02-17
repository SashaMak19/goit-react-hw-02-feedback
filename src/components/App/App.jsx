import React, { Component } from 'react';
import { FeedbackOptions } from '../FeedBackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const propertyOfState = e.target.textContent;

    this.setState(pastState => ({
      [propertyOfState]: pastState[propertyOfState] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={keys}
            onLeaveFeedBack={this.handleIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export { App };

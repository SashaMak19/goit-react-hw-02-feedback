import PropTypes from 'prop-types';
import { SetButton, Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <SetButton>
      {options.map((option, index) => (
        <Btn key={index} type="button" onClick={onLeaveFeedBack}>
          {option}
        </Btn>
      ))}
    </SetButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};

export { FeedbackOptions };

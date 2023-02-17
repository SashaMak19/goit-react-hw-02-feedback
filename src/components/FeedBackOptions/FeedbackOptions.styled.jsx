import styled from 'styled-components';

const SetButton = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Btn = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  border-radius: 4px;

  background-color: #fff;
  text-transform: capitalize;
  font-size: 20px;
  :hover {
    background-color: #bfbff7;
  }
`;

export { SetButton, Btn };

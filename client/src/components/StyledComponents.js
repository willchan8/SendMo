import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #FFFFFF;
  margin: 5.5rem auto;
  max-width: 365px;
  padding: 1rem 1.5rem;
  border: 1px solid #FBFBFB;
  border-radius: 4px;
  box-shadow: 0px 2px 6px 2px rgba(0,0,0,0.1);
`;

export const HeaderContainer = styled.div `
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  height: auto;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);
  font-size: 40px;
  font-family: 'Lobster', cursive;
  padding: 5px;
  position: fixed;
  width: 100%;
  top: 0px;
`

export const Title = styled.div`
  text-align: center;
  margin: 10px 0px;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size 25px;
  }
`

export const TextSmall = styled.div`
  text-align: center;
  margin: 10px 0px;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size 20px;
  }
`

export const TextBig = styled.div`
  text-align: center;
  margin: 10px 0px;
  font-size: 40px;
  @media (max-width: 768px) {
    font-size 30px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: -4px;
  margin-bottom: 16px;
  resize: vertical;
`;

export const Button = styled.button`
  background: #18A0B3;
  color: #FFFFFF;
  width: 100%;
  font-size: 1em;
  padding: 1rem 0;
  margin: 1rem 0;
  border-radius: 3px;
  cursor: pointer;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  margin-top: -4px;
  margin-bottom: 16px;
`;

export const ItemContainer = styled.div`
  background: #FFFFFF;
  margin-bottom: 1rem;
  max-width: 365px;
  padding: 1rem 1.5rem;
  border: 1px solid #FBFBFB;
  border-radius: 4px;
  box-shadow: 0px 2px 6px 2px rgba(0,0,0,0.1);
`;
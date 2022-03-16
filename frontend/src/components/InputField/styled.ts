import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 2rem 2rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 0.5rem 1rem;
  }
  label {
    font-size: 1.5rem;
    color: ${theme.primary.color};
  }
`;

export const TextInput = styled.input`
  padding: 1rem 1rem;
  border: 1px solid ${theme.color_codes.black};
  box-sizing: border-box;
  border-radius: 0.3rem;
  width: 100%;
`;

export const SelectContainer = styled.select`
  padding: 1rem 1rem;
  border: 1px solid ${theme.color_codes.black};
  box-sizing: border-box;
  border-radius: 0.3rem;
  width: 100%;
`;

export const PlayButton = styled.button`
  margin: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid ${theme.primary.color};
  background: transparent;
  color: ${theme.primary.text};
  transition: all 0.5s ease;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${theme.primary.color};
    color: ${theme.color_codes.white};
  }
`;

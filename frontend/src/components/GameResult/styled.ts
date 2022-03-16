import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  color: ${theme.color_codes.black};
`;

export const ResultHeader = styled.h1`
  font-weight: bold;
  letter-spacing: 0.3rem;
`;

export const ResultDoorSwitches = styled.h3`
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ResultContainer = styled.div`
  width: 50%;

  & > * {
    margin: 2rem 0rem;
  }
`;

export const ResultNames = styled.h3`
  font-weight: lighter;
  font-size: 1.5rem;
`;

export const ResultNumber = styled.span`
  color: ${theme.primary.color};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const PlayButton = styled.button`
  margin: 1rem;
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

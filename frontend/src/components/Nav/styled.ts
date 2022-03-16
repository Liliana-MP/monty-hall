import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../theme";

export const Header = styled.nav`
  min-height: 5rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${theme.secondary.color};
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: ${theme.secondary.text};
  font-size: 1.8rem;
  font-family: "Lobster Two", cursive;
  font-weight: bold;
`;

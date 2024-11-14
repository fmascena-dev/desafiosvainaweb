import styled from 'styled-components';

export const Principal = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  box-shadow: 0 1px 15px -5px rgba(30, 57, 50, 1);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
`;

export const Lista = styled.li`
  list-style: none;
  font-size: 1.2rem;

  a {
    color: rgba(30, 57, 50, 1);
    text-decoration: none;

    &:hover {
      color: rgba(30, 57, 50, 0.7);
      text-decoration: underline;
    }
  }
`;

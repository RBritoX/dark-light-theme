import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.card};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  span {
    color: ${(props) => props.theme.colors.text};
  }
`;

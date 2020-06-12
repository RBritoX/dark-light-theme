import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import * as S from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <h2>
        <span>&#60;</span>
        RB
        <span>&#62;</span>
      </h2>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        onColor={colors.primary}
        offColor={colors.primary}
      />
    </S.Container>
  );
};

export default Header;

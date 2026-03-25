import * as S from "./styles";

import { Logo } from '../../molecules/Logo'; //Importando e colocando dentro do Header
import { Menu } from '../Menu';
import { Button } from '../../atoms/Button';

export const Header = () => {
  return (
    <S.Box>
      <Logo/> 
      <Menu/>
      <Button/>
    </S.Box>
  );
};

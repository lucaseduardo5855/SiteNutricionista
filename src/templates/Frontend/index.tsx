import { Header } from "../../organisms/Header";
import * as S from "./styles";

type FrontendProps = {
  children: React.ReactNode; //children = tudo que coloca dentro das tags dos componentes no caso ReactNode ta falando q pode vir texto, html e outros componentes
};

export const Frontend = ({ children }: FrontendProps) => {
  return (
    <S.Container>
      <Header></Header>
      {children}
    </S.Container>
  );
};

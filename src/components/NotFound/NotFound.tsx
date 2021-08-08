import React from 'react';
import { NotFoundContainer, NotFoundHeading, NotFoundText } from './styles';

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>Empresa não encontrada</NotFoundHeading>
      <NotFoundText>
        Verifique se o simbolo digitado corresponde com alguma empresa da bolsa
      </NotFoundText>
      <NotFoundText>
        Exemplo: FB para Facebook, AMZN para AMAZON, MSFT para Microsoft...
      </NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;

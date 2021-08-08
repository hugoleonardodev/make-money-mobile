import React from 'react';
import { CompanyNamesContainer, Heading3, Heading5 } from './styles';

interface CompanyNameProps {
  companySymbol: string;
  companyName: string;
}

const CompanyName: React.FC<CompanyNameProps> = ({
  companySymbol,
  companyName,
}) => {
  const nameArray = companyName.split(' ');
  const fixedName = `${nameArray[0]} ${nameArray[1]}`;
  return (
    <CompanyNamesContainer>
      <Heading3>{companySymbol}</Heading3>
      <Heading5>{fixedName}</Heading5>
    </CompanyNamesContainer>
  );
};

export default CompanyName;

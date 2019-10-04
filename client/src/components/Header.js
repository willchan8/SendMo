import React from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import { HeaderContainer } from './StyledComponents';

const Header = () => 
  (
    <HeaderContainer>
      <div className="icon"><FaMoneyBillWave /></div>
      <div>SendMo</div>
    </HeaderContainer>
  )

export default Header;
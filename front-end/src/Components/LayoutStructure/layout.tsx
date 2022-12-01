


import Image from 'next/image';
import React from 'react';
import { Button, FaCartPlusIcon, FaSearchIcon, FaUSerAltIcon, Footer, Header, Main, TitleHeard } from './layout.styled';

// import { Container } from './styles';
import Sapato from '../../assets/image/sapatoFem.png'

export interface HomeProps {
  isHome?: boolean
  children?: React.ReactNode
}
const LayoutStructure: React.FC<HomeProps> = ({ isHome, children }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flex: 1, flexDirection: 'column' }}>
      <Header>
        {isHome ? (
          <>
            <TitleHeard>Escolha seu calçado</TitleHeard>
            <Button><FaSearchIcon /></Button>
          </>
        ) : (
          <></>
        )}
      </Header>
      <Main>
        <p>oii</p>
      </Main>
      <Footer>
        <div>
          <Image src={Sapato} alt='sapato femino' width={32} height={32} />
          <FaUSerAltIcon />
          <FaCartPlusIcon />
        </div>
      </Footer>
    </div>
  );
}

export default LayoutStructure;
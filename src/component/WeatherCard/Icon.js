import React from 'react';
import styled from '@emotion/styled'
import img from '../../image/pngkit_sun-png_16239.png'

const Icon = () => {

  const Logo = styled.img`
  width: 60px;
  `

  return ( 
    <>
      <Logo src={img} alt="Icon Weather" title="Icon Weather" />
    </>
  );
}

export default Icon;

import React from 'react';
import { Box } from '@material-ui/core';
import { ReactComponent as QuickIcon } from 'assets/images/quickIcon.svg';
import 'components/styles/Footer.scss';

const Footer: React.FC = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <Box className='footer'>
      <p>© {copyrightYear} HalalSwap.</p>
    </Box>
  );
};

export default Footer;

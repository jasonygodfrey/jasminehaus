import React, { useEffect } from 'react';
import Logo from '../../blocks/logo/Logo';
import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';
import jlogo from '../../assets/img/logo/jlogo.png';

const Header = () => {
  useEffect(() => {
    // Store original background color
    const originalBGColor = document.body.style.backgroundColor;

    // Change background color
    document.body.style.backgroundColor = 'transparent';

    return () => {
      // Revert to original background color on component unmount
      document.body.style.backgroundColor = originalBGColor;
    };
  }, []);

  return (
    <header id="header" className="site-header">
      <div className="wrapper d-flex justify-content-between">
        <div className="align-self-center">
          <Logo image={jlogo} style={{ width: '400px', height: '200px' }} />
        </div>
        <MenuModal />
      </div>
    </header>
  );
};

export default Header;

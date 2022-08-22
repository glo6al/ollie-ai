import React from 'react';

const headerStyles = {
    backgroundColor: 'blue',
}

function Header(){
    return(
        <header  className='header-class' style={headerStyles}>
            <p>OLLIE AI</p>
        </header>
    )
}

export default Header;
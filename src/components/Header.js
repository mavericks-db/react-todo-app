import React from 'react';

function Header() {
  return (
    <header
      style={{
        fontSize: '6rem',
        fontWeight: '600',
        marginBottom: '2rem',
        lineHeight: '1em',
        color: '#ececec',
        textTransform: 'lowercase',
        textAlign: 'center',
      }}
    >
      <h1>todos</h1>
    </header>
  );
}

export default Header;

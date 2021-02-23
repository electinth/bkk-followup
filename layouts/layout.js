import React from 'react';
import Header from 'components/header';

export default function Layout(props) {
  return (
    <div>
      <Header />

      <div
        id="main"
        className="fixed inset-0 overflow-hidden"
        style={{ top: '60px' }}
      >
        {props.children}
      </div>
    </div>
  );
}

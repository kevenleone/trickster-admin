import React from 'react';

import Navbar from '../Navbar';

export default function Layout ({ children }) {
  return (
    <div className="application_layout">
      <div className="background">
        <div className="application_container">
          <img src="images/arts/banner.png" draggable={false} className='w-100'/>
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
}

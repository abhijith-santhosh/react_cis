import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: '📝', label: 'Register', id: 'register' },
    { icon: '🖥️', label: 'Makescreen', id: 'makescreen' },
    { icon: '📦', label: 'Dispatching', id: 'dispatching' },
    { icon: '📋', label: 'Orders', id: 'orders' },
    { icon: '🏪', label: 'Store', id: 'store' },
    { icon: '📊', label: 'Dashboard', id: 'dashboard' },
    { icon: '🔔', label: 'Notifications', id: 'notifications' },
    { icon: '🚪', label: 'Log off', id: 'logoff' },
    { icon: '⛶', label: 'Fullscreen', id: 'fullscreen' }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (id) => {
    console.log(`Clicked: ${id}`);
    if (id === 'fullscreen') {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger-btn" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">APACHE</h2>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="sidebar-item"
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
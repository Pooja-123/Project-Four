import React from 'react';
// import Header from '../styles/HeaderStyles';

const Header = React.createClass({
  render: function() {
    return (
      <header style={HeaderStyles}>
        <h1 style={HeaderStyles.h1}>Healthy Hospital</h1>
        <nav>
          <ul style={HeaderStyles.ul}>
            <li><a href="#" style={HeaderStyles.a}>Records</a></li>
            <li><a href="#" style={HeaderStyles.a}>New Records</a></li>
          </ul>
        </nav>
      </header>
    );
  }
});

export default Header;

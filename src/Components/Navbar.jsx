import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const mystyle = {
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'Arial',
    display: 'flex',
    justifyContent: 'space-between', // Add this line for space between logo and links
  };

  const nav = {
    float: 'left',
    fontSize : '20px',
    paddingTop : '20px',
  };

  const linkStyle = {
    display: 'inline',
    margin: '0 10px',
    transition: 'color 0.3s',
    paddingRight : '50px'
  };

  const an = {
    textDecoration: 'none',
    color: 'white',
    textTransform: 'uppercase',
  };

  const logo = {
    fontSize : '20px',
    paddingLeft : '70px'
  };

  const navigation = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'add',
    },
    {
      id: 3,
      link: 'list',
    },
    {
      id: 4,
      link: 'contact',
    },
  ];

  return (
    <div style={mystyle}>
      <div style={logo}>
        <h1><i>TodoList</i></h1>
      </div>
      <div style={nav}>
        <ul>
          {navigation.map(({ id, link }) => (
            <li style={linkStyle} key={id} className="top_nav">
              <Link to={link} style={an}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

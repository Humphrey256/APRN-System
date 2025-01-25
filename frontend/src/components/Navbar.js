import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>ANPRSystem</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/UploadImage" style={styles.link}>Upload Image</Link>
        <Link to="/Results" style={styles.link}>Results</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
  },
  title: {
    margin: 0,
  },
  link: {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none',
  },
};

export default Navbar;

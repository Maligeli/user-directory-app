import React from 'react';

const UserCard = ({ user }) => {
  const styles = {
    card: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      width: '300px',
      transition: 'transform 0.2s ease',
    },
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
    },
    label: {
      fontWeight: 'bold',
      color: '#555',
    },
    value: {
      color: '#444',
    },
    line: {
      margin: '6px 0',
      fontSize: '14px',
    },
    link: {
      color: '#007acc',
      textDecoration: 'none',
    }
  };

  return (
    <div
      style={styles.card}
      onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h2 style={styles.name}>{user.name}</h2>
      <p style={styles.line}>
        <span style={styles.label}>Email: </span>
        <span style={styles.value}>{user.email}</span>
      </p>
      <p style={styles.line}>
        <span style={styles.label}>Phone: </span>
        <span style={styles.value}>{user.phone}</span>
      </p>
      <p style={styles.line}>
        <span style={styles.label}>Company: </span>
        <span style={styles.value}>{user.company.name}</span>
      </p>
      <p style={styles.line}>
        <span style={styles.label}>Website: </span>
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          {user.website}
        </a>
      </p>
    </div>
  );
};

export default UserCard;

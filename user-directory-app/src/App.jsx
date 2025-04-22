import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Oops! Something went wrong while fetching users.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredData = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredData);
  }, [search, users]);

  const styles = {
    appContainer: {
      fontFamily: 'Segoe UI, sans-serif',
      padding: '30px 20px',
      background: '#f0f2f5',
      minHeight: '100vh',
    },
    title: {
      textAlign: 'center',
      color: '#222',
      fontSize: '32px',
      marginBottom: '20px',
    },
    input: {
      display: 'block',
      margin: '0 auto 30px',
      padding: '12px 16px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      width:'30%'
      
    },
    userGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    },
    loading: {
      textAlign: 'center',
      fontSize: '18px',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '16px',
    }
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.title}>📇 User Directory</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={styles.input}
      />
      {loading && <p style={styles.loading}>Loading users...</p>}
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.userGrid}>
        {!loading && !error && filtered.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;

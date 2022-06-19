import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './interfaces';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () => {
    setUser({
      name: "Stan",
      age: 23,
      country: "UK",
      address: {
        street: "123 Main St",
        city: "Edinbourough",
        zip: "44488",
      }
    });
  };

  return (
    <>
      <button onClick={fetchUser}>Fetch User</button>
      {user && <p>{user.name}</p>}
    </>
  );
}

export default App;

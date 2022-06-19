import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const defaultFormData = {
  title: "",
  body: "",
};

function App() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={onChange} />
        <br></br>
        <label htmlFor="body">Body</label>
        <input type="text" id="body" value={body} onChange={onChange} />
        <br></br>
        <button type="submit">Create post</button>
      </form>
    </>
  );
}

export default App;

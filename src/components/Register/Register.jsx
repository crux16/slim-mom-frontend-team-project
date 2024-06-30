import React from 'react';

const Register = () => {
  return (
    <form>
      <h1>Register</h1>
      <label>
        Username
        <input type="text" name="username" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

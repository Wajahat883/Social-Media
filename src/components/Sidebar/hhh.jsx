import React, { useState } from 'react';

export default function Formvalidation() {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, seterror] = useState({});

  const handleonchange = (e) => {
    setformdata(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validationerror = () => {
    const newerror = {};

    // Name: only letters, min 3 chars
    if (!formdata.name.trim()) {
      newerror.name = 'Name is required';
    } else if (!/^[A-Za-z ]{3,}$/.test(formdata.name)) {
      newerror.name = 'Name must be at least 3 letters';
    }

    // Email validation
    if (!formdata.email.trim()) {
      newerror.email = 'Email is required';
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formdata.email)) {
      newerror.email = 'Enter a valid email';
    }

    // Password validation
    if (!formdata.password) {
      newerror.password = 'Password is required';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(formdata.password)) {
      newerror.password = 'Password must be at least 6 characters with letters and numbers';
    }

    // Confirm Password match
    if (formdata.password !== formdata.confirmPassword) {
      newerror.confirmPassword = 'Passwords do not match';
    }

    return newerror;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validationerror();
    seterror(errors);
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
      // console.log(formdata); // do whatever you want here
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-[720px]'>
      <div className='relative p-4 w-full'>
        <input
          type='text'
          name='name'
          value={formdata.name}
          onChange={handleonchange}
          placeholder='Enter your name'
          className='w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg'
        />
        {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
      </div>

      <div className='relative p-4 w-full'>
        <input
          type='text'
          name='email'
          value={formdata.email}
          onChange={handleonchange}
          placeholder='Enter your valid email'
          className='w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg'
        />
        {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
      </div>

      <div className='relative p-4 w-full'>
        <input
          type='password'
          name='password'
          value={formdata.password}
          onChange={handleonchange}
          placeholder='Password'
          className='w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg'
        />
        {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
      </div>

      <div className='relative p-4 w-full'>
        <input
          type='password'
          name='confirmPassword'
          value={formdata.confirmPassword}
          onChange={handleonchange}
          placeholder='Confirm password'
          className='w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg'
        />
        {error.confirmPassword && <p className="text-red-500 text-sm">{error.confirmPassword}</p>}
      </div>

      <div className='p-4'>
        <button type='submit' className='w-40 bg-blue-500 text-white py-3 rounded-lg'>
          Submit
        </button>
      </div>
    </form>
  );
}

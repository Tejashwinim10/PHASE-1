import React from 'react'

function User() {
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value

    console.log('Name:', name)
    console.log('Email:', email)
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default User

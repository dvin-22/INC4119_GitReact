import React, { useState } from 'react'

const LoginPage = () => {
  const [form, setForm] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('로그인 시도: ' + form.username)
  }

  return (
    <section>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="아이디" onChange={handleChange} required />
        <input name="password" type="password" placeholder="비밀번호" onChange={handleChange} required />
        <button type="submit">로그인</button>
      </form>
    </section>
  )
}

export default LoginPage

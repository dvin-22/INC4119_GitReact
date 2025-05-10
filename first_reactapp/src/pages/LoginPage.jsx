import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (id === 'admin' && pw === '1234') {
      setError('')
      alert('로그인 성공!')
      navigate('/')
    } else {
      setError('아이디 또는 비밀번호가 틀렸습니다.')
    }
  }

  return (
    <div className="card" style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  )
}

export default LoginPage
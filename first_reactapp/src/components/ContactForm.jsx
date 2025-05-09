import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('메시지가 전송되었습니다.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="이름" onChange={handleChange} required />
      <input name="email" placeholder="이메일" type="email" onChange={handleChange} required />
      <textarea name="message" placeholder="메시지" rows="5" onChange={handleChange} required />
      <button type="submit">전송</button>
    </form>
  )
}

export default ContactForm

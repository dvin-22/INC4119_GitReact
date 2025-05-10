import React from 'react'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <section>
      <h2>문의</h2>
      <p>이메일 : dain5835@gmail.com</p>
      <p>전화번호 : 010-1234-5678</p>
      <p>Github : https://github.com/dvin-22</p>
      <p>아래 양식을 작성하여 메시지를 남겨주세요.</p>
      <ContactForm />
    </section>
  )
}

export default ContactPage
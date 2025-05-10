import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>나만의 포트폴리오</h2>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/projects">프로젝트</Link>
        <Link to="/contact">문의</Link>
        <Link to="/login">로그인</Link>
      </nav>
    </header>
  )
}

export default Header

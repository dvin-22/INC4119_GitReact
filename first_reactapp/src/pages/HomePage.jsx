import React from 'react'
import FeatureCard from '../components/FeatureCard'

const HomePage = () => {
  return (
    <section>
      <h1>나만의 포트폴리오 만들기</h1>
      <p>소프트웨어공학 React 포트폴리오 페이지</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <FeatureCard title="소개" description="나의 이력과 경험을 소개합니다." link="/about" />
        <FeatureCard title="프로젝트" description="진행한 프로젝트들을 확인하세요." link="/projects" />
        <FeatureCard title="연락처" description="문의는 언제든지 환영입니다." link="/contact" />
        <FeatureCard title="로그인" description="로그인하여 더 많은 기능을 사용하세요." link="/login" />
      </div>
    </section>
  )
}

export default HomePage

import React from 'react'
import FeatureCard from '../components/FeatureCard'

const HomePage = () => {
  return (
    <section>
      <h1>나만의 포트폴리오 만들기 2023111933</h1>
      <p>소프트웨어공학_02 React 포트폴리오 페이지입니다.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <FeatureCard title="소개" description="나의 이력과 기술 스택을 소개합니다." link="/about" />
        <FeatureCard title="프로젝트" description="진행한 프로젝트 입니다다." link="/projects" />
        <FeatureCard title="문의" description="연락처와 함께 문의 주세요." link="/contact" />
        <FeatureCard title="로그인" description="로그인하여 더 많은 기능을 사용하세요." link="/login" />
      </div>
    </section>
  )
}

export default HomePage
import React from 'react'
import { ProfileCard, StackCard } from '../components/ProfileCard';

const AboutPage = () => {
  return (
    <div>
      <h2>소개</h2>
      <ProfileCard />
      <h2>보유기술</h2>
      <StackCard />
    </div>
  )
}

export default AboutPage
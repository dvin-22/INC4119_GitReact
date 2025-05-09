import React from 'react'
import doraImage from '../assets/dora.jpg'

const AboutPage = () => {
  return (
    <section>
      <h2>소개</h2>
      <img src={doraImage} alt="프로필" style={{ width: '150px', borderRadius: '50%' }} />
      <p>
        안녕하세요. 저는 창의적인 개발자입니다. 웹 개발, 앱 개발 등 다양한 프로젝트를 진행해왔고 React를 활용한 UI 구성에 강점을 가지고 있습니다.
      </p>
    </section>
  )
}

export default AboutPage

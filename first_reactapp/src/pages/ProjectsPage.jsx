import React from 'react'
import ProjectCard from '../components/ProjectCard'
import CalculatePage from './CalculatePage'

const ProjectsPage = () => {
  return (
    <section>
      <h2>프로젝트</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3>React 계산기</h3>
          <p>컴포넌트를 통해 실제 계산기를 실행해볼 수 있습니다.</p>
          <CalculatePage />
        </div>
        <ProjectCard title="Spring 위키 시스템" description="위키 기반 검색 시스템 개발" />
      </div>
    </section>
  )
}

export default ProjectsPage

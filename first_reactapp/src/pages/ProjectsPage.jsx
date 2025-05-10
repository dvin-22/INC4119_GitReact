import React from 'react'
import ProjectCard from '../components/ProjectCard'
import CalculatePage from './CalculatePage'

const ProjectsPage = () => {
  return (
    <section>
      <h2>프로젝트</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <ProjectCard title="React 계산기" description="컴포넌트를 통해 실제 계산기를 실행해볼 수 있습니다.">
          <CalculatePage />
        </ProjectCard>

        <ProjectCard title="Spring 위키 시스템" description="위키 기반 검색 시스템 개발" />
        <ProjectCard title="Node.JS SNS 서비스" description="https://github.com/dvin-22" />
      </div>
    </section>
  )
}

export default ProjectsPage
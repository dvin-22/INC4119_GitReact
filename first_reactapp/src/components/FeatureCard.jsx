import React from 'react'

const FeatureCard = ({ title, description, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <button onClick={() => window.location.href = link}>더 알아보기</button>}
    </div>
  )
}

export default FeatureCard

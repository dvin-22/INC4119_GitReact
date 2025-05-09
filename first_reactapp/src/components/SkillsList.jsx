function SkillsList() {
    const skills = ['HTML/CSS', 'JavaScript', 'React', 'Node.js'];
    return (
      <ul>
        {skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    );
  }
  
  export default SkillsList;
  
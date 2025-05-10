import image from '../assets/myimage.jpg';

const ProfileCard = () => {
  return (
    <div>
      <img src={image} alt="프로필" style={{ width: '150px', borderRadius: '10%' }} />
      <p>  이름 : 김다인 </p>
      <p>  학번 : 2023111933 </p>
      <p>  전공 : 정보통신공학과 </p>
      <p>  네트워크와 코드의 유지 보수에 관심이 있습니다. </p>
    </div>
  );
}

const StackCard = () => {
  return (
    <div>
      <p>  기술 스택 : Spring, Node.js, React, MySQL, MongoDB </p>
      <p>  사용 언어 : C, C++, Python, JAVA, JavaScript </p>
    </div>
  );
}

export { ProfileCard, StackCard };
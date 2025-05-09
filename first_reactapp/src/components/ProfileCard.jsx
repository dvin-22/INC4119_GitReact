import dora from '../assets/dora.jpg';

function ProfileCard() {
  return (
    <div>
      <img src={dora} alt="프로필 이미지" width="150" />
      <h3>이름</h3>
      <p>안녕하세요! 저는 React에 흥미를 가진 개발자입니다.</p>
    </div>
  );
}

export default ProfileCard;

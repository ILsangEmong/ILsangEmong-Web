import { useNavigate } from 'react-router-dom';
// import backgroundUrl, { ReactComponent as Background } from '../assets/background_groupmain.svg';
// import backgroundUrl from '../assets/background_groupmain.svg';
import backgroundUrl from '../assets/background_groupmain.png';
import styled from 'styled-components';
// import { GroupName, StyledBtn, Container } from './Result';

export default function GroupMain() {
  const navigate = useNavigate();
  return (
    <StContainer url={backgroundUrl}>
      <OurGroup>GROUP NAME: 몽몽이들</OurGroup>

      <WriteBtn onClick={() => navigate('/group/comment')}>기억 편지 쓰기</WriteBtn>
      <button onClick={() => navigate('/group/expire')}>
        시연 위해 바로 기한 만료하는 버튼 ㅎㅎ
      </button>
    </StContainer>
  );
}

// const StContainer = styled.main<{ url: string }>`
//   width: 100%;
//   height: 100vh;
//   position: relative;
//   background-image: ${(props) => `url(${props.url})`};
//   background-repeat: no-repeat;
//   background-size: cover;
// `;
const StContainer = styled.div<{ url: string }>`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const OurGroup = styled.div`
  width: 571px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  margin-top: 40px;
  margin-bottom: 790px;

  z-index: 500;
`;
const WriteBtn = styled.button`
  width: 387px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;

  border: 2px solid #000000;
  box-shadow: 10px 10px 0px #000000;
  border-radius: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  margin-bottom: 90px;
`;

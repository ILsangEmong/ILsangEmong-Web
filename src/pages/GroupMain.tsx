import { useNavigate } from 'react-router-dom';
// import backgroundUrl, { ReactComponent as Background } from '../assets/background_groupmain.svg';
// import backgroundUrl from '../assets/background_groupmain.svg';
import backgroundUrl from '../assets/background_groupmain.png';
import styled from 'styled-components';
import { GroupName, StyledBtn, Container } from './Result';

export default function GroupMain() {
  const navigate = useNavigate();
  return (
    <Container url={backgroundUrl}>
      <OurGroup>
        <span>GROUP NAME: 몽몽이들</span>
      </OurGroup>

      <WriteBtn onClick={() => navigate('/group/comment')}>
        <span>기억 편지 쓰기</span>
      </WriteBtn>
    </Container>
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

const OurGroup = styled(GroupName)`
  width: 571px;
  height: 80px;

  z-index: 500;
`;
const WriteBtn = styled(StyledBtn)`
  width: 450px;
  height: 80px;
  z-index: 500;
`;

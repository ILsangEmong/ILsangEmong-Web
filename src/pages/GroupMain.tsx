import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GroupName, StyledBtn, Container } from './Result';

export default function GroupMain() {
  const navigate = useNavigate();
  return (
    <Container>
      <OurGroup>
        <span>GROUP NAME: 몽몽이들</span>
      </OurGroup>
      <WriteBtn onClick={() => navigate('/group/comment')}>
        <span>기억 편지 쓰기</span>
      </WriteBtn>
    </Container>
  );
}

const OurGroup = styled(GroupName)`
  width: 571px;
  height: 80px;
`;
const WriteBtn = styled(StyledBtn)`
  width: 450px;
  height: 80px;
`;

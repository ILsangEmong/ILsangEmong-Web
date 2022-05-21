import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Expire() {
  console.log('>>>>>expire page 입니다');

  return (
    <>
      <StTitle>그룹참여타이틀</StTitle>

      <StContainer>
        {/* <Img1 />
        <Img2 />
        <Img3 />
        <Img4 /> */}
      </StContainer>

      <Link to={'/group/expire'}>
        <StBtn>입장하기</StBtn>
      </Link>
    </>
  );
}

const StTitle = styled.div`
  // width: ;
  // height: ;

  display: flex;
  justify-content: center;

  // margin-bottom :3rem;
`;

const StContainer = styled.div`
  // width: ;
  // height: ;

  display: flex;
  flex-direction: row;
  justify-content: center;

  // gap: 3rem;
`;

const StBtn = styled.button`
  // width: ;
  // height: ;

  display: flex;
  justify-content: center;

  // &:hover{
  //   background-color : skyblue;
  //   color : blue
  // }
`;

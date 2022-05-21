import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

export default function CommentForm() {
  const createComment = async () => {
    const response = await api.juyeongService.createComment({
      inviteCode: 'vQHTGS',
      comment: '우리 몽몽이들은 너무너무 귀엽다',
    });
    console.log(response);
  };
  return (
    <>
      <StTitle>몽몽이들</StTitle>

      <StContainer></StContainer>

      <Link to={'/group'}>
        <StBtn onClick={createComment}>작성완료</StBtn>
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

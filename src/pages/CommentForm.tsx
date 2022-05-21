import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import codeState from '../stores';
import { CommentInfo } from '../services/api/types/juyeong';
import { ReactComponent as ImgComment } from '../assets/img_comment.svg';

export default function CommentForm() {
  const [comment, setComment] = useState('');
  const code = useRecoilValue(codeState);
  const createComment = async (commentInfo: CommentInfo) => {
    const response = await api.juyeongService.createComment(commentInfo);
    console.log(response);
  };

  return (
    <StCommentForm>
      <StTitle>GROUP NAME: 몽몽이들</StTitle>

      <StContainer>
        <label>Q. 오늘의 일상 속 기억하고 싶은 일은 무엇이었나요?</label>
        <StInputReviewText
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="50자 이내로 내용을 적어주세요."
          maxLength={50}
        />
      </StContainer>

      <Link to={'/group'}>
        <StBtn onClick={() => createComment({ inviteCode: code, comment: comment })}>
          작성완료
        </StBtn>
      </Link>
      <ImgComment />
    </StCommentForm>
  );
}
const StCommentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & > *:last-child {
    position: absolute;
    top: 444px;
    left: 1205px;
  }
`;
const StTitle = styled.div`
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
  margin-bottom: 211px;
`;

const StContainer = styled.div`
  & > label {
    width: 653px;
    height: 38px;

    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #000000;

    margin-bottom: 60px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StInputReviewText = styled.textarea`
  width: 868px;
  height: 222px;

  padding: 40px;
  margin-bottom: 259px;

  background: #ffffff;

  border: 2px solid #000000;
  border-radius: 10px;

  outline: none;
  resize: none;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  letter-spacing: -0.01em;

  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    letter-spacing: -0.01em;

    color: #b1b1b1;
  }
`;

const StBtn = styled.button`
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

  color: #000000;

  margin-bottom: 90px;
`;

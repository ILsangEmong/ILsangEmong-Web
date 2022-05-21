import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { api } from '../services/api';
import codeState from '../stores';
import Background from '../asset/ImgBackground.png';

export default function Result() {
  const [commentList, setCommentList] = useState<string[]>([]);
  const code = useRecoilValue(codeState);
  const [isModal, setIsModal] = useState(false);
  const getResult = async (code) => {
    const list = await api.seyoungService.getResult(code);
    setCommentList(list);
  };

  useEffect(() => {
    getResult(code);
  }, []);
  return (
    <Container url={Background}>
      <GroupName>
        <span>몽몽이들의 추억</span>
      </GroupName>
      {commentList.map((data, idx) => {
        return <CommentContainer key={idx}>{data}</CommentContainer>;
      })}
      <StyledBtn onClick={() => setIsModal(!isModal)}>
        <span>일상추억 공유</span>
      </StyledBtn>
      {isModal && (
        <ResultModal>
          <span>완성된 우리의 이야기</span>
          {commentList.map((data, idx) => {
            return <CommentContainer key={idx}>{data}</CommentContainer>;
          })}
          <button>공유하기</button>
        </ResultModal>
      )}
    </Container>
  );
}
export const Container = styled.div<{ url: string }>`
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

export const GroupName = styled.div`
  width: 570px;
  height: 80px;

  margin-top: 40px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  text-align: center;
  display: flex;
  margin-bottom: 790px;
  align-items: center;
  justify-content: center;
  & > span {
    display: inline-block;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    color: #000000;
  }
`;
export const StyledBtn = styled.button`
  // position: relative;
  width: 387px;
  height: 80px;
  // background: #ffffff;
  // border: 2px solid #000000;
  // box-shadow: 10px 10px 0px #000000;
  // border-radius: 20px;
  // text-align: center;
  // margin-bottom: 90px;
  & > span {
    font-weight: 700;
    font-size: 32px;
    color: #000000;
  }

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
  margin-bottom: 75px;
`;
const CommentContainer = styled.div``;
const ResultModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: column;
  justify-content: column;
`;

import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { api } from '../services/api';
import codeState from '../stores';

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
    <Container>
      <GroupName>그룹 참여 타이틀</GroupName>
      {commentList.map((data, idx) => {
        return <CommentContainer key={idx}>{data}</CommentContainer>;
      })}
      <ShareBtn onChange={() => setIsModal(!isModal)}>공유하기</ShareBtn>
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: column;
  justify-content: column;
`;

const GroupName = styled.div``;
const ShareBtn = styled.button``;
const CommentContainer = styled.div``;
const ResultModal = styled.div``;

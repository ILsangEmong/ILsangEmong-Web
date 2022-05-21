import React, { useState, useEffect } from 'react';
// import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { api } from '../services/api';
// import codeState from '../stores';
// import Background from '../asset/ImgBackground.png';
import { default as imgBg } from '../assets/bg_img.png';
import { default as ImgLetter } from '../assets/img_letter.png';
import { default as ImgStamp } from '../assets/stamp.svg';

export default function Result() {
  const [commentList, setCommentList] = useState<string[]>([]);
  // const code = useRecoilValue(codeState);
  // console.log('dd', code);
  const [isModal, setIsModal] = useState(false);
  const getResult = async (code) => {
    console.log(code);
    const list = await api.seyoungService.getResult(code);
    setCommentList(list);
  };

  useEffect(() => {
    const code = localStorage.getItem('code');
    getResult(code);
  }, []);
  return (
    <Container url={imgBg}>
      <GroupName>
        <span>몽몽이들의 추억</span>
      </GroupName>
      <StWrapper>
        <img src={ImgLetter} />
        <div>
          {commentList.map((data, idx) => {
            return <CommentContainer key={idx}>{data}</CommentContainer>;
          })}
        </div>
        <img src={ImgStamp} />
      </StWrapper>

      <StyledBtn onClick={() => setIsModal(!isModal)}>
        <span>일상추억 공유</span>
      </StyledBtn>
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
  margin-bottom: 75px;
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

  margin-top: 95px;
  margin-bottom: 90px;
`;
const CommentContainer = styled.div`
  border-bottom: 5px solid #000000;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  padding: 22px 0 12px 0;
  width: 100%;
`;

const StWrapper = styled.div`
  position: relative;
  width: 1163.85px;
  min-height: 620px;
  & > * {
    position: absolute;
  }
  & > *:first-child {
    width: 1163.85px;
    height: 620px;
    object-fit: cover;
    z-index: 600;
  }
  & > *:nth-child(2) {
    z-index: 700;
    width: 100%;
    padding: 57px 121px 95px 121px;
  }
  & > *:last-child {
    width: 253px;
    height: 253px;
    z-index: 800;
    right: 19.85px;
    bottom: 35px;
  }
`;

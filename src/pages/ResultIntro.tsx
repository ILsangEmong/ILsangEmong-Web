// import react from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ResultIntroImg from '../assets/ImgResultInro.svg';

// import {
//   img1,
//   img2,
//   img3,
//   img4,
// } from "../../asset/icon";

export default function ResultIntro() {
  console.log('>>>>>');
  return (
    <StResultIntroPage>
      <StTitle>GROUP NAME: 몽몽이들</StTitle>

      <StContainer>
        <img src={ResultIntroImg} alt={'결과인트로'} />
      </StContainer>

      <Link to={'/group/result'}>
        <StBtn>일상추억 보기</StBtn>
      </Link>
    </StResultIntroPage>
  );
}

const StResultIntroPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 70px;
`;

const StContainer = styled.ul`
  & > img {
    width: 1770px;
    height: 718px;
  }

  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;

  margin-bottom: 2px;
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

  margin-bottom: 90px;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ImgExpire } from '../assets/background_expire.svg';

export default function Expire() {
  console.log('>>>>>expire page 입니다');

  return (
    <StExpirePage>
      <StTitle>GROUP NAME: 몽몽이들</StTitle>
      <FloatDiv>
        <div>
          “기억배달부 일상이몽이가 탄 기차가 엎어지면서,
          <br />
          우리들의 기억들이 뒤섞였어요....!”
        </div>
      </FloatDiv>
      <StContainer>
        <ImgExpire />
      </StContainer>

      <Link to={'/group/intro'}>
        <StBtn>작성완료</StBtn>
      </Link>
    </StExpirePage>
  );
}
const StExpirePage = styled.div`
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
  margin-bottom: 75px;
`;

const StContainer = styled.div`
  width: 1318px;
  height: 676.87px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 31.13px;
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

  // &:hover{
  //   background-color : skyblue;
  //   color : blue
  // }
`;
const FloatDiv = styled.div`
  width: 868px;
  height: 180px;
  position: absolute;
  top: 180px;
  padding: 38px 134px 38px 134px;
  background: #ffffff;

  border: 2px solid #000000;
  border-radius: 10px;

  & > div {
    width: 100%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 51px;
    /* or 160% */

    letter-spacing: -0.01em;

    color: #000000;
    width: 600px;
    height: 103px;
  }
`;

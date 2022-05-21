import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { api } from '../services/api';
import codeState from '../stores';
import styled from 'styled-components';

export default function GroupForm() {
  const setCode = useSetRecoilState(codeState);
  const code = useRecoilValue(codeState);
  const navigate = useNavigate();
  const createGroup = async () => {
    const code = await api.juyeongService.createGroup({
      name: '몽몽이들',
      startTime: new Date(2022, 6, 21, 18, 30),
      endTime: new Date(2022, 6, 22, 10, 30),
    });
    setCode(code);
  };
  useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <StWrapper>
      <div>GroupForm(시연용 뷰 아님)</div>
      <button onClick={createGroup}>그룹 생성하기</button>
      <button
        onClick={() =>
          code === '' ? alert('그룹 생성하기를 먼저 눌러주세요') : navigate('/group')
        }
      >
        시연하러 가기
      </button>
      <button>혁진아 여기 안쓰는 api 연결할게</button>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  button {
    width: 100px;
  }
`;

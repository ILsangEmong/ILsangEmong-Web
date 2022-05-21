import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { api } from '../services/api';
import codeState from '../stores';

export default function GroupForm() {
  const setCode = useSetRecoilState(codeState);
  const code = useRecoilValue(codeState);
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
    <>
      <div>GroupForm(시연용 뷰 아님)</div>
      <button onClick={createGroup}>생성하기</button>
    </>
  );
}

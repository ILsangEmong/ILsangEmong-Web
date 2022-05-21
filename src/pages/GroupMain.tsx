import { useNavigate } from 'react-router-dom';

export default function GroupMain() {
  const navigate = useNavigate();
  return (
    <div>
      <div>몽몽이들</div>
      <div onClick={() => navigate('/group/comment')}>기억 편지 쓰기</div>
    </div>
  );
}

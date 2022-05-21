import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommentForm from '../pages/CommentForm';
import Expire from '../pages/Expire';
import GroupMain from '../pages/GroupMain';
import Result from '../pages/Result';
import ResultIntro from '../pages/ResultIntro';
import GroupForm from '../pages/GroupForm';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<GroupForm />} />
        <Route path="/group" element={<GroupMain />} />
        <Route path="/group/comment" element={<CommentForm />} />
        <Route path="/group/expire" element={<Expire />} />
        <Route path="/group/intro" element={<ResultIntro />} />
        <Route path="/group/result" element={<Result />} />
        <Route path="*" element={<div>몽몽이들 미안! 404 에러야!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

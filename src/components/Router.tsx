import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<TeamForm />} />
        <Route path="/group/*" element={<GroupMain />}>
          <Route path="comment" element={<CommentForm />} />
          <Route path="expire" element={<Expire />} />
          <Route path="intro" element={<ResultIntro />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<div>몽몽이들 미안! 404 에러야!</div>} />
        </Route>
        <Route path="*" element={<div>몽몽이들 미안! 404 에러야!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

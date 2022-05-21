import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GroupForm from '../pages/GroupForm';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GroupForm />} />
        {/* <Route path="/main/*" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />} />
          <Route path="*" element={<div>소중이들 미안! 404 에러야!</div>} />
        </Route>
        <Route path="/*" element={<div>소중이들 미안! 404 에러야!</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

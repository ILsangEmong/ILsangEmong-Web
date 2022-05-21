import { useEffect } from 'react';
import Router from './components/Router';
import { api } from './services/api';
import GlobalStyle from './styles/global';
import { RecoilRoot } from 'recoil';

function App() {
  useEffect(() => {
    (async () => {
      const response = await api.juyeongService.getResult('');
      console.log(response);
    })();
  }, []);
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;

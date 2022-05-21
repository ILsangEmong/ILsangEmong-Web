import { useEffect } from 'react';
import Router from './components/Router';
import { api } from './services/api';
import GlobalStyle from './styles/global';

function App() {
  useEffect(() => {
    (async () => {
      const response = await api.juyeongService.getResult('');
      console.log(response);
    })();
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;

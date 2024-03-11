import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';

function App() {
  // useNavigate를 사용하여 페이지 이동
  const nav = useNavigate();
  const onClick = () => {
    nav('/new');
  };
  return (
    <>
      <div>
        {/* Link 태그를 사용하여 페이지 이동 */}
        <Link to={'/'}>home</Link>
        <Link to={'/new'}>new</Link>
        <Link to={'/diary'}>diary</Link>
        <Link to={'/edit'}>edit</Link>
      </div>
      <button onClick={onClick}>newPage로 이동</button>
      <Routes>
        {/* Route를 통한 경로 설정 */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

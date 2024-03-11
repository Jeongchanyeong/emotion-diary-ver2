import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import emotion1 from './assets/emotion1.png';
import emotion2 from './assets/emotion2.png';
import emotion3 from './assets/emotion3.png';
import emotion4 from './assets/emotion4.png';
import emotion5 from './assets/emotion5.png';

function App() {
  // 동적 경로: 동적인 데이터를 포함하고 있는 경로
  // ex) ~/product/1  ~/product/2  ~/product/3

  // URL Parameter: 아이템의 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용
  // Query String: 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용

  // useNavigate를 사용하여 페이지 이동
  const nav = useNavigate();
  const onClick = () => {
    nav('/new');
  };
  return (
    <>
      <div>
        <img src={emotion1} />
        <img src={emotion2} />
        <img src={emotion3} />
        <img src={emotion4} />
        <img src={emotion5} />
      </div>
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
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

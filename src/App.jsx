import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import { getEmotionImage } from './util/get-emotion-img';
import Button from './components/common/Button';
import Header from './components/common/Header';

function App() {
  // 동적 경로: 동적인 데이터를 포함하고 있는 경로
  // ex) ~/product/1  ~/product/2  ~/product/3

  // URL Parameter: 아이템의 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용
  // Query String: 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용

  // useNavigate를 사용하여 페이지 이동
  const nav = useNavigate();

  return (
    <>
      <Header
        title={'Header'}
        leftChild={<Button text={'<'} />}
        rightChild={<Button text={'>'} />}
      />

      <Button
        type={'DEFAULT'}
        text={123}
        onClick={() => console.log('123123')}
      />
      <Button
        type={'POSITIVE'}
        text={123}
        onClick={() => console.log('123123')}
      />
      <Button
        type={'NEGATIVE'}
        text={123}
        onClick={() => console.log('123123')}
      />

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

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';

import Button from './components/common/Button';
import Header from './components/common/Header';
import { useReducer } from 'react';

const mokData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  },
];

const reducer = (state, action) => {
  return state;
};

// 하나의 일기 내부에는 날짜, 감정, 일기 내용이 필요함

function App() {
  const [data, dispatch] = useReducer(reducer, mokData);
  console.log(dispatch);
  console.log(data);
  console.log(mokData);
  console.log(data === mokData);
  console.log(reducer);
  return (
    <>
      <Routes>
        {/* Route를 통한 경로 설정 */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import React from 'react';
import { useParams } from 'react-router-dom';

const Diary = () => {
  const params = useParams();
  return <div>{params.id}번 일기의 상세페이지입니다.</div>;
};

export default Diary;

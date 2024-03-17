import React from 'react';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);

    navigate('/', { replace: true });
    // replace: 뒤로가기를 눌렀을 때 다시 New 페이지로 가지 않게끔 함
  };

  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={<Button onClick={() => navigate(-1)} text={'< 뒤로 가기'} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;

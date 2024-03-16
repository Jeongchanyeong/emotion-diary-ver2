import React from 'react';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import Editor from '../components/Editor';

const New = () => {
  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={<Button text={'< 뒤로 가기'} />}
      />
      <Editor />
    </div>
  );
};

export default New;

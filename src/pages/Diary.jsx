import React from 'react';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import Viewer from '../components/Viewer';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import { getStringedDate } from '../util/get-stringed-date';
import usePageTitle from '../hooks/\busePageTitle';

const Diary = () => {
  // params에 저장된 데이터를 불러오면 됨
  const params = useParams();
  const curDirayItem = useDiary(params.id);
  const navigate = useNavigate();

  usePageTitle(`${params.id}번 일기`);

  if (!curDirayItem) {
    return <div>데이터 로딩중..</div>;
  }
  const { createdDate, emotionId, content } = curDirayItem;
  const title = getStringedDate(new Date(createdDate));
  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={'< 뒤로 가기'} onClick={() => navigate(-1)} />}
        rightChild={
          <Button
            text={'수정 하기'}
            onClick={() => navigate(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;

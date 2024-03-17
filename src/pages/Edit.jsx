import { useParams } from 'react-router-dom';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import { useContext } from 'react';
import useDiary from '../hooks/useDiary';

const Edit = () => {
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const params = useParams();
  const curDirayItem = useDiary(params.id);
  const onClickDelete = () => {
    if (
      window.confirm(
        '일기를 정말 삭제하시겠습니까? (일기는 다시 복구되지 않습니다.)'
      )
    ) {
      // 일기 삭제 로직
      onDelete(params.id);
      navigate('/', { replace: true });
    }
    {
      // 일기 삭제되지 않았음
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('일기를 수정하시겠습니까?')) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      navigate('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        leftChild={<Button text={'뒤로 가기'} onClick={() => navigate(-1)} />}
        rightChild={
          <Button text={'삭제하기'} type={'NEGATIVE'} onClick={onClickDelete} />
        }
        title={'일기 수정하기'}
      />
      <Editor initData={curDirayItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;

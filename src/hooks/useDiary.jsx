import { useEffect, useState, useContext } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
  const navigate = useNavigate();
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const currentDirayItem = data.find(
      (item) => String(item.id) === String(id)
    );
    if (!currentDirayItem) {
      window.alert('존재하지 않는 일기입니다.');
      navigate('/', { replace: true });
    }

    setCurrentDiaryItem(currentDirayItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;

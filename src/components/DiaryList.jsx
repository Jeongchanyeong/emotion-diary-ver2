import React from 'react';
import Button from './common/Button';
import './DiaryList.css';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({ monthlyData }) => {
  const [sortType, setSortType] = useState('latest');
  const navigate = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // sortType이 바뀔 때마다 monthlyData가 바뀌는 것을 어떻게 구현?
  const getSortedDate = () => {
    return monthlyData.toSorted((a, b) => {
      if (sortType === 'latest') {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  // 함수를 한 번 호출하고 상수로 저장
  const sortedData = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={'latest'}>오래된 순</option>
          <option value={'oldest'}>최신 순</option>
        </select>
        <Button
          text={'새 일기 쓰기'}
          type={'POSITIVE'}
          onClick={() => {
            navigate('/new');
          }}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;

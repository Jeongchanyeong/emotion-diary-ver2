import React from 'react';
import Button from './common/Button';
import './DiaryList.css';
import DiaryItem from './DiaryItem';
const DiaryList = ({ monthlyData }) => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={'latest'}>오래된 순</option>
          <option value={'oldest'}>최신 순</option>
        </select>
        <Button text={'새 일기 쓰기'} type={'POSITIVE'} />
      </div>
      <div className="list_wrapper">
        {monthlyData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;

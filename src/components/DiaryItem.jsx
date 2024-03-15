import React from 'react';
import { getEmotionImage } from '../util/get-emotion-img';
import Button from './common/Button';
import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ content, createdDate, emotionId, id }) => {
  const navigate = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={() => {
          navigate(`/diary/${id}`);
        }}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div
        className="info_section"
        onClick={() => {
          navigate(`/diary/${id}`);
        }}
      >
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div
        className="button_section"
        onClick={() => {
          navigate(`/edit/${id}`);
        }}
      >
        <Button text={'수정하기'} />
      </div>
    </div>
  );
};

export default DiaryItem;

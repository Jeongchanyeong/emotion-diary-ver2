import React from 'react';
import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './common/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/contants';
import { getStringedDate } from '../util/get-stringed-date';
// input에 value값으로 넣을 시 날짜를 인식하지 못함 (문자열로 변환해줘야함)

// New와 Edit에서 다루는 컴포넌틍 구조가 동일하지만 버튼을 눌렀을 때 처리하는 로직이 다르므로, 페이지에서 Editor로 onSubmit prop을 넘겨주어 페이지별 기능을 분리한다.
const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // 문자열이 아닌 Date 객체로 변경해줘야한다.
    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({ ...input, [name]: value });
  };

  // 부모 컴포넌트 (new, edit)에서 input을 매개변수로 받아가서 알아서 처리하게끔.
  // new에서 onCreate, edit에서 onEdit을 받아와서 처리하면 되겠다.
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: 'emotionId',
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>

      <section className="button_section">
        <Button
          onClick={() => {
            navigate(-1);
          }}
          text={'취소하기'}
        />
        <Button
          onClick={onClickSubmitButton}
          text={'작성 완료'}
          type={'POSITIVE'}
        />
      </section>
    </div>
  );
};

export default Editor;

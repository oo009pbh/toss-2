import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component';
import { useNavigate } from 'react-router-dom';

// Styles
import { Container } from '@pages/Main/styles';

// Components
import Button from '@atom/Button';
import { handlerModal, OneButtonModal } from '@organism/Modal';

// hooks
import { useGet, usePost } from '@hooks/useFetch';

// typings
import { PostDataType, GetDataType } from '@typings/main';
const Main = () => {
  const oneButtonModalHandler = handlerModal();
  const getData = useGet('https://jsonplaceholder.typicode.com/todos');
  const getPost = usePost('https://jsonplaceholder.typicode.com/posts');
  const [getTestArray, setGetTestArray] = useState<GetDataType[]>([]);
  const [postTestObject, setPostTestObject] = useState<PostDataType>({ id: 1, title: 'foo', body: 'bar', userId: 1 });

  return (
    <Container>
      <Button onClick={oneButtonModalHandler.onToggleModal}>버튼</Button>
      <Button
        onClick={async () => {
          await getData()
            .then((data) => setGetTestArray(data))
            .catch((err) => console.log(err));
        }}
      >
        데이터 불러오기(Get)
      </Button>

      <Button
        onClick={async () => {
          await getPost({ title: 'foo', body: 'bar', userId: 1 })
            .then((data) => setPostTestObject(data))
            .catch((err) => console.log(err));
        }}
      >
        데이터 불러오기(Post)
      </Button>
      {getTestArray.map((item, index) => (
        <div>{item.title}</div>
      ))}

      <div>{postTestObject.title}</div>

      <OneButtonModal handler={oneButtonModalHandler} buttonClick={oneButtonModalHandler.onToggleModal}>
        <>안녕하세요?</>
      </OneButtonModal>
    </Container>
  );
};

export default Main;

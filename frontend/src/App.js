import React from 'react';
import './App.css';
import {Stack} from 'react-bootstrap';
import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';

function App() {
  return (
    <Stack direction='vertical' gap={2} className="col-md-7 mx-auto">
      <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }} duration={5}>
        <h1>Тут наш невероятный проект</h1>
      </Animate>
      <Animate play start={{ opacity: 0, transform: 'translate(0, 0)' }} end={{ opacity: 1, transform: 'translate(10px, 10px)' }} duration={10}>
        <p>Чтоб многа, красива, на 12 гигов озу хрома</p>
      </Animate>
    </Stack>
  );
}

export default App;

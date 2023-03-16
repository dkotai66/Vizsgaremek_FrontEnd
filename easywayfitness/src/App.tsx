import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Caloria from './components/Caloria';
import Main from './components/Main';
import SignUpSignIn from './components/SignUpSignIn';

export default class App extends React.Component {
  render() {
    return <div>
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/SignUpSignIn' element={<SignUpSignIn />} />
          <Route path='/Calculator' element={<Calculator />} />
          <Route path='/FoodCaloria' element={<Caloria />} />
        </Routes>
      </main>
    </div>
  }
}

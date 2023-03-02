import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Main from './components/Main';
import SignUpSignIn from './components/SignUpSignIn';

export default class App extends React.Component {
  render() {
    return <div>
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </main>
    </div>
  }
}

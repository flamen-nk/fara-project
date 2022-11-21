import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import { NewsContextProvider } from './NewsContext';
import News from './components/News';
import './css/App.css';

function App() {
  function Home() {
    return (
      <>
        <main>
          <NewsContextProvider
            apiLink={
              'https://newsapi.org/v2/everything?q=tesla&from=2022-10-17&sortBy=publishedAt'
            }
          >
            <News />
          </NewsContextProvider>
        </main>
      </>
    );
  }

  function About() {
    return (
      <>
        <main>
          <NewsContextProvider
            apiLink={
              'https://newsapi.org/v2/top-headlines?country=us&category=business'
            }
          >
            <News />
          </NewsContextProvider>
        </main>
      </>
    );
  }
  function About1() {
    return (
      <>
        <main>
          <NewsContextProvider
            apiLink={'https://newsapi.org/v2/everything?domains=wsj.com'}
          >
            <News />
          </NewsContextProvider>
        </main>
      </>
    );
  }
  function About2() {
    return (
      <>
        <main>
          <NewsContextProvider
            apiLink={'https://newsapi.org/v2/top-headlines?sources=techcrunch'}
          >
            <News />
          </NewsContextProvider>
        </main>
      </>
    );
  }
  function About3() {
    return (
      <>
        <main>
          <NewsContextProvider
            apiLink={
              'https://newsapi.org/v2/everything?q=apple&from=2022-11-06&to=2022-11-06&sortBy=popularity'
            }
          >
            <News />
          </NewsContextProvider>
        </main>
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about1" element={<About1 />}></Route>
        <Route path="about2" element={<About2 />}></Route>
        <Route path="about3" element={<About3 />}></Route>
      </Routes>
    </>
  );
}

export default App;

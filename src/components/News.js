import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import { Routes, Route, NavLink } from 'react-router-dom';
import NewsArticle from './NewsArticle';
import loaderGif from '../loading.gif';
import Swal from 'sweetalert2';

function modalWindow() {
  Swal.fire({
    title: 'Submit your username',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
    },
    showCancelButton: true,
    confirmButtonText: 'Ok!',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s check passed!`,
        imageUrl: result.value.avatar_url,
      });
    }
  });
}

function News(props) {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <div className="head__app">
        <h1 className="head__text">NEWS APP</h1>
        <button className="modal__auth" onClick={modalWindow}>
          Authorization
        </button>
        <ul className="list__head">
          <li>
            <NavLink className="bebra" to="/">
              Page one
            </NavLink>
          </li>
          <li>
            <NavLink className="bebra" to="/about">
              Page two
            </NavLink>
          </li>
          <li>
            <NavLink className="bebra" to="/about1">
              Page three
            </NavLink>
          </li>
          <li>
            <NavLink className="bebra" to="/about2">
              Page four
            </NavLink>
          </li>
          <li>
            <NavLink className="bebra" to="/about3">
              Page five
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="all__news">
        {data ? (
          data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        ) : (
          <div className="loader__box">
            <img className="loader__gif" src={loaderGif} />
          </div>
        )}
      </div>
    </div>
  );
}

export default News;

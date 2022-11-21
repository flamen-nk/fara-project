import React from 'react';

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <img className="news_pict" src={data.urlToImage}></img>
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">
        <a>{data.source.name}</a>
      </span>
    </div>
  );
}

export default NewsArticle;

import React from 'react';
import data from '../data';

function User(props) {
  return (
    <section className="Content-background">
      <h1 id="user">{data[props.id].name.first} {data[props.id].name.last}</h1>

      <div className="User-info" id="main-info">
        <div className="User-detail">From:<span className="User-detail-answer"> {data[props.id].city}</span></div>
        <div className="User-detail">Job Title:<span className="User-detail-answer"> {data[props.id].title}</span></div>
        <div className="User-detail">Employer:<span className="User-detail-answer"> {data[props.id].employer}</span></div>
      </div>

      <div className="User-info" id="movie-info">
        <div className="User-detail">Favorite Movies:</div>
        <ol className="User-movies">
          <li>{data[props.id].favoriteMovies[0]}</li>
          <li>{data[props.id].favoriteMovies[1]}</li>
          <li>{data[props.id].favoriteMovies[2]}</li>
        </ol>
      </div> 
    </section>
  )
}

export default User;
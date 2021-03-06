import React from 'react';
import data from '../data';

function User(props) {
  return (
    <section className="Content-background">
      <div className="User-id">
        <h1 id="user">{data[props.id].name.first} {data[props.id].name.last}</h1>
        <h2 id='id-counter'>{[props.id + 1] + " / " + data.length}</h2>
      </div>

      <div className="User-info" id="main-info">
        <div className="User-detail">From:<span className="User-detail-answer"> {data[props.id].city}</span></div>
        <div className="User-detail">Job Title:<span className="User-detail-answer"> {data[props.id].title}</span></div>
        <div className="User-detail">Employer:<span className="User-detail-answer"> {data[props.id].employer}</span></div>
      </div>

      <div className="User-info" id="movie-info">
        <div className="User-detail">Favorite Movies:</div>
        <ol className="User-movies">
          {data[props.id].favoriteMovies.map(
            (movie,index) => <li key={index}>{movie}</li>
          )}
        </ol>
      </div> 
    </section>
  )
}

export default User;
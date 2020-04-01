import React from "react";import moment from 'moment';import {Badge} from "react-bootstrap";import Image from "./Image";let currentTime = moment(new Date()).format("HH:mm");class FilmCard extends React.Component {    state = {        search: "",        genre: null    };    render() {        const {            poster,            title,            sessions = [{id: 1, time: currentTime, hallId: 1}, {id: 2, time: currentTime, hallId: 1}, {id: 3, time: currentTime, hallId: 2}],            genres,            onFilmClick = () => {},            onGenreClick = (genre) => {}        } = this.props;        return (           <div className="col-6 col-sm-6 col-md-4 col-xl-3 mb-3">               <div className="card card-film">                   <div className="card-film-img">                        <Image src={poster}/>                   </div>                   <div className="card-overlay">                       <div>                           <h5 onClick={onFilmClick} className="card-title">"{title}"</h5>                       </div>                       <div className="card-description">                           {                                genres.map((name, i) => {                                    return (                                        <Badge key={i}                                               variant="info"                                               onClick={()=>onGenreClick(name.trim())}                                               className="genre-badge">                                            {name}                                        </Badge>                                    )                                })                           }                       </div>                       <div className="card-description">                           <h6 className="card-title">Сеансы:</h6>                           {                               sessions.map((session) => {                                   let {id, time} = session;                                   return (                                       <Badge key={id}                                              variant="primary"                                              className="session-badge">                                           {time}                                       </Badge>                                   )                               })                           }                       </div>                   </div>               </div>           </div>        );    }}export default FilmCard;
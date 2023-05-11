import React from 'react'
import { img_300,unavailable} from '../../config/config'
import "./SingleContent.css"
import Popup from 'reactjs-popup';
import Modals from '../Modals';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react'
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  first_air_date
}) => {//destructuring and receiving all the props
  const [rate, setrate] = useState("")
  const getClass = (rating) =>{
    if(rating > 7.5){
      setrate("good");
    }else{
      setrate("bad")
    }
    
  }
  const changeState = () => {

  }
  return (
    <div className='media' id = "#appElement" onClick={changeState}>
      {/* <Modals></Modals> */}
        <img className = "poster" src = {poster? `${img_300}/${poster}` : unavailable} alt = {title}/>
        <b className = "title">{title}</b>
        <span className='subTitle'>
            {
                media_type==='tv'?"TV Series":"Movie"
            }
            
            <span className = "subTitle">{date}</span>
            
            {/* <span className='subtitle'>{vote_average}</span> */}
            
        </span>
        <br/>
        <h6 className = {vote_average>7.5? "good" : "bad"}>{vote_average}</h6>
    </div>
  )
}

export default SingleContent
import React from 'react'


function Card({title,setTweet,tweet,index}){

  const del = ()=>{
    setTweet(tweet.filter((t)=>t!==title))
    
  }


  return (
    <>
    <div className="cards">
      <div className="card">
       <h1 className="heading">{title}</h1>
       <span><button onClick={del}>X</button></span>
       
      </div>
    </div>  
    </>
  )
}

export default Card
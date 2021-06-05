import React from 'react'

const InputHandler = ({textInput,setTextInput,tweet,setTweet})=>{
 const clear = (e)=>{
  e.preventDefault()
  if(e.target.value ==="undefined"){
      console.log(e.target.value)
    }else{
  setTweet([...tweet,textInput])
  setTextInput("")
    }
 }
  const update=(e)=>{
       setTextInput(e.target.value) 
  }

  return(
    <div className="form">
        <form onSubmit={clear}>
      <input type="text" placeholder="enter Todays event" name="name" value={textInput} onChange={update}></input>
    <button type='submit'>Enter</button>
    </form>
    </div>
    
  )
}

export default InputHandler
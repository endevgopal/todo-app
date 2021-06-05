import React,{useState} from 'react'
import Card from './components/Cards'
import InputHandler from './components/Input'

function App(){
  
const [textInput,setTextInput] = useState("")
const [tweet,setTweet] = useState([])

  return (
  <>
   <InputHandler
    textInput={textInput}
    setTextInput={setTextInput}
    tweet={tweet}
    setTweet={setTweet}
    />
    {tweet.map((twee,index)=>{
     return <Card title={twee} key={index} index={index}setTweet={setTweet} tweet={tweet} />
    })}
  </>
  )
}

export default App
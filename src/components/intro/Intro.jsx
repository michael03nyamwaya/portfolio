
import './intro.scss'
import { init } from 'ityped'
import { useEffect,useRef } from 'react'

export default function Intro() {

const textRef=useRef(); 

 useEffect(()=> {
  init(textRef.current,{
    backDelay:  1500,
    backSpeed:  50,
    showCursor: true,
    strings:['Developer','Designer','And This Is My Portfolio'],
  })
  },[]); 
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src='assets/mike.jpeg' alt=''/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mike Sagwe</h1>
          <h3>Freelancer <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.jpg' color='red' alt=''/>
        </a>
      </div>

    </div>
  )
}
 
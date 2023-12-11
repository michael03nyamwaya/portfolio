import './works.scss'
import { useState } from 'react'

export default function Works() {
  const [currentSlide,setCurrentSlide]=useState(0)
  const data=[
    {
      id:'1',
      icon:'./assets/mobile.jpg',
      title:'web design',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptas libero voluptatum natus. Magni dolores, saepe esse maiores voluptates aut.',
      img:'./assets/pp2.jpg'
    },
    {
      id:'2',
      icon:'./assets/globe.jpg',
      title:'mobile application',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptas libero voluptatum natus. Magni dolores, saepe esse maiores voluptates aut.',
      img:'./assets/pp3.jpg'
    },
    {
      id:'3',
      icon:'../assets/globe.jpg',
      title:'branding',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptas libero voluptatum natus. Magni dolores, saepe esse maiores voluptates aut.',
      img:'../assets/p2.jpg'
    }

  ]
  const handleClick = (way)=>{
    way ==='left' ? setCurrentSlide(currentSlide >0 ? currentSlide -1 :2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide +1 : 0)
  }
  return (
    <div className='works' id='works'>
       <div className="slider" style={{transform :`translateX(-${currentSlide * 100}vw)`}}>
       { data.map(d=>(<div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                   <img src={d.icon} alt=''/>
                </div>
                
              <h2>{d.title}</h2>
              <p>
                {d.desc}
                </p>
                  <span>Projects</span>
             </div>
            </div>
            <div className="right">
              <img src={d.img} alt=''/>
            </div>
          </div>
        </div>))}
      </div> 
       <img src='./assets/arrow.jpg' className='arrow left' alt='' onClick={()=>handleClick('left')}/>
       <img src='./assets/arrow.jpg' className='arrow right' alt=''  onClick={()=>handleClick('right')}/>
    </div>
  )
}

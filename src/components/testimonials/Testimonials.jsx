import './testimonials.scss'

export default function Testimonials() {
  const data=[
    {
      id:1,
      name:'Maartan',
      title:'CO-Founder ALM',
      icon:'assets/linked.jpg',
      desc:'Sit amet consectetur adipisicing elit. Asperiores voluptas libero voluptatum natus. Magni dolores, saepe esse maiores voluptates aut.',
      img:'assets/s2.jpg'
    },
    {
      id:2,
      name:'Ciza',
      title:'CEO of Nexan',
      icon:'assets/youtube.jpg',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptas libero voluptatum natus. Magni dolores, saepe esse maiores voluptates aut.',
      img:'./assets/s1.jpg',
      featured:true,
    },
    {
      id:3,
      name:'James',
      title:'CEO Wordex',
      icon:'assets/yy.jpg',
      desc: 'Ipsum dolor, sit amet consectetur adipisicing elit. A voluptatem quas, repudiandae modi corrupti porro?',
      img:'./assets/s4.jpg'
    },


  ]
  return (
    <div className='testimonials' id='testimonials'>
        <h1>Testimonials</h1>
        <div className="container">
          {data.map((d)=>(
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className="top">
              <img src='assets/s3.jpg'  className='left' alt=''/>
              <img src={d.img} className='user' alt=''/>
              <img src={d.icon} className='right' alt=''/>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

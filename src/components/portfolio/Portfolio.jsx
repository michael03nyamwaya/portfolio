import { useEffect, useState } from 'react';
import './portfolio.scss'
import PortofolioList from '../portofolioList/PortfolioList'
import {
  featuredPortolio,
  WebPortolio,
  mobilePortolio,
  designPortolio,
  brandingPortolio
} from '../../data';

export default function Portfolio() {
  const [selected,setSelected]=useState("featured");
  const [data,setData]=useState([]);

  const list=[
    {
      id:'featured',
      title:'Featured',
    },
    {
      id:'web',
      title:'Web',
    },
    {
      id:'mobile',
      title:'Mobile App',
    },
    {
      id:'design',
      title:'Design',
    },
    {
      id:'branding',
      title:'Branding',
    },
  ]
 useEffect(()=>{
   switch(selected){
    case 'featured':
      setData(featuredPortolio)
      break;
    case 'web':
      setData(WebPortolio)
      break;
    case 'mobile':
      setData(mobilePortolio)
      break;
    case 'design':
      setData(designPortolio)
      break;
    case 'branding':
      setData(brandingPortolio)
      break;
   
    
      default:
        setData(featuredPortolio)

   }
 },[selected])
  return (
    <div className='portfolio' id='portfolio'>
       <h1>portfolio</h1>
       <ul>
         {list.map((item)=>(
          <PortofolioList 
          id={item.id}
          title={item.title} 
          active={selected===item.id} 
          setSelected={setSelected}
         
          />
         ))}
       </ul>
       <div className="container">
        {data.map(d=>(
        <div className="item">
            <img src={d.img} alt='' width={100} height={100}  />
             <h3>{d.title}</h3>
         </div>
        ))}
       </div>
       
    </div>
  )
}

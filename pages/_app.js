
import "../styles/App.scss";
import Header from "../components/Header";
import {Navigation} from '../components/Navigation';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

function debounce(fn, ms){
  let timer;
  return ()=>{
    clearTimeout(timer)
    timer=setTimeout(()=>{
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}


export default function MyApp({ Component, pageProps }) {

  const [dimensions, setDimensions] = useState({
    height : undefined,
    width : undefined
  });


  useEffect(()=>{
    

  if (typeof window !== 'undefined') {
      window.addEventListener( 'load', ()=>{setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
    })})
  }

    //flashing prevention
    gsap.to('body', 0,  {
      css:{
        visibility: 'visible'
      }
    })

    //viewport height calc
    let vh = dimensions.height * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    


    const debouncedHandleResize = debounce(function handleResize(){
      setDimensions({
        height : window.innerHeight,
        width : window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return ()=>{
      window.removeEventListener('resize', debouncedHandleResize)
    }
    
  })

  return (
    <div>
      <Header dimensions = {dimensions} />
      <div className= 'App'>
        <Component {...pageProps} />
      </div>
      <Navigation/>
    </div>
  )
}


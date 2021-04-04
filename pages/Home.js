import Banner from "../components/Banner";
import Cases from '../components/Cases';
import IntroOverlay from "../components/introOverlay";
import { useEffect, useState } from 'react';
import gsap from 'gsap';

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) =>{
    //timeline
    
    tl.from('.line span', 1.8, {
      ease: "power4.out",
      y: 100,
      delay: 0.5, 
      skewY:10,
      stagger:{
        amount: 0.3
      }
    })
    .to('.overlay-top', 1.6 ,{
      height:0, 
      ease: 'expo.inOut',
      stagger:0.4
    })
    .to('.overlay-bottom', 1.6, {
      width:0,
      ease: 'expo.inOut',
      delay: -.8,
      stagger: {
        amount : 0.4
      }
    })
    .to('.intro-overlay', 0, {
      css:{
        display: 'none'
      }
    })
    .from('case-image img', 1.6, {
      scale: 1.4, 
      ease: 'expo.inOut',
      stagger:{
        amount: 0.4
      },
      onComplete: completeAnimation
    })
};


const Home = () => {

    const [animationComplete, setAnimationComplete] = useState(false);  

    const completeAnimation = () =>{
        setAnimationComplete(true);
    }

    useEffect(()=>{
        //on load animation 
        homeAnimation(completeAnimation);
      }, []);

    return (
        <>
            {animationComplete === false ? <IntroOverlay/> : ''}
            <Banner/>
            <Cases/>
        </>
    );
}

export default Home;

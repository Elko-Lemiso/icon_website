import Link from 'next/link'
import {useState, useEffect} from 'react';
import gsap from 'gsap'

let tl = gsap.timeline()

const Header = ({dimensions}) => {

    const [menuState, setMenuState] = useState({menuOpened : false});

    useEffect(() => {
        if (menuState.menuOpened == true) {
            //Run opened menu animation
            tl.to("nav", 0, {
                css: { display: "block" }
              })
                .to("body", 0, { css: { overflow: "hidden" } })
                .to(".App", 1, {
                  y: dimensions.width <= 654 ? "70vh" : window.innerHeight / 1.5,
                  ease: "expo.inOut"
                })
                .to(".hamburger-menu span", 0.6, {
                  delay: -1,
                  scaleX: 0,
                  transformOrigin: "50% 0%",
                  ease: "expo.inOut"
                })
                .to("#Path_1", 0.4, {
                  delay: -0.6,
                  css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 5
                  }
                })
                .to("#Path_2", 0.4, {
                  delay: -0.6,
                  css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 20
                  }
                })
                .to("#Line_1", 0.4, {
                  delay: -0.6,
                  css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 18
                  }
                })
                .to("#circle", 0.6, {
                  delay: -0.8,
                  css: {
                    strokeDashoffset: 0
                  },
                  ease: "expo.inOut"
                })
                .to(".hamburger-menu-close", 0.6, {
                  delay: -0.8,
                  css: { display: "block" }
                });

        }else{
            //run close menu animation
            tl.to(".App", 1, {
                y: 0,
                ease: "expo.inOut"
              })
                .to("#circle", 0.6, {
                  delay: -0.6,
                  css: {
                    strokeDashoffset: -193,
                    strokeDasharray: 227
                  }
                })
                .to("#Path_1", 0.4, {
                  delay: -0.6,
                  css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                  }
                })
                .to("#Path_2", 0.4, {
                  delay: -0.6,
                  css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                  }
                })
                .to("#Line_1", 0.4, {
                  delay: -0.6,
                  css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 40
                  }
                })
                .to(".hamburger-menu span", 0.6, {
                  delay: -0.6,
                  scaleX: 1,
                  transformOrigin: "50% 0%",
                  ease: "expo.inOut"
                })
                .to(".hamburger-menu-close", 0, {
                  delay: -0.1,
                  css: { display: "none" }
                })
                .to("body", 0, { css: { overflow: "auto" } })
                .to("nav", 0, {
                  css: { display: "none" }
                });
        }
    });

    return (
        <div className ="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <Link href="/">i.CoN</Link>
                    </div>
                    <div className="nav-toggle">
                        <div onClick = {()=> setMenuState({menuOpened:true})}className="hamburger-menu">
                            <span></span>
                            <span></span>
                        </div>
                        <div onClick = {()=> setMenuState({menuOpened:false})} className="hamburger-menu-close">
                            <svg  width="64" height="64" viewBox="0 0 64 64">
                            <g id="Group_1" data-name="Group 1" transform="translate(-152 -439)">
                                <line id="Line_1" data-name="Line 1" y1="14.91" transform="translate(184 463.788)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
                                <path id="Path_1" data-name="Path 1" d="M6,9.155,10.949,5" transform="translate(173.051 458.302)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
                                <path id="Path_2" data-name="Path 2" d="M10.949,5,15.9,9.155" transform="translate(173.051 458.302)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/>
                                <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(152 439)" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2.5">
                                <circle cx="32" cy="32" r="32" stroke="none"/>
                                <circle id="circle" cx="32" cy="32" r="30.75" fill="none"/>
                                </g>
                            </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;

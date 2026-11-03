import { useState } from "react";
import './Navbar.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import {useGSAP} from '@gsap/react';
import { useRef } from "react";

const links = [
    {label:'Features', href:'#features'},
    {label:'How it works', href:'#how'},
    {label:'Pricing', href:'#pricing'},
    {label:'FAQ', href:'#faq'},
]

export default function Navbar() {
    const[open, setOpen] = useState(false)
    const navRef = useRef(null)
    const openRef = useRef(open)

    useGSAP(
        () => {
            const hide = gsap.to(navRef.current, {
                yPercent:-100,
                duration:0.35,
                ease:'power2.out',
                paused:true,
            })

            ScrollTrigger.create({
                start:0,
                end:'max',
                onUpdate: (self) => {
                    const y = self.scroll()

                    navRef.current.classList.toggle('is-scrolled', y>10)
                    if(openRef.current) return
                    if(self.direction===1&&y>200){
                        hide.play()
                    } else if (self.direction===-1){
                        hide.reverse()
                    }
                },
            })
        },
        {scope:navRef}
    )

    return (
        <header className="nav" ref={navRef}>
            <div className="nav__inner container">
                <a href="#" className="nav__logo" aria-label="Relay home">
                    <span className="nav__mark" aria-hidden="true"/>
                    Relay
                </a>

                <nav 
                id="nav-menu"
                className={`nav__menu ${open ? 'is-open' : ''}`}
                aria-label="Main"
                >
                    <ul className="nav__links">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={() => setOpen(false)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav__actions">
                        <a href="#" className="nav__login">Log in</a>
                        <a href="#" className="btn btn--primary">Start free</a>
                    </div>
                </nav>

                <button 
                className="nav__toggle"
                aria-expanded={open}
                aria-controls="nav-menu"
                aria-label={open? 'Close menu' : 'Open menu'}
                onClick={() => setOpen(!open)}
                >
                    <span/>
                    <span/>
                </button>
            </div>
        </header>
    )
}
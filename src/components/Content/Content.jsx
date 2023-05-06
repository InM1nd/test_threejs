import {  } from "./Content.styled"


import MenuButton from "./MenuButton/MenuButton.jsx"
import Hero from "./Hero/Hero.jsx"
import Contact from "./Contacts/Contacts.jsx"
import Projects from "./Portfolio/Portfolio.jsx"

const Content = () => {
    return (
        <>
        <MenuButton/>
        <Hero/>
        <Projects/>
        {/* <About/> */}
        <Contact/>
        </>
    )
}

export default Content 
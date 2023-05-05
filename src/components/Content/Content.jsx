import {  } from "./Content.styled"


import MenuButton from "./MenuButton/MenuButton"
import Hero from "./Hero/Hero"
import Contact from "./Contacts/Contacts"
import Projects from "../Content/Projects/Projects"
import About from "./About/About"

const Content = () => {
    return (
        <>
        <MenuButton/>
        <Hero/>
        <Projects/>
        <About/>
        <Contact/>
        </>
    )
}

export default Content 
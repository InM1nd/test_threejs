import Header from "./Header/Header"
import Content from "./Content/Content"
import Footer from "./Footer/Footer"

import {Container} from './SharedLayout.styled'


function App() {
  return (
    <Container>
      <Header/>
      <Content/>
      <Footer/>
    </Container>
  )
}

export default App
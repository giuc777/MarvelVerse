import Header from "./componets/Header"
import Heros from "./componets/informationHeros/Heros"
import Nav from "./componets/Nav"
import Trivia from "./componets/Trivia/Trivia"
import Search from "./componets/SerachHero/Search"
import Memory from "./componets/Memory/Memory"

import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
const App = ()=>{
    return (
        <BrowserRouter>
        <>
          <Header />
          <Nav />
          <Routes>
            <Route path="/MarvelVerse" element={<Heros />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/Search" element={<Search />}/>
            <Route path="/Memory" element={<Memory />} />
          </Routes>
        </>
      </BrowserRouter>
    )
}

export default App
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import TodoApp from "./components/TodoApp"


function App() {

  return (
    <div className="w-screen h-screen flex flex-col">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App

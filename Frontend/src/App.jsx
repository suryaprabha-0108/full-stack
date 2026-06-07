import Navbar from './components/Navbar'
import Parent from './components/Parent'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Counter from './components/Counter'
import {Routes,Route} from 'react-router-dom'
import Effect from './components/Effect'


const App = ()=>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Parent'  element={<Parent/>}/>
      <Route path='/useState' element={<Counter/>}/>
      <Route path='/useEffect'element={<Effect/>}/>
      
      
      
    </Routes>

    
    </>
  )
}

export default App
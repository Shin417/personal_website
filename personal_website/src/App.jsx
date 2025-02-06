import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Mast from './components/Mast';
import AboutMe from './components/AboutMe';
import Project from './components/Project'
import Contact from './components/Contact';
import './index.css'

function App() {
  return (
    <>
      <Header/>
      <Mast message="Here are my projects and profile. I put all my effort on every work!"/>
      <AboutMe/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App

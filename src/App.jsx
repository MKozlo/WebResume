import './App.css'
import Nav from './sections/Nav/Nav'
import Profile from './sections/Profile/Profile'
import Strengths from './sections/Profile/Strengths'
import Motivation from './sections/Profile/Motivation'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Nav/>
      <Profile/>
      <Strengths/>
      <Motivation />
    </>
  )
}

export default App

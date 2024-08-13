import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
const Home = () => {
  return (
    
      <Card className='card-container'>
        <div><h2 className='main-tittle'>Hi, I'm<span className='span-title'> Jaswanth Saganaboina</span> </h2></div>
        <div><p className='skill-container'>MERN Stack Developer | Problem Solver | Tech Enthusiast</p></div>
        <div><button className='resume-button'><a target='__blank' href="https://drive.google.com/file/d/1vKIxk-DpfsftBimoU7TdCHU_P68y0FUl/view?usp=sharing" style={{color:"white",textDecoration:"none"}}>RESUME</a></button></div>
      </Card>
    
  )
}

export default Home

import React from 'react'
import backgroundImage from '../Assests/to-do-list-background.jpg';

const Home = () => {
    const div_style = {
        color : 'white',
        display : 'flex',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat',
        backgroundAttacement : 'fixed',
        backgrounPosition: 'center',
        zIndex: 0, 
        fontFamily: 'Arial, sans-serif',
    }

    const first_div={
        paddingLeft : '180px',
        paddingTop : '100px',
        paddingBottom : '250px',
        justifyContent: 'left',
        alignItems:"left",
        textAlign : 'left',
        fontSize : '40px',
        fontWeight : 'bold'
    }
    const p_style={
        fontSize : '35px'
    }
  return (
    <div id='home' style={div_style}>
        <div style={first_div}>
            <h1>WELCOME,<br/><p style={p_style}>Here you can save your todolist</p></h1>
        </div>
    </div>
  )
}

export default Home
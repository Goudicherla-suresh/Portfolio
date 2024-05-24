import React from 'react'
import Navbar from '../Components/Navbar'
import HomePage from '../Pages/HomePage'

const MainLayout = () => {
  return (
    <div style={{width: '100%' , height: '1000vh', backgroundColor: ' #FFFFFF' }}>
        {/* nav bar */}

      <Navbar/>
        {/* content / body */}
        <HomePage/>

        {/* footer */}
        
      
    </div>
  )
}

export default MainLayout

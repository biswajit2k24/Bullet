import React from 'react'
import Mainpage from './Mainpage/Mainpage'
import Carau from "./Carau/Carau";
import Join_stds from "./Join_Students/Join_stds";
import Footer from "./Footer/Footer";
function Global() {
  return (
    <div>
      <Mainpage />
      <Carau />
      <Join_stds />
      <Footer />
    </div>
  )
}

export default Global

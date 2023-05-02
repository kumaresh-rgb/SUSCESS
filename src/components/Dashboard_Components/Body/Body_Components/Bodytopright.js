import React from 'react'
import '../css/Bodytopright/Bodytopright.css'













export const Bodytopright = () => {
  return (
    <div className="Main">
       
            <div className="Top">            
            <div className="Top_left_side">
            <Bodytoprightprops/>
            </div>
            <div className="Top_left_Bottom_side"> 
            <Bodytoprightprops/>        
            </div>
            
        </div>
        
            <div className="Right">
            <div className="Top_right_side">
            <Bodytoprightprops/>
            </div>
            <div className="Top_right_Bottom_side"> 
            <Bodytoprightprops/>         
            </div>
            </div>
             
    </div>
  )
}



export const Bodytoprightprops = (props) => {
  return (
    <div>Bodytopright</div>
  )
}

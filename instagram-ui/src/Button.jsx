import useState from 'react-dom'
import faceIcon from "./assets/faceIcon.png"

function Button(){
    return(
    
    <>
        <div className = "Paragraph">
            <p>Product/Services</p>
             <p>We provide essential tools</p>
           <p><a href="#">mediamodifier.com</a></p>
            </div>

            <div className ="Button-Container">
                <button className = "follow-button">Follow</button>
                <button className = "message-button">Message</button>
                <button className = "icon-button">
                    <img  className="face-icon"src= {faceIcon} alt =""></img>
                </button>
            </div>
        </>
    
    
    );

}
export default Button
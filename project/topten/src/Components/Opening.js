import { Component } from "react";
import {Media} from "reactstrap";

class Open extends Component{
   
    render(){
        
        return(
           
            <div className="container-fluid" fluid>
               <div className="row">
                   
               </div>
               <div className="row">
                   <div className="col">
                   <Media>
                        <Media left scr="../Iteams/img/Open.jpg">
                            <Media 
                            object data-src="holder.js/64x64" 
                            alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading>
                            My rewiew of my Headphones!
                            </Media>
                            <p>Yes, the best earbuds on the market are convenient and their audio quality is (mostly) great too. But when it comes to serious listening, there are still many clear benefits to a chunkier pair of headphones that cover your whole ears and block out all external distractions. 
                            </p>

                        </Media>
                     </Media>
                   </div>
               </div>
            </div>
        );
    }
}

export default Open;
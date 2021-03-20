import { Component } from "react";
import {Media, } from "reactstrap";

class Open extends Component{
    constructor(props){
        super(props);
        this.state =[
            {id: 0,
                name: "Halo 3",
                image: "/assets/images/react-lake.jpg",
                release_date: "September 25, 2007",
                Dev: "Bungie",
                description: "Finial trilagoy ."},
            {}
        ]
    }
    render(){
        
        return(
           
            <div className="container-fluid" fluid>
               <div className="row">
                   
               </div>
               <div className="row">
                   <div className="col">
                   <Media>
                        <Media left href="#">
                            <Media 
                            object data-src="holder.js/64x64" 
                            alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading>
                            Media heading
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                     </Media>
                   </div>
               </div>
            </div>
        );
    }
}

export default Open;
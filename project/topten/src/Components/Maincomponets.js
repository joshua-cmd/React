import { Component } from "react";
import Navbar from "./NavbarComponet";
import Open from "./Opening";
// import Footer from "./FooterComponets";
import List from  "./ListComponents";
import Headphones from '../Items/Headphones'




class Main extends Component{
    constructor(props){
        super(props);
       this.state={
           card:Headphones
        }
    }
    render(){

        return(
            <div className="container " >
                
                <Navbar/>
                <Open />
                <hr/>
                
                <List card={this.state.card}/>
                
                {/* <Footer /> */}
             
            </div>

        );

    
    }
}
export default  Main;
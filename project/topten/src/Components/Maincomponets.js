import { Component } from "react";
import Navbar from "./NavbarComponet";
import Open from "./Opening";
import Footer from "./FooterComponets";
import List from  "./ListComponents";


class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            // open:import
            // card:card
        };
    }
    render(){
        return(
            <div className="container" >
                <Navbar/>
                <Open />
                {/* <List />
                <Footer /> */}
            </div>

        );

    
    }
}
export default Main;
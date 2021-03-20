import { Component } from "react";
import Navbar from "./NavbarComponet";
import Open from "./Opening";
// import Footer from "./FooterComponets";
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
            <div className="container " >
                <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div className="spinner-border text-success ms-auto" role="status" aria-hidden="true"></div>
                </div>
                <Navbar/>
                <Open />
                <hr/>
                <>
                <List />
                </>
                {/* <Footer /> */}
             
            </div>

        );

    
    }
}
export default Main;
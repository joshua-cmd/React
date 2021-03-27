import { Component } from "react";
import {Container} from "reactstrap";
import Cards from "./CardsComponets";
import Tableofcontext from "./tableofcontentsComponents";

class List extends Component{
    render(){
     
        return(
            <Container>
                {/* <Tableofcontext card={this.props.card} /> */}
                <Cards cards={this.state.props} />
                
            </Container>
        );
    }
}
export default List;
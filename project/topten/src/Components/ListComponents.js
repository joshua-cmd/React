import { Component } from "react";
import {Container} from "reactstrap";
import Cards from "./CardsComponets";
import Tableofcontext from "./tableofcontentsComponents";
class List extends Component{
    render(){
        return(
            <Container>
                <Tableofcontext />
                <Cards />
            </Container>
        );
    }
}
export default List;
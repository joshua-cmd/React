import { Component } from "react";
import {Row} from 'reactstrap';


class Tableofcontext extends Component{
    constructor(props){
        super(props);
    }
 
    render(){
        const tableoc= this.props.card.map(card => <li ><a href="/">{this.props.card.name}</a></li>);
        return(
            <Row>
                <>
                    <ul>
                        {tableoc}
                    </ul>
                </>
            </Row>
        );
    }
}

export default Tableofcontext;
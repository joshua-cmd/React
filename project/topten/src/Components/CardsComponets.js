import { Component, React } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader
  } from 'reactstrap';
import Headphones from '../Items/Headphones.js';

class Cards extends Component{
    constructor(props){
        super(props);
        this.state={
            card:Headphones
        }
    }


    render(){
    //     const card = this.props.cards.map(card => {
    //     return(
    //        <div className="container-fluid" >
    //             <Card key={card.ID}>
    //             <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //             <CardBody>
    //                 <CardTitle tag="h5">{card.title}</CardTitle>
    //                 <CardSubtitle tag="h6" className="mb-2 text-muted">{card.subtitle}</CardSubtitle>
    //                 <CardText>{card.text}</CardText>
    //                 <Button>Button</Button>
    //             </CardBody>
    //             </Card>
    //         </div>
    //     );
       
    // })
    const arr = this.state.card.map(card =>
    
<div className="col" id={this.state.card.id}>
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} outline color="warning">
        <CardHeader>
        <CardTitle tag="h5">{this.props.card.Name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.card.brand}</CardSubtitle>
            <CardSubtitle>{this.props.card.price}+ . + 99 </CardSubtitle>
        </CardHeader>
        <CardBody>
            <CardImg top width="100%" src={this.props.card.im_src} alt="Card image " />
            <CardText>{this.props.card.pros}</CardText>
            <CardText>{this.props.card.cons}</CardText>
            <a href={this.props.card.link}><Button>Button</Button></a>
        </CardBody>
    </Card>
</div>
 
  )


    return(
        <div className="container-fluid gy-5 overflow-hidden">
          <div className="row justify-content-md-center gy-5">
            {arr}
           
          
            
            
       
       </div>
       </div>
    );
    
    }
}

export default Cards;
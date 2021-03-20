import { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class Cards extends Component{


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
    const arr =[<div className="row justify-content-md-center gy-5">
    <div className="col">
  <Card>
      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
      <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
      </CardBody>
  </Card>
  </div>
  </div>, 3]
    return(
        <div className="container-fluid gy-5 overflow-hidden">
          <div className="row justify-content-md-center gy-5">
              <div className="col">
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </div>
            </div>
            <div className="row gy-6">
                <div className="col">
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            </div>
            </div>
            {arr}
       </div>
    );
    
    }
}

export default Cards;
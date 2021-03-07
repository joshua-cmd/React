import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component{
    constructor(props){
        super(props);
        this.state ={};
        this.renderComments =this.renderComments.bind(this);
        this.renderCampsite =this.renderCampsite.bind(this);
    }
    renderComments(comments){
        
        if(comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => 
                        <div key={comment.id}>
                            {comment.text}<br/>
                            --{comment.author}-{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </div>)}
                </div>
            );
        }else
            {return <div/>}
    }

    renderCampsite(campsite){
        return(
            <div className="col0md-5 m-1">
                <Card onClick={() => this.campsite}>
            
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    render(){
     
        return(
            <div>
             {this.props.campsite?
            <div className="row"> 
                {this.renderCampsite(this.props.campsite)} 
                {this.renderComments(this.props.campsite.comment)}
            </div>
            : <div/>}
            </div>
        );
        
    }
}
export default CampsiteInfo;
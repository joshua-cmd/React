import React, { Component, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button,Modal, ModalHeader, ModalBody, ModalFooter,Label } from "reactstrap";
import { LocalForm, Control, Errors } from 'react-redux-form';


class CampsiteInfoComponent extends Component {
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    console.log(comments);
    if (comments) {
      
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div>
                <p>{comment.text}</p>
                -- {comment.author}{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>No comments available</div>;
    }
  }

  

  render() {
    if (this.props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    
                    {this.renderComments(this.props.comments)}
                    
                    
                </div>
                
                <CommentForm/>
            </div>
        );
    }
    return <div />;
  }
}
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
class CommentForm extends Component{
  constructor(props) {
    super(props);
      this.state={
        modal:false
      };
    this.toggleModal=this.toggleModal.bind(this);
    };
  

 toggleModal(){ 
  
   {this.setState({modal:!this.state.modal})}
 }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
    this.toggleModal();
  }
  
  render(){
    return(
      <div className="container">
        <Button outline onClick={this.toggleModal} ><i className="fa fa-pencil fa-lg"/>Submit Comment</Button>
        
      <Modal isOpen={this.state.modal} backdrop={false} >
      <ModalHeader>Submit Comment</ModalHeader>
      <ModalBody>  
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <div className="form-group">
          <Label>Rating</Label>
            <Control.select 
            id="rating"
            name="rating"
            model=".rating"
            
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Control.select>
          </div>
          <div className="form-group">
            <Label>Author</Label>
            <Control.text 
            id="author"
            name="author"
            model=".author"
            className="form-control"
            validators={{
              required,
              minLength: minLength(2),
              maxLength: maxLength(15),
            }}
            
            />
            <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
          </div>
          <div className="form-group">
          <Label>Text</Label>
            <Control.textarea 
            id="text"
            name="text"
            model=".text" 
            rows="6"
            className="form-control"
            />
          </div> 
          <Button type='submit'>Submit</Button>
        </LocalForm>
      </ModalBody>
      </Modal>
    </div>
    );

  }
}
export default CampsiteInfoComponent;
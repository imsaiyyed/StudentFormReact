
import React, { Component } from 'react';
import { FormGroup,Form,Button,Label,Input} from 'reactstrap';
import './StudentForm.css';


class StudentForm extends Component {

   
    render() {
        return (
            <div className="StudentForm">
        <Form>
        <FormGroup>
              <Label for="rollNo">Roll No</Label>
              <Input onChange={this.props.changed}type="number" value={this.props.rollNo} name="rollNo" id="rollNo" placeholder="Roll No" />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input onChange={this.props.changed}type="text" value={this.props.name}name="name" id="name" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input onChange={this.props.changed}type="email" value={this.props.email}name="email" id="email" placeholder="Your Email-Id" />
            </FormGroup>
            <FormGroup>
              <Label for="mobile">Mobile</Label>
              <Input onChange={this.props.changed}type="mobile" value={this.props.mobile}name="mobile" id="mobile" placeholder="Your Mobile" />
            </FormGroup><FormGroup>
              <Label for="city">City</Label>
              <Input  onChange={this.props.changed}type="city"value={this.props.city} name="city" id="city" placeholder="Your City" />
            </FormGroup>
            <Button onClick={this.props.add} >Submit</Button>
          </Form>
          </div>
);
    }
}
export default StudentForm;

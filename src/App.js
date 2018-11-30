import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table,Badge,Button } from 'reactstrap';
import StudentForm from './Components/StudentForm';
import './App.css';

class App extends Component {

  change=()=>{
    this.props.initializeState('ismail ssaiyyed');
  }

  componentDidMount(){
    console.log(this.props.students);
  }
  editRecord=(event,rollNo)=>{
    console.log(rollNo,event)
  }
  addStudent=()=>{
    this.props.addStudent(this.props.student);
  }
  formChanged=(event)=>{
    console.log(event.target)
    switch(event.target.name)
    {
            case 'rollNo':
              this.props.student.rollNo=event.target.value;
            break;
            case 'name':
              this.props.student.name=event.target.value;
            break;
            case 'email':
              this.props.student.email=event.target.value;
            break;
            case 'city':
              this.props.student.city=event.target.value;
            break;
            case 'mobile':
              this.props.student.mobile=event.target.value;
            break;
    }
     
    this.props.editForm(this.props.student);
  }
  deleteStudent=(rollNo)=>{
    let newStudents=[...this.props.students];
    newStudents.forEach((student,index)=>{
      if(student.rollNo===rollNo){
        newStudents.splice(index,1);
      }
    });
    this.props.updateStudents(newStudents);
  }
  render() {

    let jsxSource=null;



    jsxSource=(
      <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>City</th>
          <th></th>

        </tr>
      </thead>
      <tbody>{
      this.props.students.map(item=>
          <tr key={item.rollNo} onClick={(event)=>{this.editRecord(event,item.rollNo)}}>
          <th scope="row">{item.rollNo}</th>
          <td>{item.name}</td>
          <td>{item.mobile}</td>
          <td>{item.email}</td>
          <td>{item.city}</td>
          <td><Button  color="warning" size="sm">Edit</Button>{'  '}
              <Button onClick={()=>{this.deleteStudent(item.rollNo)}} color="danger" size="sm">Delete</Button></td>
        </tr>
      )  
       }
      </tbody>
      </Table>
    );

    return (
      <div className="App">
       <h2><Badge color="secondary">Welcome</Badge></h2>
        {jsxSource}
        <Button color="primary">Add Student</Button>{' '}
        <StudentForm 
          name={this.props.student.name}
          rollNo={this.props.student.rollNo}
          email={this.props.student.email}
          city={this.props.student.city}
          mobile={this.props.student.mobile}
          changed={this.formChanged}
          add={this.addStudent}
          />
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    students:state.students,
    student:state.student
  };
}

const mapDispatchToProps=dispatch=>{
  return {
    addStudent:(student)=>dispatch({
      type:'ADD',
      student:student
    }),
    updateStudents:(students)=>dispatch({
      type:'UPDATELIST',
      students:students
    }),
    editForm:(student)=>dispatch({
      type:'EDITED',
      student:student
    }),
    initializeState:(data)=>dispatch({
      type:'INITIALIZE',
      val:data
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

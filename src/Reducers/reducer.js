const initialState={
    students:[
        {
            rollNo:1,
            name:'Ismail',
            mobile:'7875191599',
            city:'Pune',
            email:'ismailsaiyyed60@gmail.com'
        }, 
        {
            rollNo:2,
            name:'Ismail',
            mobile:'7875191599',
            city:'Pune',
            email:'ismailsaiyyed60@gmail.com'
        }
    ],
    student:{
        rollNo:0,
            name:'',
            mobile:'',
            city:'',
            email:''
    }
}


const reducer=(state=initialState,action)=>{
    if(action.type==="EDITED"){

        let newObj={...state};
        let newStudent={...newObj.student};
        newStudent=action.student;
        console.log(newStudent)
        return({...newObj,student:{...newStudent}});
    }
    else if(action.type==="ADD"){
        let newObj={...state};
        let students=[...newObj.students];
        students.push(action.student);

        return({...newObj,students:[...students]});
    }
    else if(action.type==="UPDATELIST"){
        let newObj={...state};
        let newStudents=[...newObj.students];
        newStudents=[...action.students];

        return({...newObj,students:[...newStudents]});
    }
    else if(action.type==="INITIALIZE"){
        let newObj={...state};
        newObj.value=action.val;
        return({...newObj});
    }

    return state;
}

export default reducer;
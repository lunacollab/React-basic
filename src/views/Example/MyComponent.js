import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
         arrJobs: [
            { id:'abcJob1', title:'Developer', salary: '500 ' },
            { id:'abcJob2', title:'Tester', salary: '400 ' },
            { id:'abcJob3', title:'DevOps', salary: '500 ' }
        ]
    }
    
    addNewJob = (job) => {
        console.log('check job form parents:', job);
          this.setState({
            arrJobs:[...this.state.arrJobs, job]
          })
    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id); 
        this.setState({
           arrJobs: currentJobs
        })
    }
    render(){
    
         return (
    <>
    < AddComponent 
       addNewJob = {this.addNewJob}
    />
 
   <ChildComponent 
   arrJobs={this.state.arrJobs}
   deleteAJob = {this.deleteAJob}
   />  
    </>
    )
}
    
    

};

export default MyComponent;
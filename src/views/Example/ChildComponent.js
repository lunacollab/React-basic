import React from "react";
import './Demo.scss';
class ChildComponent extends React.Component {

    state = {
       showJobs:false,
    }
    handleShowHide = (state) => {
       this.setState({
        showJobs: !this.state.showJobs
    });
    }

    handleOnClickDelete = (job) => {
       this.props.deleteAJob(job)
    }  

    render(){
        let {arrJobs} = this.props;
        let {showJobs} = this.state;
    return (
        <>
        {showJobs === false && <div><button className="btn-show"
        onClick={(state) => this.handleShowHide(state)}>
            Show
            </button></div>}
        {showJobs && 
        <> 
        <div className="job-lists">
           {
               arrJobs.map((item, index) =>{
                   if(item.salary >= 300 ){
                       return(
                           <div key={item.id}>
                               {item.title} - {item.salary} $ <></> <span onClick={()=> this.handleOnClickDelete(item)}>x</span>
                           </div>
                       )
                   }
                  
               })
           }
         </div>
         <div><button onClick={(state) => this.handleShowHide(state)} >
           Hide</button>
   </div></> 
         }
        
        </>
    )
   
    
}
    
    

// };
// const ChildComponent = (props)=>{
//     let {arrJobs} = props;
// return (
//  <> 
//   <div className="job-lists">
//     {
//         arrJobs.map((item, index) =>{
//             return(
//                 <div key={item.id}>
//                     {item.title} - {item.salary}
//                 </div>
//             )
//         })
//     }
//   </div>
//  </>
// )
}


export default ChildComponent;
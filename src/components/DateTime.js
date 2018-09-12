import React from "react";
import {connect} from "react-redux";

function DateTime(props) {
  return (   
    <p className="small text-muted"><i className="fa fa-clock-o"></i> {props.dateTime}</p>
  );
}


// function mapStateToProps(state){
//   return {
//     dateTime: state.dateTime
//     }
//   }
  
//   const DateTime= connect(mapStateToProps)(DateTime);

export default DateTime;

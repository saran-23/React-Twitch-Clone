import React from 'react';
import  {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchRecords} from '../../actions';
import {records} from '../../api/records';

    class RecordList extends React.Component {
        componentDidMount() {
            this.props.fetchRecords();
        }
        renderAdmin(record) {
         if(record.userId === this.props.currentUserId)  {                          // condition checking for current user
                return (
                <div className="right floated content" >                                  
                    <Link to={`/record/edit/${record.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/record/delete/${record.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
                );
            }   
        }
        renderList() {   //displaying content to the screen
                    return this.props.record.map(record => {
                        return(
                            <div className="item" key={record.id}>
                                {this.renderAdmin(record)}
                                <i className="large icon user"/>
                                <div className="content">
                                    <Link to={`/record/edit/${record.id}`} className="header">
 
                                    Name: {record.name}
                                    </Link>
                                    
                                    <div className="header">
                                        Age: {record.age} <br/>
                                        E-mail: {record.email}<br/>
                                        Phone Number: {record.phone}<br/>
                                        Address: {record.address}<br/>
                                        Course: {record.course}<br/>
                                        Fees Paid: {record.feespaid}<br/>
                                        Mother Name: {record.mothername}<br/>
                                        Father Name:{record.fathername}
                                    </div>
                                </div>

                            </div>
                        )
                    });
        };
        renderCreate() {                //btn
                if(!this.props.isSignedIn) {
                    return (
                        <div style={{textAlign:'right'}}>
                            <Link to="/record/new" className="ui button primary">
                                Create Record
                            </Link>
                        </div>
                    );
                }
        }
        render() {
            return (
                <div>
                <h2 className="ui header purple"> Records</h2>
                 <div className ="ui celled list">
                     { this.renderList()}
                 </div>
                 {this.renderCreate()}
                 </div>
            )
                }
    }   

const mapStateToProps  = (state )=> {
            return { 
                record: Object.values(state.record),
                currentUserId:state.auth.userId,
                isSignedIn: state.auth.isSignedIn
        };
            
        };

export default connect (mapStateToProps,{fetchRecords}) (RecordList);

// export default connect ({fetchRecord}) (StreamList);
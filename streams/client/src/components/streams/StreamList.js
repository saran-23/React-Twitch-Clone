import React from 'react';
import  {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';

    class StreamList extends React.Component {
        componentDidMount() {
            this.props.fetchStreams();
        }
        renderAdmin(stream) {
         if(stream.userId === this.props.currentUserId)  {                          // condition checking for current user
                return (
                <div className="right floated content" >                                  
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
                );
            }   
        }
        renderList() {   //displaying content to the screen
                    return this.props.streams.map(stream => {
                        return(
                            <div className="item" key={stream.id}>
                                {this.renderAdmin(stream)}
                                <i className="  large icon user"/>
                                <div className="content">
                                    <Link to={`/streams/edit/${stream.id}`} className="header">
 
                                    Name: {stream.name}
                                    </Link>
                                    
                                    <div className="header">
                                        Age: {stream.age} <br/>
                                        E-mail: {stream.email}<br/>
                                        Phone Number: {stream.phone}<br/>
                                        Address: {stream.address}<br/>
                                        Course: {stream.course}<br/>
                                        Fees Paid: {stream.feespaid}<br/>
                                        Mother Name: {stream.mothername}<br/>
                                        Father Name:{stream.fathername}
                                    </div>
                                </div>

                            </div>
                        )
                    });
        };
        renderCreate() {                //btn
                if(this.props.isSignedIn) {
                    return (
                        <div style={{textAlign:'right'}}>
                            <Link to="/streams/new" className="ui button primary">
                                Create Stream
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
                streams: Object.values(state.stream),
                currentUserId:state.auth.userId,
                isSignedIn: state.auth.isSignedIn
        };
            
        };

export default connect (mapStateToProps,{fetchStreams}) (StreamList);
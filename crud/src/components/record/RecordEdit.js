import  _  from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {Spin} from 'antd';


import {fetchRecord,editRecord} from '../../actions';
import  RecordForm from './RecordForm';

class RecordEdit extends React.Component {
componentDidMount () {
    this.props.fetchRecord(this.props.match.params.id);
}

onSubmit = formValues => {

    this.props.editRecord(this.props.match.params.id,formValues);
};

    render() {

        if(!this.props.record){
                return <div><Spin/></div>
        }
    return  (

        <div>
     
     <h2 className=" ui header purple" > CRUD Operations</h2>
            <h3 className=" ui header">Edit a Form</h3>
            <RecordForm
            initialValues={
                _.pick(this.props.record,
                'name',
                'age',
                'email',
                'phone',
                'address',
                'course',
                'feespaid',
                'mothername',
                'fathername',
                )}    // _. pick helps to pick the specific content (title) in same array
            onSubmit={this.onSubmit}/>
            </div>
    );
    }
}


const mapStateToProps = (state,ownProps) => {
    return {record:state.record[ownProps.match.params.id]};
}

export default  connect (mapStateToProps,{fetchRecord,editRecord})(RecordEdit);
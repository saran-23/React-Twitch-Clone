
import React from 'react';
import {connect} from 'react-redux';

import  {createRecord} from '../../actions';
import RecordForm from './RecordForm';

class RecordCreate extends React.Component {
    
    onSubmit = formValues  => {
        this.props.createRecord(formValues);
}

    render() {
        return (
            <div>
                <h3>Create a Record </h3>
                <RecordForm onSubmit={this.onSubmit}/>
            </div>
            );
    }
}


export default connect(null,{createRecord}) (RecordCreate);


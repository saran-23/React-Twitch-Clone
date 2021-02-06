
import React from 'react';
import {connect} from 'react-redux';

import  {createRecord} from '../../actions';
import StreamForm from './StreamForm';

class RecordCreate extends React.Component {
    
    onSubmit = formValues  => {
        this.props.createStream(formValues);
}

    render() {
        return (
            <div>
                <h3>Create a Record </h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
            );
    }
}


export default connect(null,{createRecord}) (RecordCreate);


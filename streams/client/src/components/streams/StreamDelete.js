
import React from 'react';
import Modal from '../Modal';

import history from  '../../history';
const StreamDelete = () => {

    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );
const  onDismiss =  (
    () => history.push('/')
);

    return  (
        <div>StreamDelete
            <Modal 
            title='Delete Stream'
            content='  Are you sure you want to delete this stream ?'
            actions={actions}
            onDismiss={onDismiss}
            />
        </div>
    );
};

export default StreamDelete;
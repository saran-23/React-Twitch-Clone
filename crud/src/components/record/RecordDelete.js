import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Modal from '../Modal';
import history from  '../../history';
import {fetchRecord,deleteRecord} from '../../actions';
class RecordDelete extends React.Component {

        componentDidMount() {
          this.props.fetchRecord (this.props.match.params.id)
        }

     renderActions () {
         const {id} = this.props.match.params;
      return ( 
           <React.Fragment>
            <button onClick={() => this.props.deleteRecord(id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
      );
    };

    renderContent() {
        if (!this.props.record) {
            return 'Are you sure you want to delete this Record ?'
        }

        return `Are you sure you want to delete this Record with Name: ${this.props.record.name}`
    }

render() {
    return  (
    
            <Modal 
            title='Delete record'
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}
            />
        
    );
};
}
const mapStateToProps = (state,ownProps) => {
    return {record: state.record[ownProps.match.params.id]}
};

export default connect(mapStateToProps,{fetchRecord,deleteRecord}) (RecordDelete);
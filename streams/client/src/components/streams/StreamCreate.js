import React from 'react';
import {Field,reduxForm} from 'redux-form';    //i using rf 
 
class SteamCreate extends React.Component {
    render() {
        return (
            <form>
                <Field  name="Title"/>
                <Field name ="description" />
            </form>
        );
    }
}

export default reduxForm({
    form: 'steamCreate'
})(SteamCreate);
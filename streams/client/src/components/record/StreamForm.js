
import React from 'react';
import {Field,reduxForm} from 'redux-form';    //i using rf 

class SteamForm extends React.Component {
    renderError({error,touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }
renderInput = ({input,label,meta}) => {
    const className = `field ${meta.error && meta.touched  ?  'error' :  ' ' }`;
    return (
    <div className={className}>
    <label>{label}</label>
  < input {...input}  autoComplete='on'/>
  
            {this.renderError(meta)}
  </div>
);
}
    

    onSubmit = formValues  => {                       //when user fill
        this.props.onSubmit(formValues);
}

    render() {
        return (
            <form 
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="ui form  error"
            >
                <Field  name="name"  component={this.renderInput} label=" Name" placeholder="Enter your name"/>
                <Field name ="age" component={this.renderInput}  label="Age" />
                <Field name ="email" component={this.renderInput}  label="E-mail" />
                <Field name ="phone" type="number" component={this.renderInput}  label="Phone number" />
                <Field name ="address" component={this.renderInput}  label="Residential Address" />
                <Field name ="course" component={this.renderInput}  label="Course" />
                <Field name ="feespaid" component={this.renderInput}  label="Fees  paid" />
                <Field name ="mothername" component={this.renderInput}  label="Mother Name" />
                <Field name ="fathername" component={this.renderInput}  label="Father Name" />

                {/* <Field  name="title" component={this.renderInput} label="Enter Title"/>
                <Field name ="description" component={this.renderInput}  label="Enter Description"/> */}
                <button className="ui button primary">
                    Submit
                </button>
            </form>
        );
    }
}

const validate =  (formValues) => {
    const errors = {};

    if(!formValues.name) {
        errors.name="Please Enter your Name"
    }
    if(!formValues.age) {
        errors.age ="Please Enter a Age";
    }
     if(!formValues.email) {
        errors.email ="Please your email";
    }
    if(!formValues.phone) {
        errors.phone ="Please your phone number";
    }
    if(!formValues.address) {
        errors.address ="enter the Address";
    }
    if(!formValues.course) {
        errors.course="choose the Course";
    }
    if(!formValues.feespaid) {
        errors.feespaid ="enter the amount";
    }
    if(!formValues.mothername) {
        errors.mothername ="Please enter your Mother Name";
    }
    if(!formValues.Fathername) {
        errors.Fathername ="Please enter  your Father Name";
    }
    return errors;
};


export default reduxForm({                                             /// same as connect ()
    form: 'steamForm',
    validate
})(SteamForm);



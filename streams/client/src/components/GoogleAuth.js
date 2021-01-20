import React from 'react';

class GoogleAuth extends React.Component {
state = {isSignedIn:null}; //dont know user signed in ror not 
    componentDidCatch( ) {
        window.gapi.load('client:auth2',    () => {
            window.gapi.client.init({
                clientId: 
                '526013591845-sj5g24ogdoii33upeindnn8pipbk9gb0.apps.googleusercontent.com',
                scope:'email' //accessing email
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() }) ;  //issiigned in google property
            });
        });
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div><i>I dont know if we are signed in</i></div>;
        } else if (this.state.isSignedIn) {
            return <div><b>I am signed In!</b></div>
        } else {
            return <div><u>I am not signed in</u></div>
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;
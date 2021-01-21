import React from 'react';

class GoogleAuth extends React.Component {
state = {isSignedIn:null}; //dont know user signed in ror not 
    componentDidMount( ) {
        window.gapi.load('client:auth2',    () => {
            window.gapi.client.init({
                clientId: 
                '526013591845-sj5g24ogdoii33upeindnn8pipbk9gb0.apps.googleusercontent.com',
                scope:'email' //accessing email
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() }) ;  //issiigned in google property
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });

    };

        onAuthChange = ()  => {
            this.setState({isSignedIn: this.auth.isSignedIn.get()});
        }



    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return  null;
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button">
                    <i className="google icon"/>
                        Sign Out
                </button>
            )
        } else {
            return (
            <button className="ui red google button">
                <i className="google icon"/>
                Sign In with Google
            </button>
            )
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;
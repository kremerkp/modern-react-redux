import React from 'react';
import { connect } from 'react-redux';
import {  signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{
    // initilize one time when component is rendered
    componentDidMount(){
        // callback, after gapi is loaded we init client
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '386352984524-2skke5emicv4n9o3ufsuvh2jt3nbvlkb.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                // Callback function will be invoked when user auth-state is changed
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });

    }

    // callback function when listen is invoked from google auth.isSignedIn.listen
    onAuthChange = isSignedIn => {
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    // Helper callback function signIn
    onSignInClick = () => {
        this.auth.signIn();
    };

    // Helper callback function signOut
    onSignOutClick = () => {
        this.auth.signOut();
    };


    renderAuthButton(){
        if (this.props.isSignedIn === null){
            return null;
        } else if (this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOutClick} >
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick} >
                    <i className="google icon"/>
                         Sign in with google
                </button>
            )
        }
    }

    render (){
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);
import * as React from "react";
import GoogleLogin from "react-google-login";
import Cookies from "universal-cookie";

const responseGoogle = (response) => {
    console.log(response);
};

const clientId = "587958545142-eeai3n1svhpndn1jvgfrsomd1djhcag5.apps.googleusercontent.com";
const cookies = new Cookies();

export default class GoogleSignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: props.redirect
        };

        this.onSignIn = this.onSignIn.bind(this);

    }

    onSignIn(googleUser) {

        let profile = googleUser.profileObj;
        let idToken = googleUser.getAuthResponse().id_token;
        let xml = new XMLHttpRequest();
        xml.open("POST", "/tokensignin");
        xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        xml.onload = res => {

            if (xml.status === 200) {

                let r = JSON.parse(xml.response);

                cookies.set("token", idToken, {expires: new Date(r.expires)});

                if (this.state.redirect) {
                    window.location.replace(this.state.redirect);
                } else {
                    window.location.replace("/account"); // If user visits sign in page directly
                }

            } else {
                window.location.replace("/error"); // TODO: Display actual page to user
            }

        };

        xml.send(JSON.stringify({
            idToken: idToken,
        }));

    }

    render() {
        return (

           <GoogleLogin onSuccess={this.onSignIn} onFailure={responseGoogle} clientId={clientId}/>

        );
    }

}

import {auth} from 'firebase';
import firebase from 'firebase';

export const doCreateUserWithEmailAndPassword = (email, password) =>
auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
auth.signInWithEmailAndPassword(email, password);
export const doSignOut = () =>
auth.signOut();
// Password Reset
export const doPasswordReset = (email) =>
auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);

export function signIn(event,func){
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function(result){
      if(func!=undefined)
        func(result);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;


    });

  }
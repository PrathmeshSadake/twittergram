import { auth, googleAuthProvider } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import React from "react";

// User signed in and has Username: sign out button
// User signed in but username missing : Username form
// User signed out : signin button

const SignIn = () => {
  return (
    <div>
      {user ? (
        username ? (
          <SignOutButton />
        ) : (
          <UsernameForm />
        )
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

const SignInButton = () => {
  const signInWithGoogle = () =>
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = googleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = googleAuthProvider.credentialFromError(error);
      });
  return <div>SignInButton</div>;
};

const SignOutButton = () => {
  return <div onClick={() => signOut()}>SignOutButton</div>;
};

const UsernameForm = () => {
  return <div>SignOutButton</div>;
};

export default SignIn;

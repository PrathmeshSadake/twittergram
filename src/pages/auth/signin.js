import { UserContext } from "@/lib/context";
import { auth, googleAuthProvider } from "@/lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import React, { useContext } from "react";

// User signed in and has Username: sign out button
// User signed in but username missing : Username form
// User signed out : signin button

const SignIn = () => {
  const { user, username } = useContext(UserContext);

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
        // The AuthCredential type that was used.
        const credential = googleAuthProvider.credentialFromError(error);
      });
  return <button onClick={signInWithGoogle}>SignInButton</button>;
};

const SignOutButton = () => {
  return <button onClick={() => signOut()}>SignOutButton</button>;
};

const UsernameForm = () => {
  return <div>Username Form</div>;
};

export default SignIn;

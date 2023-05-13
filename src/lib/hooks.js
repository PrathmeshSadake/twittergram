import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, firestore } from "./firebase";

export const useUserData = () => {
  const [user, loading, error] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (user) {
      // const userRef = doc(firestore, "users", user.uid);
      const unsubscribe = onSnapshot(
        doc(firestore, "users", user.uid),
        (doc) => {
          const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          console.log("data: ", doc.data());
          setUsername(doc.data()?.username);
        }
      );
      unsubscribe();
    } else {
      setUsername(null);
    }
  }, [user]);

  return { user, username };
};

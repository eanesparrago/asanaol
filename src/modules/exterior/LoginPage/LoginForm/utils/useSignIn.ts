import { useHistory } from "react-router";
import { useState } from "react";
import { auth, firestore, createUserProfileDocument } from "backend/firebase";
import { message } from "antd";

function useSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function signIn(emailAddress: string, password: string) {
    setIsLoading(true);

    try {
      const { user } = await auth.signInWithEmailAndPassword(
        emailAddress,
        password
      );

      if (!user) throw new Error("User not found");

      if (!user.emailVerified) {
        setIsLoading(false);
        history.push("/verify-email");
        return;
      }

      const userDoc = await firestore.doc(`users/${user.uid}`).get();

      if (!userDoc.exists) {
        await createUserProfileDocument(user);
        setIsLoading(false);
        history.push("/account-setup");
        return;
      }

      const userProfile = userDoc.data();

      if (userProfile?.isActivated) {
        history.push("/app");
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      message.error("The username or password is not correct.");
    }
  }

  return { signIn, isLoading };
}

export default useSignIn;

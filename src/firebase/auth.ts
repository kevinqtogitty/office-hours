import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User
} from 'firebase/auth';
import { auth } from './firebaseInit';
import { addNewUserToDb } from './firestore';
import { FirebaseError } from 'firebase/app';
const provider = new GoogleAuthProvider();

const createNewUserWithEmailAndPassword = async (
  username: string,
  email: string,
  password: string
): Promise<User | undefined> => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // reroute to sign in page
    await addNewUserToDb(username, email, user.uid);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const signInUser = async (
  email: string,
  password: string
): Promise<User | undefined> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const signInUserWithGoogle = async (): Promise<User | unknown> => {
  try {
    const { user } = await signInWithPopup(auth, provider);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export {
  signInUser,
  createNewUserWithEmailAndPassword,
  signInUserWithGoogle,
  logoutUser
};

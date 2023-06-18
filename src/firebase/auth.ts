import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { auth } from './firebaseInit';
import { addNewUserToDb } from './firestore';
const provider = new GoogleAuthProvider();

const createNewUserWithEmailAndPassword = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // reroute to sign in page
    await addNewUserToDb(firstName, lastName, email, user.uid);
  } catch (error) {
    console.log(error);
  }
};

const signInUser = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const signInUserWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, provider);
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

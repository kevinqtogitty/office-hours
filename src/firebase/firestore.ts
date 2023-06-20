import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebaseInit';

const addNewUserToDb = async (username: string, email: string, uid: string) => {
  try {
    await setDoc(doc(db, 'users', auth.currentUser!.uid), {
      username,
      uid,
      email
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export { addNewUserToDb };

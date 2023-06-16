import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseInit';

const addNewUserToDb = async (
  firstName: string,
  lastName: string,
  email: string,
  uid: string
) => {
  try {
    console.log('adding to db');
    console.log(firstName, lastName, uid, email);
    const docRef = await addDoc(collection(db, 'users'), {
      firstName,
      lastName,
      uid,
      email
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export { addNewUserToDb };

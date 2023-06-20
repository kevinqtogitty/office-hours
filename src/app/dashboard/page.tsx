'use client';
import { logoutUser } from '@/firebase/auth';
import { auth, db } from '@/firebase/firebaseInit';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { DocumentData, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState<DocumentData | undefined>(
    undefined
  );
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  onAuthStateChanged(auth, () => {
    if (!auth.currentUser) router.push('/login');
  });

  const fetchUser = async () => {
    try {
      const docRef = doc(db, 'users', `${auth.currentUser?.uid}`);
      setLoggedInUser((await getDoc(docRef)).data());
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <main>
      <section>
        <h1>Welcome back, {loggedInUser?.username}</h1>
        <button onClick={handleLogout}>Logout</button>
      </section>
      {auth.currentUser?.email}
    </main>
  );
};
export default Dashboard;

'use client';
import { logoutUser } from '@/firebase/auth';
import { auth } from '@/firebase/firebaseInit';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) router.push('/login');
    return;
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    if (!auth.currentUser) router.push('/login');
  };

  return (
    <div>
      {auth.currentUser?.email}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Dashboard;

import { collection, getDocs, addDoc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import authentication, { db } from '../firebase';
import { useState, useEffect } from 'react';

export function useUsers() {
  const usersCollection = collection(db, 'users');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const users = await getDocs(usersCollection);
      setUsers(users.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUsers();
    
  },[]);

  function createUser() {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(authentication, googleProvider).then((res) => {
      const findUser = users.find(user => user.uid === res.user.uid);

      if (findUser) {
        alert('El usuario ya se encuentra registrado');
        return;
      }
      const newUser = {
        email: res.user.email,
        photoURL: res.user.photoURL,
        displayName: res.user.displayName,
        phoneNumber: res.user.phoneNumber,
        uid: res.user.uid,
      }
      setUsers([ newUser, ...users ]);
      addDoc(usersCollection, newUser);
    }).catch((err) => {
      console.log(err);
    })
  }

  return [users, createUser];
}
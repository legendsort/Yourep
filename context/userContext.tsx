'use client';
import React, { useEffect, useState } from 'react';
import { User, UserContextType } from '../@types/user';
import { generateKeys } from '../utils/nostr';

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setU] = useState<User>({
    privatekey: null,
    publickey: null,
    loggedIn: true,
  });

  const setUser = (user: User) => {
    window.localStorage.setItem('user', JSON.stringify(user));
    setU(user);
  };

  useEffect(() => {
    const storedUser = window.localStorage.getItem('user');
    if (storedUser) {
      const { privatekey, publickey, loggedIn } = JSON.parse(storedUser);
      setUser({ privatekey, publickey, loggedIn });
    } else if (storedUser === null) {
      const { privatekey, publickey } = generateKeys();
      window.localStorage.setItem(
        'user',
        JSON.stringify({ privatekey, publickey })
      );
      setUser({ privatekey, publickey, loggedIn: false });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

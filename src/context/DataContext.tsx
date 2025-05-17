import { createContext, useState, ReactNode , useEffect } from 'react';
import SecureStorage from 'react-secure-storage';

interface DataContextProps {
  userEmail?: string ;
  setUserEmail: (role : string) => void;
  role?: string ;
  setRole: (role : string) => void;
  token?: string ;
  setToken : (tokken : string) => void;
  tokenVerified?: string ;
  setTokenVerified : (tokken : string) => void;
  userId?: number;
  setUser : (user : number) => void;
  notif: number;
  setNotif : (user : number) => void;
}

export const DataContext = createContext<DataContextProps>(
  {
    role: "",
    setRole: () => {},
    userEmail: "",
    setUserEmail: () => {},
    token: "",
    setToken : () => {},
    tokenVerified: "",
    setTokenVerified : () => {},
    setUser : () => {},
    notif : 0,
    setNotif : () => {}
  }
)


export const DataProvider = ({children }: { children: ReactNode }) => {
  const [role, setRoleState] = useState<string>(() => SecureStorage.getItem('role') as string || "");
  const [userEmail, setUserEmailState] = useState<string>(() => SecureStorage.getItem('user_email') as string || "");
  const [token, setTokenState] = useState<string>(() => SecureStorage.getItem('token') as string || "");
  const [tokenVerified, setTokenVerifiedState] = useState<string>(() => SecureStorage.getItem('token_verified') as string || "");
  const [userId, setUserState] = useState<number>(() => SecureStorage.getItem('user') as number);
  const [notif, setNotifState] = useState<number>(() => SecureStorage.getItem('notif') as number || 0);

  const setRole = (newRole : string) => {
    setRoleState(newRole);
    SecureStorage.setItem('role', newRole);
  };

  const setUserEmail = (newRole : string) => {
    setUserEmailState(newRole);
    SecureStorage.setItem('user_email', newRole);
  };

  const setToken = (newToken : string) => {
    setTokenState(newToken);
    SecureStorage.setItem('token', newToken);
  };

  const setTokenVerified = (newToken : string) => {
    setTokenVerifiedState(newToken);
    SecureStorage.setItem('token_verified', newToken);
  };

  const setUser = (newUser : number) => {
    setUserState(newUser);
    SecureStorage.setItem('user', newUser);
  };

  const setNotif = (newNotif : number) => {
    setNotifState(newNotif);
    SecureStorage.setItem('notif', newNotif);
  };


  useEffect(() => {
    setUserEmail(SecureStorage.getItem('user_email') as string || "");
    setRole(SecureStorage.getItem('role') as string || "");
    setToken(SecureStorage.getItem('token') as string || "");
    setTokenVerified(SecureStorage.getItem('token_verified') as string || "");
    setUser(SecureStorage.getItem('user') as number );
    setNotif(SecureStorage.getItem('notif') as number );
  }, []);

  return (
    <DataContext.Provider value={{ role, setRole, token, setToken,userId ,setUser,notif, setNotif , setTokenVerified ,tokenVerified , userEmail , setUserEmail }}>
    {children}
  </DataContext.Provider>
  );
};

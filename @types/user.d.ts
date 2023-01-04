export interface User {
  privatekey: string | null;
  publickey: string | null;
  loggedIn: boolean;
}
export type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

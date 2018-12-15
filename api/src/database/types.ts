export interface IUserData {
  _id: string;
  name: string;
  email: string;
  passwordHash: string;
}

export interface IDatabase {
  reset: () => void;
  userDataByEmail: (email: string) => IUserData | null;
  userDataById: (userId: string) => IUserData | null;
  insertUserData: (
    userData: { name: string; email: string; password: string }
  ) => IUserData;
  userDataByEmailAndPassword: ((
    { email, password }: { email: string; password: string }
  ) => IUserData | null);
}

import { InMemoryDatabase } from '../InMemoryDatabase';

describe('InMemoryDatabase', () => {
  const database = new InMemoryDatabase();

  beforeEach(() => {
    database.reset();
  });

  it('stores user data', () => {
    const userData = { name: 'name', email: 'foo@bar.com', password: 'baz' };

    const storedUserData = database.insertUserData(userData);
    _expectFieldsToNotBeFalsy(storedUserData, ['_id', 'passwordHash']);
    _expectFieldsToBeEqual(storedUserData, userData, ['name', 'email']);

    const fetchedUserData = database.userDataById(storedUserData._id);
    expect(fetchedUserData).toBe(storedUserData);
  });

  it('fetches user by email', () => {
    const userData = { name: 'name', email: 'foo@bar.com', password: 'baz' };
    database.insertUserData(userData);

    const fetchedUserData = database.userDataByEmail(userData.email);
    _expectFieldsToNotBeFalsy(fetchedUserData, ['_id', 'passwordHash']);
    _expectFieldsToBeEqual(fetchedUserData, userData, ['name', 'email']);
  });

  it('fetches users by email and password correctly', () => {
    const userData = { name: 'name', email: 'foo@bar.com', password: 'baz' };
    database.insertUserData(userData);

    const fetchedUserDataFailure = database.userDataByEmailAndPassword({
      email: userData.email,
      password: 'wrong-password',
    });
    expect(fetchedUserDataFailure).toBeNull();

    const fetchedUserDataSuccess = database.userDataByEmailAndPassword({
      email: userData.email,
      password: userData.password,
    });
    expect(fetchedUserDataSuccess).not.toBeNull();
    _expectFieldsToBeEqual(fetchedUserDataSuccess, userData, ['name', 'email']);
  });

  const _expectFieldsToNotBeFalsy = (obj: any, keys: string[]) => {
    keys.map(key => expect(obj[key]).not.toBeFalsy());
  };

  const _expectFieldsToBeEqual = (obj1: any, obj2: any, keys: string[]) => {
    keys.map(key => expect(obj1[key]).toEqual(obj2[key]));
  };
});

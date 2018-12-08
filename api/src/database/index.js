import crypto from 'crypto';

const inMemoryDatabase = {
  users: {
    'test': {
      _id: 'test',
      name: 'Tester',
      email: 'test@test.com',
    }
  }
};
const createId = () => crypto.randomBytes(10).toString('hex');
const calcHash = word => crypto.createHash('sha256').digest(word).toString('hex');

const UserNotFound = (userId) => new Error(`User with id ${userId} not found.`);

const userDataById = async userId => {
  const userData = inMemoryDatabase.users[userId];
  if (!userData) {
    return UserNotFound(userId);
  }
  return userData;
};

const insertUserData = async ({ name, email, password }) => {
  const _id = createId();
  const passwordHash = calcHash(password);

  inMemoryDatabase[_id] = {
    _id,
    name,
    email,
    passwordHash,
  };

  return inMemoryDatabase[_id];
};

const userDataByEmail = async email => {
  const userData = Object.values(inMemoryDatabase).find(data => data.email === email);
  return userData;
};

const userDataByEmailAndPassword = async ({ email, password }) => {
  const passwordHash = calcHash(password);
  return Object.values(inMemoryDatabase).find(
    data => data.email === email && data.passwordHash === passwordHash
  );
};

export default {
  userDataById,
  userDataByEmail,
  insertUserData,
  userDataByEmailAndPassword,
};

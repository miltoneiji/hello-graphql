import UserModel from './UserModel';

export const load = async (context, _id) => {
  if (!_id) {
    return null;
  }

  let data;
  try {
    data = await context.database.userDataById(_id);
  } catch(err) {
    console.log(err);
    return null;
  }

  return {
    _id: data._id,
    name: data.name,
    email: data.email,
  };
};

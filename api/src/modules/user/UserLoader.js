import UserModel from './UserModel';

export const load = async (context, id) => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.database.userDataById(id);
  } catch(err) {
    console.log(err);
    return null;
  }

  return new UserModel({
    _id: data._id,
    name: data.name,
    email: data.email,
  });
};

const logout = () => {
  localStorage.jwt = null;
};

export default { logout };

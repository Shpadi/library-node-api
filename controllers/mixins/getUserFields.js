exports.getUserFields = (user) => {
   const { name, _id, email, createdAt, updatedAt, isAdmin } = user;
   return {
       id: _id,
       name,
       email,
       createdAt,
       updatedAt,
       isAdmin
   }
};

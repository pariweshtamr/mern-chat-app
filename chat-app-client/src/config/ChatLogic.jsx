export const getSender = (loggedUser, users) => {
  return users[0]?._id === loggedUser.user?._id
    ? users[1]?.displayName
    : users[0]?.displayName
}

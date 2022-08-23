import User from "./User.schema.js"

// Register User
export const registerUser = (newUser) => {
  try {
    const user = User(newUser).save()
    return user
  } catch (error) {
    console.log(error)
  }
}

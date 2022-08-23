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

// Get user bu username
export const getUserByUsername = (username) => {
  try {
    const user = User.findOne({ username })
    return user
  } catch (error) {
    console.log(error)
  }
}

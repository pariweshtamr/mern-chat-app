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

// Get all users
export const getAllUsers = (filter) => {
  try {
    const user = User.find(filter)
    return user
  } catch (error) {
    console.log(error)
  }
}

// Get user by username
export const getUserByUsername = (username) => {
  try {
    const user = User.findOne({ username })
    return user
  } catch (error) {
    console.log(error)
  }
}

// update user
export const getByIdAndUpdate = (_id, update) => {
  try {
    const user = User.findByIdAndUpdate(_id, update)
    return user
  } catch (error) {
    console.log(error)
  }
}

// Find user
export const findAUserByEmail = (email) => {
  try {
    const user = User.findOne({ email })
    return user
  } catch (error) {
    console.log(error)
  }
}

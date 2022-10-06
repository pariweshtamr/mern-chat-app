const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        isLoggedIn: false,
        error: {},
      }
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: true,
        isLoggedIn: true,
        error: {},
      }
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      }

    case "LOGOUT_SUCCESS":
      return {
        user: null,
        isFetching: false,
        isLoggedIn: false,
        error: {},
      }
    case "LOGOUT_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default AuthReducer

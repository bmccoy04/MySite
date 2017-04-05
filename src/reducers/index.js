import {combineReducers} from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import auth from "./authReducer"

export default combineReducers({
    tweets,
    user,
    auth,
})
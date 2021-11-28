import { TOGGLE_LOADING } from "../actions/loading";

export default function loading(state = true, action){
    switch(action.type){
        case TOGGLE_LOADING :
            return false
        default:
            return state
    }
}
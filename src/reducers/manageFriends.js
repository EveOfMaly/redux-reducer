export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case "ADD_FRIEND":
            return({
                ...state,
                friends: [
                    ...state.friends,
                     action.friend
                ]}
            )
        case "REMOVE_FRIEND":
            const friendIndex = state.friends.findIndex(friend => friend.id === action.id)
            return(
                {
               friends: [
                ...state.friends.slice(0, friendIndex),
                ...state.friends.slice(friendIndex + 1)
            ]}
            )
        default: 
            return state;
        }
    }









    //return a new value with the key value pairs of state carried over to a new object
    //with friends overwrriten with an array that contains all the existing array elements (empty array), and update it to value of action of array.

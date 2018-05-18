const MyName = (state = {}, action) => {

    console.log("REDUCER - action.myNewName: " + action.myNewName)
    console.log("REDUCER - state.myNewName: " + state.myNewName)
    
      switch (action.type) {
        case 'CHANGE_NAME':
          return {
            ...state,
              myNewName: action.myNewName
            }
          
        default:
          return state
      }
    }
    
    export default MyName
    
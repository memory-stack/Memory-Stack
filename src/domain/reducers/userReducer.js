export var userReducer={
    initUser(state,userObject){
        state.name=userObject.payload.profileObj.name;
        state.email=userObject.payload.profileObj.email;
        state.imageUrl=userObject.payload.profileObj.imageUrl;
        state.access_token=userObject.payload.tokenObj.access_token;
    },

    userExists(state){
        state.doesUserExist=true;
    }
}
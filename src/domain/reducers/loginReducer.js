export var loginReducer={
    userLoggedIn(state){
        state.isUserLoggedIn=true;
    },
    userLoggedOut(state){
        state.isUserLoggedIn=false;
    },
};
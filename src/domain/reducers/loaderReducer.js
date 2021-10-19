export var loaderReducer={
    toggleLoader(state,payload){
        state.isLoading=payload.payload;
    }
};
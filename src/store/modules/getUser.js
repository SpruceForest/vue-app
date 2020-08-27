const getUser = {
    namespaced:true,
    state:{
        username:''
    },
    getters:{},
    mutations:{
        getUserName(state,data){
            state.username = data
        }
    },
    actions:{}
}
export default getUser;
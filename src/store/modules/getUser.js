import {isLogin} from '../../apis/apis.js'
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
    actions:{
        async getUserName(store){
            await isLogin().then(res=>{
                if(res.code == 0){
                    store.commit('getUserName',res.username);
                }
            })
        }
    }
}
export default getUser;
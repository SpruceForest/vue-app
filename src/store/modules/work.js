import {getInfo} from '../../apis/apis.js'
const work = {
    namespaced:true,
    state:{
        data:{},
        loading:true
    },
    getters:{},
    mutations:{
        setWork(state,data){
            switch (data.type) {
                case "WORK_RESET":
                    state.data = {};
                    state.loading = true;
                    break;
                case "WORK_LOADOVER":
                    state.loading = false;
                    state.data = data.data;
            }
        }
    },
    actions:{
        async setWork(store,payload){
            let res = await getInfo(payload)
            store.commit('setWork',{
                type:"WORK_LOADOVER",
                data:res
            })

        }
    }
}

export default work;
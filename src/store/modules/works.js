import {getWorks} from '../../apis/apis.js'
const works = {
    namespaced:true,
    state:{
        data:[],
        loading:false,
        loadEnd:false,
        page:1
    },
    getters:{},
    mutations:{
        setLoads(state,action) {
            switch (action.type){
                case 'LOAD':
                    state.loading =  true;
                    break;
                case 'LOADOVER':
                    state.loading = false;
                    state.page = ++state.page,
                    state.data = state.data.concat(action.data);
                    break;
                case 'LOADEND':
                    state.loadEnd = true;
                    break;
            }
        }
    },
    actions:{
        async setLoads(store,payload){
            store.commit('setLoads',{
                type:'LOAD'
            });
            let res = await getWorks({...payload,page:store.state.page});
            if(!res.length){
                store.commit('setLoads',{
                    type:'LOADEND'
                })
                return false
            }
            store.commit('setLoads',{
                type:'LOADOVER',
                data: res
            });
            return true;
        }
    }
}
export default works;
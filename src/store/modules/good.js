import {getGood} from '../../apis/apis.js'
const good = {
    namespaced:true,
    state:{
        good:false,
        goodid:0
    },
    getters:{},
    mutations:{
        getGood(state,action){
            switch (action.type) {
                case "GOOD":
                    state.good = true;
                    state.goodid = action.goodid;
                    break;
                case "CANCEL_GOOD":
                    state.good = false;
                    state.goodid = 0;
                    break;
            }
        }
    },
    actions:{
        async getGood(store,played){
            let res = await getGood(played);
            if(res.code == 0){
                store.commit('getGood',{
                    type:'GOOD',
                    goodid:res.gooid
                });
            }else{
                store.commit('getGood',{
                    type:'CANCEL_GOOD',
                });
            }

        }
    }
};

export default good;
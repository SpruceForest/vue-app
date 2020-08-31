import {getMessageList} from '../../apis/apis.js'
const messageList = {
    namespaced:true,
    state:{
        messageList: [],
        loading: false,
        loadEnd: false,
        page: 1
    },
    getters:{},
    mutations:{
        setMessageList(state,action){
            switch(action.type){
                case "MESSAGE_LOAD":
                    state.loading = true;
                    break;
                case "MESSAGE_LOADOVER":
                    state.loading = false;
                    state.page = ++state.page;
                    state.messageList = state.messageList.concat(action.messageList);
                    break;
                case "MESSAGE_ADD":
                    state.messageList =  [action.messageList,...state.messageList];
                    break;
                case  "MESSAGE_LOADEND":
                    state.loadEnd = true;
                    break;
                case "MESSAGE_RESET":
                    state.messageList = [];
                    state.loading = false;
                    state.loadEnd = false;
                    state.page = 1
            }
        }
    },
    actions:{
        async setMessageList(store,played){
            let res = await getMessageList({
                page:store.state.page,
                ...played
            });
            if(!res.length){
                store.commit('setMessageList',{
                    type:'MESSAGE_LOADEND'
                });
                return false;
            }else{
                store.commit('setMessageList',{
                    type:'MESSAGE_LOADOVER',
                    messageList:res
                })
            }
        }
    }
}

export default messageList;
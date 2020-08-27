import Vuex from 'vuex';
import Vue from 'vue';
import getUser from './modules/getUser.js'
import works from './modules/works.js'
import work from './modules/work.js'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        getUser,
        works,
        work
    },
    nemaspaced:true
});

export default store;
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {
        httpStatus(state, value){
            switch(value){
                case 0:
                    Vue.prototype.$Loading.start();
                break;
                case 1:
                    Vue.prototype.$Loading.finish();
                break;
                case 2:
                    Vue.prototype.$Loading.error();
                break;
                default:
                break;
            }
        }
    },
    actions: {

    }
})

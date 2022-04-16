
import {createStore} from 'vuex';

import home from './home';
import search from './search';
import detail from './detail'
import shopCart from './shopcart'
import user from './user';
export default createStore({
    state :{},
    modules:{
        user,
        home,
        search,
        detail,
        shopCart
    }
})
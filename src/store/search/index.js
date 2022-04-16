import {reqSearchList} from "@/api";

const state ={
    searchList:{

    }
};

const mutations = {
    GETSEARCHLIST(state,searchlist){
        state.searchList = searchlist;
    }
};

const actions = {
    async getSearchList({commit},data){
        let result = await reqSearchList(data);
        if (result.code == 200) {
            console.log(result.data);
            commit("GETSEARCHLIST", result.data);
        }
    }
}
;
//getters:作用,getters是为了简化数据而生（为了组件获取数据方便而生）
const getters = {
    //搜索模块【商品展示的数据】
    //state：它是当前小仓库（search）的state数据，没有home仓库中的state
    //只是当前仓库的state
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    //品牌数据
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    //平台属性
    attrsList(){
        return state.searchList.attrsList||[];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
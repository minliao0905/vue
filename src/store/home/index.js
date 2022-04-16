import {reqCategoryList, reqGetBannerList, reqGetFloorList} from '@/api';

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}

const mutations = {
    GETCATEGORY(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const actions = {
    async getCategoryList({commit}){
        let result = await reqCategoryList();
        //获取的categoryList 为 0 输出查看result之后，查看 result.data
        // console.log( result);
        if(result.code == 200){
            commit('GETCATEGORY',result.data);
        }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code == 200){
            commit("GETBANNERLIST",result.data);
        }
    },
    async getFloorList({commit}){
        let result =  await reqGetFloorList();
        if(result.code == 200 ){
            // console.log(result.data);
            commit("GETFLOORLIST",result.data);
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}
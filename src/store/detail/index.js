import {reqDetailList,reqAddOrUpdateShopCart} from "@/api";
const state={
    detailList:{}
};
const mutations = {
    GETDETAILLIST:(state,detaillist)=>{
        state.detailList = detaillist;
    }
};
const actions= {
    async getDetailList({commit},skuId){
        let result = await reqDetailList(skuId);
        if(result.code== 200){
            commit("GETDETAILLIST",result.data);
        }
    },
    async addShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
         console.log(result );
         console.log(skuId,skuNum);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
};


const getters = {
    categoryView(state){
        //计算属性注意:
        //情况1:detailList是一个空对象，空对象打点categoryView等于undefined，你把undefined给组件
        //情况2:当服务器的数据返回，detailList属性的属性值发生变化，重新计算（detailList）存储即为服务器的数据，
        //给组件给的也是服务器的数据
        return state.detailList.categoryVIew||{}
    },
    spuSaleAttrList(state){
        return state.detailList.spuSaleAttrList;
    },
    skuInfo(state){
       return state.detailList.skuInfo||{};
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}

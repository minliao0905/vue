<template>
    <TypeNav/>
    <ListContainer/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor-info="floor" />


</template>

<script>
import TypeNav from "@/components/TypeNav";
import Brand from "@/pages/Home/Brand";
import Like from "@/pages/Home/Like";
import ListContainer from "@/pages/Home/ListContainer";
import {mapState} from "vuex";
import Floor from "@/pages/Home/Floor";
export default {
  name: "home",
  data(){
    return {
      tit:"nonthig",
    }
  },
  components: {
    TypeNav,
    ListContainer,
    // Brand,
    Floor,
    // Like,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,

    })
  }
}

</script>

<style scoped>

</style>
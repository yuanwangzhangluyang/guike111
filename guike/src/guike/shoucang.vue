<template>
  <div>
    <mt-header title="我的收藏">
      <router-link to="/" slot="left">
      </router-link>
    </mt-header>
     <div class="shoucang" v-if="!list">
            <img src="../assets/mideng.png" alt="">
            <p>小主，您访问的页面暂无数据</p>
      <mt-button @click="btn_shoucang">收藏</mt-button>
      </div>
    <div v-else class="fangjian" v-for="(item,i) of list" :key="i">
      <img class="zhaopian" :src="url+item.img" alt />
      <div class="xiangxi">
        <h4>{{item.title}}</h4>
        <p class="xiangxi-1">{{item.address}}</p>
        <p class="fangjian-price">{{item.price}}元/月</p>
        <img :data-sid="item.hid" @click="del" src="../assets/detail/shoucang2.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      url:"http://118.190.162.12:4000/"
    };
  },
  created() {
    this.load();
  },
  methods: {
    btn_shoucang(){this.$router.push("/fangjianCell")},
    load() {
      this.axios.get("showcart").then(res => {
        this.list = res.data.result;
      });
    },
    del(event){
      var hid=event.target.dataset.sid;
      this.axios.get("del",{params:{
        hid
      }}).then(res=>{
        this.$toast("取消收藏成功");
        this.load()
      })
    }
  }
};
</script>
<style>
/* 头部 */
.mint-header {
  background-color: #f1a43a !important;
  font-size: 15px;
  height: 45px;
}
.shoucang {
  margin-top: 100px;
}
.shoucang p {
  font-size: 14px;
  color: #666;
  margin: 30px 0;
}
.mint-button--normal {
  padding: 0 90px;
}
.fangjian {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #e3e3e3;
  padding: 15px 12px;
}
.zhaopian {
  width: 46%;
  float: left;
  border-radius: 4%;
  margin-right: 12px;
}
.xiangxi {
  width: 47%;
  float: left;
  text-align: left;
}
.xiangxi h4 {
  font-size: 15px;
  color: #3a3a3a;
  line-height: 18px;
  margin: 0px;
}
.xiangxi-1 {
  font-size: 13px;
  color: #4a4a4a;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
}
.fangjian-price {
  font-size: 14px;
  font-weight: 700;
  color: #ed8117 !important;
  margin: 15px 0;
}
.xiangxi img {
  width: 20px;
  float: right;
  margin-top: -10%;
  margin-right: 10px;
}
</style>


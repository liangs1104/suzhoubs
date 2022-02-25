<template>
  <div class="header">
    <div class="logo" style="padding-left: 20px;">苏州银行 产业数据库</div>
    <div class="header-left">
      <div class="header-user-con">

        <div class="user-avator">
          <img :src="imgurl"/>
        </div>

        <el-select class="mr10" v-model="chainSelectedOptions" @change="handleChainChange">
          <el-option
              v-for="item in chainOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>

        <el-cascader
            class="mr10"
            size="large"
            :options="addrOptions"
            v-model="addrSelectedOptions"
            @change="handleAddrChange"
            placeholder="请选择地区"
        >
        </el-cascader>

        <el-input placeholder="请输入检索关键词" v-model="keyInput" @change="updateKeywords" class="mr10" style="width:300px;">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>

        <el-link class="mr10" :href="neo4jUrl" target="_blank">
          <el-button type="primary" icon="el-icon-share">知识图谱</el-button>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
import {provinceAndCityDataPlus, CodeToText} from "element-china-area-data";
import store from "../store"
import {mapState} from "vuex";

export default {
  name: "HomeHeader",
  data() {
    return {
      imgurl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      chainOptions: [
          {
        value: '生物医药',
        label: '生物医药'
      }, {
        value: '医疗器械',
        label: '医疗器械'
      }, {
        value: '集成电路',
        label: '集成电路'
      }],
      chainSelectedOptions: "生物医药",
      addrOptions: provinceAndCityDataPlus,
      addrSelectedOptions: [],
      keyInput: '',
      neo4jUrl: "http://139.224.233.19:7474/browser/"
    }
  },
  computed: {
    ...mapState(["chainname", "provincename","cityname","keywords"])
  },
  watch:{
    chainname(){
      this.$store.commit('initLOADING', true)
      this.$store.dispatch(
          'getEnterpriseList',
          {
            chainname: this.$store.state.chainname,
            provincename: this.$store.state.provincename,
            cityname: this.$store.state.cityname,
            keywords: this.$store.state.keywords
          }
      )
    },
    provincename(){
      this.$store.commit('initLOADING', true)
      this.$store.dispatch(
          'getEnterpriseList',
          {
            chainname: this.$store.state.chainname,
            provincename: this.$store.state.provincename,
            cityname: this.$store.state.cityname,
            keywords: this.$store.state.keywords
          }
      )
    },
    cityname(){
      this.$store.commit('initLOADING', true)
      this.$store.dispatch(
          'getEnterpriseList',
          {
            chainname: this.$store.state.chainname,
            provincename: this.$store.state.provincename,
            cityname: this.$store.state.cityname,
            keywords: this.$store.state.keywords
          }
      )
    },
    keywords(){
      this.$store.commit('initLOADING', true)
      this.$store.dispatch(
          'getEnterpriseList',
          {
            chainname: this.$store.state.chainname,
            provincename: this.$store.state.provincename,
            cityname: this.$store.state.cityname,
            keywords: this.$store.state.keywords
          }
      )
    },
  },
  methods: {
    handleChainChange(value) {
      store.state.chainname = value
      console.log("产业链选择:", store.state.chainname)
    },
    handleAddrChange(value) {
      store.state.provincename, store.state.cityname = "", ""
      if (value[0] !== "") {
        store.state.provincename = CodeToText[value[0]]
      }
      if (value[1] !== "" && value[1] !== undefined) {
        store.state.cityname = CodeToText[value[1]]
        if (CodeToText[value[1]] === "市辖区") {
          store.state.cityname = ""
        }
      }
      console.log("省 市:", store.state.provincename, store.state.cityname)

    },
    updateKeywords() {
      store.state.keywords = this.keyInput
      console.log("关键词:", store.state.keywords)
    },
  }
}
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}

.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}

.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.btn-bell .el-icon-bell {
  color: #fff;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.mr10 {
  margin-left: 10px;
}
</style>

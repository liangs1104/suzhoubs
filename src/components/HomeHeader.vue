<template>
  <div class="header">
    <div class="logo" style="    padding-left: 20px;">苏州银行 产业数据库</div>
    <div class="header-left">
      <div class="header-user-con">

        <div class="user-avator">
          <img :src="imgurl" />
        </div>

        <el-select style="margin-left: 20px;" v-model="chainSelectedOptions" placeholder="请选择">
          <el-option
              v-for="item in chainOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              @change="handleChainChange">
          </el-option>
        </el-select>

        <el-cascader
            style="margin-left: 20px;"
            size="large"
            :options="addrOptions"
            v-model="addrSelectedOptions"
            @change="handleAddrChange"
            placeholder="请选择地区"
        >
        </el-cascader>

        <el-input placeholder="请输入检索关键词" v-model="keyInput"  @change="updateKeywords" style="width:300px;margin-left: 20px">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>

        <el-link style="margin-left: 20px;" :href="neo4jUrl" target="_blank">
          <el-button type="primary" icon="el-icon-share">知识图谱</el-button>
        </el-link>
      </div>
    </div>
  </div>




<!--  <el-row>-->
<!--    <el-col :span="6">-->

<!--      <el-image style="height: 80px;width:80px;float: left"-->
<!--                :src="imgurl"></el-image>-->
<!--      <div style="padding-left: 100px;">-->

<!--        <el-select v-model="chainSelectedOptions" placeholder="请选择">-->
<!--          <el-option-->
<!--              v-for="item in chainOptions"-->
<!--              :key="item.value"-->
<!--              :label="item.label"-->
<!--              :value="item.value"-->
<!--              @change="handleChainChange">-->
<!--          </el-option>-->
<!--        </el-select>-->

<!--        <hr/>-->

<!--        <span style="font-size: 10px">产业数据库</span>-->

<!--      </div>-->
<!--    </el-col>-->
<!--    <el-col :span="12" style="float: left">-->

<!--      <el-col :span="6">-->
<!--        <el-cascader-->
<!--            size="large"-->
<!--            :options="addrOptions"-->
<!--            v-model="addrSelectedOptions"-->
<!--            @change="handleAddrChange"-->
<!--        >-->
<!--        </el-cascader>-->
<!--      </el-col>-->

<!--      <el-col :span="6">-->
<!--        <el-input placeholder="请输入检索关键词" v-model="keyInput"  @change="updateKeywords" style="width: 100%">-->
<!--          &lt;!&ndash;          <el-button slot="suffix" icon="el-icon-search"></el-button>&ndash;&gt;-->
<!--        </el-input>-->
<!--      </el-col>-->
<!--    </el-col>-->

<!--    <el-col :span="6">-->
<!--      <el-link :href="neo4jUrl" target="_blank">-->
<!--        <el-button type="primary" icon="el-icon-share">知识图谱</el-button>-->
<!--      </el-link>-->
<!--    </el-col>-->
<!--  </el-row>-->
</template>

<script>
import {provinceAndCityDataPlus, CodeToText} from "element-china-area-data";
import store from "../store"

export default {
  name: "HomeHeader",
  data() {
    return {
      imgurl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      chainOptions: [{
        value: '生物医药',
        label: '生物医药'
      }, {
        value: '医疗器械',
        label: '医疗器械'
      }, {
        value: '集成电路',
        label: '集成电路'
      }],
      chainSelectedOptions:"生物医药",
      addrOptions: provinceAndCityDataPlus,
      addrSelectedOptions: [],
      keyInput: '',
      neo4jUrl: "http://139.224.233.19:7474/browser/"
    }
  },
  mounted() {
  },
  methods: {
    handleChainChange(value) {
      console.log(value)
      store.state.chainname = value
      console.log("产业链选择:", store.state.chainname)
    },
    handleAddrChange(value) {
      store.state.provincename,store.state.cityname = "",""
      if (value[0] !== "") {
        store.state.provincename = CodeToText[value[0]]
      }
      if (value[1] !== "" && value[1] !== undefined) {
        store.state.cityname = CodeToText[value[1]]
        if(CodeToText[value[1]] === "市辖区"){
          store.state.cityname = ""
        }
      }

      console.log("省 市:", store.state.provincename, store.state.cityname)

    },
    updateKeywords() {
      store.state.keywords = this.keyInput
      console.log("关键词:",store.state.keywords)
    }
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
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
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
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>

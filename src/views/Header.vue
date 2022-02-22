<template>
  <el-row>
    <el-col :span="6">
      <el-image style="height: 80px;width:80px;float: left"
                :src="imgurl"></el-image>
      <div style="padding-left: 100px;">
        <el-select v-model="chainSelectedOptions" placeholder="请选择">
          <el-option
              v-for="item in chainOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              @change="handleChainChange">
          </el-option>
        </el-select>
        <hr/>
        <span style="font-size: 10px">产业数据库</span>
      </div>
    </el-col>
    <el-col :span="12" style="float: left">
      <el-col :span="6">
        <el-cascader
            size="large"
            :options="addrOptions"
            v-model="addrSelectedOptions"
            @change="handleAddrChange"
        >
        </el-cascader>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="请输入检索关键词" v-model="keyInput"  @change="updateKeywords" style="width: 100%">
          <!--          <el-button slot="suffix" icon="el-icon-search"></el-button>-->
        </el-input>
      </el-col>
    </el-col>
    <el-col :span="6">
      <el-link :href="neo4jUrl" target="_blank">
        <el-button type="primary" icon="el-icon-share">知识图谱</el-button>
      </el-link>
    </el-col>
  </el-row>
</template>

<script>
import {provinceAndCityDataPlus, CodeToText} from "element-china-area-data";
import {store} from "../store.js"

export default {
  name: "Header",
  data() {
    return {
      imgurl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      chainOptions: [{
        value: '生物医药',
        label: '生物医药'
      }, {
        value: '选项2',
        label: '---'
      }, {
        value: '选项3',
        label: '---'
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
      store.state.chainname = value
      console.log("产业链:", store.state.chainname)
    },
    handleAddrChange(value) {
      store.state.provincename, store.state.cityname = "", ""
      if (value[0] !== "") {
        store.state.provincename = CodeToText[value[0]]
      }
      if (value[1] !== "" && value[1] !== undefined) {
        store.state.cityname = CodeToText[value[1]]
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
<template>
  <div class="header">
    <div class="logo" style="padding-left: 20px;">苏州银行 产业数据库</div>
    <div class="header-left">
      <div class="header-user-con">

        <div v-if="$route.path.indexOf('home')!==-1" class="user-avator">
          <img :src="imgurl"/>
        </div>

        <el-select class="mr10" v-if="$route.path.indexOf('home')!==-1" v-model="chainSelectedOptions" @change="handleChainChange">
          <el-option
              v-for="item in chainOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>

        <el-cascader v-if="$route.path.indexOf('home')!==-1"
            class="mr10"
            size="large"
            :options="addrOptions"
            v-model="addrSelectedOptions"
            @change="handleAddrChange"
            placeholder="请选择地区"
        >
        </el-cascader>

        <el-input v-if="$route.path.indexOf('home')!==-1" placeholder="请输入检索关键词" v-model="keyInput" @change="handleKeywordsChange" class="mr10"
                  style="width:300px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>

        <el-link v-if="$route.path.indexOf('home')!==-1" class="mr10" :href="neo4jUrl" target="_blank">
          <el-button type="primary" icon="el-icon-share">知识图谱</el-button>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
import {CodeToText} from "element-china-area-data";
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
      addrOptions: [
        {"value": "", "label": "全部"},
        {
          "value": "310000",
          "label": "上海市",
        }, {
          "value": "320000",
          "label": "江苏省",
          "children": [{"value": "", "label": "全部"}, {"value": "320100", "label": "南京市"}, {
            "value": "320200",
            "label": "无锡市"
          }, {"value": "320300", "label": "徐州市"}, {"value": "320400", "label": "常州市"}, {
            "value": "320500",
            "label": "苏州市"
          }, {"value": "320600", "label": "南通市"}, {"value": "320700", "label": "连云港市"}, {
            "value": "320800",
            "label": "淮安市"
          }, {"value": "320900", "label": "盐城市"}, {"value": "321000", "label": "扬州市"}, {
            "value": "321100",
            "label": "镇江市"
          }, {"value": "321200", "label": "泰州市"}, {"value": "321300", "label": "宿迁市"}]
        }, {
          "value": "330000",
          "label": "浙江省",
          "children": [{"value": "", "label": "全部"}, {"value": "330100", "label": "杭州市"}, {
            "value": "330200",
            "label": "宁波市"
          }, {"value": "330300", "label": "温州市"}, {"value": "330400", "label": "嘉兴市"}, {
            "value": "330500",
            "label": "湖州市"
          }, {"value": "330600", "label": "绍兴市"}, {"value": "330700", "label": "金华市"}, {
            "value": "330800",
            "label": "衢州市"
          }, {"value": "330900", "label": "舟山市"}, {"value": "331000", "label": "台州市"}, {
            "value": "331100",
            "label": "丽水市"
          }]
        }, {
          "value": "340000",
          "label": "安徽省",
          "children": [{"value": "", "label": "全部"}, {"value": "340100", "label": "合肥市"}, {
            "value": "340200",
            "label": "芜湖市"
          }, {"value": "340300", "label": "蚌埠市"}, {"value": "340400", "label": "淮南市"}, {
            "value": "340500",
            "label": "马鞍山市"
          }, {"value": "340600", "label": "淮北市"}, {"value": "340700", "label": "铜陵市"}, {
            "value": "340800",
            "label": "安庆市"
          }, {"value": "341000", "label": "黄山市"}, {"value": "341100", "label": "滁州市"}, {
            "value": "341200",
            "label": "阜阳市"
          }, {"value": "341300", "label": "宿州市"}, {"value": "341500", "label": "六安市"}, {
            "value": "341600",
            "label": "亳州市"
          }, {"value": "341700", "label": "池州市"}, {"value": "341800", "label": "宣城市"}]
        }],
      addrSelectedOptions: ["310000"],
      keyInput: '',
      neo4jUrl: "http://139.224.233.19:7474/browser/"
    }
  },
  computed: {
    ...mapState(["chainname", "provincename", "cityname", "keywords"])
  },
  watch: {
    chainname() {
      this.getEnterpriseList()
    },
    provincename() {
      this.getEnterpriseList()
    },
    cityname() {
      this.getEnterpriseList()
    },
    keywords() {
      this.getEnterpriseList()
    },
  },
  methods: {
    handleChainChange(value) {
      this.$store.commit('Setchainname', value)
      console.log("产业链:", value)
    },
    handleAddrChange(value) {
      let provincename = ""
      let cityname = ""
      if (value[0] !== "") {
        provincename = CodeToText[value[0]]
      }
      if (value[1] !== "" && value[1] !== undefined) {
        cityname = CodeToText[value[1]]
        if (CodeToText[value[1]] === "市辖区") {
          cityname = ""
        }
      }
      this.$store.commit('Setprovincename', provincename)
      this.$store.commit('Setcityname', cityname)
      console.log("省 市:", provincename, cityname)
    },
    handleKeywordsChange() {
      this.$store.commit('Setkeywords', this.keyInput)
      console.log("关键词:", this.keyInput)
    },
    getEnterpriseList() {
      this.$store.commit('SetLOADING', true)
      this.$store.dispatch(
          'getEnterpriseList',
          {
            chainname: this.$store.state.chainname,
            provincename: this.$store.state.provincename,
            cityname: this.$store.state.cityname,
            keywords: this.$store.state.keywords
          }
      )
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

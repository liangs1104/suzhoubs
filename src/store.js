import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios');

export const store =  new Vuex.Store({
  state: {
    chainname: "生物医药",
    provincename: "上海市",
    cityname: "",
    keywords: "",
    enterpriseList:[],
    nodenames:["制药原材料","基础化工材料",
      "医用包材",
      "药用辅料",
      "大宗原料药","维生素类",
      "抗生素类",
      "解热镇痛类",
      "激素类",
      "原料药","特色原料药",
      "药用辅助药",
      "制药设备",
      "传统中药","中药材",
      "中药饮片",
      "中药","中成药",
      "化学药","原料药",
      "制剂","抗感染药",
      "心血管系统用药",
      "血液和造血系统用药",
      "抗肿瘤药",
      "神经系统用药",
      "呼吸系统用药",
      "消化系统用药",
      "免疫调节剂",
      "皮肤及五官科药物",
      "创新药",
      "保健品",
      "生物制药",
      "疫苗","一类疫苗",
      "二类疫苗",
      "诊断检测",
      "医药流通",
      "医疗废弃物处理",
      "医疗废水处理"],
    initAsideTableData:[
      {
        id: '制药原材料',
        nodename: '制药原材料',
        count: 0,
        children: [
          {
            id: '基础化工材料',
            nodename: '基础化工材料',
            count: 0,
          },
          {
            id: '医用包材',
            nodename: '医用包材',
            count: 0,
          },
          {
            id: '药用辅料',
            nodename: '药用辅料',
            count: 0,
          },
        ]
      },
      {
        id: 2,
        nodename: '大宗原料药',
        count: 0,
        children: [
          {
            id: 2 - 1,
            nodename: '维生素类',
            count: 0,
          },
          {
            id: 2 - 2,
            nodename: '抗生素类',
            count: 0,
          },
          {
            id: 2 - 3,
            nodename: '解热镇痛类',
            count: 0,
          },
          {
            id: 2 - 4,
            nodename: '激素类',
            count: 0,
          },
        ]
      },
      {
        id: 3,
        nodename: '原料药',
        count: 0,
        children: [
          {
            id: 3 - 1,
            nodename: '特色原料药',
            count: 0,
          },
          {
            id: 3 - 2,
            nodename: '药用辅助药',
            count: 0,
          }
        ]
      },
      {
        id: 4,
        nodename: '制药设备',
        count: 0
      },
      {
        id: 5,
        nodename: '传统中药',
        count: 0,
        children: [
          {
            id: 5 - 1,
            nodename: '中药材',
            count: 0,
          },
          {
            id: 5 - 2,
            nodename: '中药饮片',
            count: 0,
          }
        ]
      },
      {
        id: 6,
        nodename: '中药',
        count: 0,
        children: [
          {
            id: 6 - 1,
            nodename: '中成药',
            count: 0,
          }
        ]
      },
      {
        id: 7,
        nodename: '化学药',
        count: 0,
        children: [
          {
            id: 7 - 1,
            nodename: '原料药',
            count: 0,
          }
        ]
      },
      {
        id: 8,
        nodename: '制剂',
        count: 0,
        children: [
          {
            id: 8 - 1,
            nodename: '抗感染药',
            count: 0,
          },
          {
            id: 8 - 2,
            nodename: '心血管系统用药',
            count: 0,
          },
          {
            id: 8 - 3,
            nodename: '血液和造血系统用药',
            count: 0,
          },
          {
            id: 8 - 4,
            nodename: '抗肿瘤药',
            count: 0,
          },
          {
            id: 8 - 5,
            nodename: '神经系统用药',
            count: 0,
          },
          {
            id: 8 - 6,
            nodename: '呼吸系统用药',
            count: 0,
          },
          {
            id: 8 - 7,
            nodename: '消化系统用药',
            count: 0,
          },
          {
            id: 8 - 8,
            nodename: '免疫调节剂',
            count: 0,
          },
          {
            id: 8 - 9,
            nodename: '皮肤及五官科药物',
            count: 0,
          },
        ]
      },
      {
        id: 9,
        nodename: '创新药',
        count: 0
      },
      {
        id: 10,
        nodename: '保健品',
        count: 0
      },
      {
        id: 11,
        nodename: '生物制药',
        count: 0
      },
      {
        id: 12,
        nodename: '疫苗',
        count: 0,
        children: [
          {
            id: 12 - 1,
            nodename: '一类疫苗',
            count: 0,
          },
          {
            id: 12 - 2,
            nodename: '二类疫苗',
            count: 0,
          }
        ]
      },
      {
        id: 13,
        nodename: '诊断检测',
        count: 0
      },
      {
        id: 14,
        nodename: '医药流通',
        count: 0
      },
      {
        id: 15,
        nodename: '医疗废弃物处理',
        count: 0
      },
      {
        id: 16,
        nodename: '医疗废水处理',
        count: 0
      }
    ]
  },
  getters:{

  },
  mutations: {
  },
  //所有store中state的变更
  actions: {
    getEnterpriseList: () =>{
      axios({
        method: "get",
        url: "http://139.224.233.19:50000/biologicalmedicine/getEnterpriseList",
        params: {
          chainname: this.state.chainname,
          provincename: this.state.provincename,
          cityname: this.state.cityname,
          keywords: this.state.keywords
        }
      })
          .then(res => {
            this.state.enterpriseList = res.data
            this.getNodeCounts()
            console.log("enterpriseList:"+res.data[0])
          })
          .catch(error => console.log(error))
    },
    getNodeCounts:()=>{
      var nodeCounts = {}
      // eslint-disable-next-line no-unused-vars
      for(let enterprise in this.state.enterpriseList){
        // eslint-disable-next-line no-unused-vars
        var nodes =enterprise.nodes.trim().split(" ")
        // eslint-disable-next-line no-unused-vars
        for(let node in nodes){
          if(node!==""){
            nodeCounts[node]++;
          }
        }
      }
    }
  },
  modules: {
  }
})

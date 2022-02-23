import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        chainname: "生物医药",
        provincename: "上海市",
        cityname: "",
        keywords: "",
        enterpriseList: [{"Num":315,"capital":"274907.78125 ","capitalcurrency":"\u4eba\u6c11\u5e01 ","domicile":"\u4e0a\u6d77\u5e02\u957f\u5b81\u533a\u5ef6\u5b89\u897f\u8def1262\u53f7 ","enterprisename":"\u4e0a\u6d77\u751f\u7269\u5236\u54c1\u7814\u7a76\u6240\u6709\u9650\u8d23\u4efb\u516c\u53f8 ","establishdate":"1993-09-08T00:00:00.000+08:00 ","nodes":" \u4e8c\u7c7b\u75ab\u82d7 \u8bca\u65ad\u68c0\u6d4b \u4e00\u7c7b\u75ab\u82d7 \u6297\u611f\u67d3\u836f \u4e2d\u836f\u996e\u7247 \u5236\u836f\u8bbe\u5907 \u4e2d\u836f\u6750 \u836f\u7528\u8f85\u6599   \u751f\u7269\u5236\u836f \u514d\u75ab\u8c03\u8282\u5242 \u8840\u6db2\u548c\u9020\u8840\u7cfb\u7edf\u7528\u836f \u6297\u80bf\u7624\u836f \u539f\u6599\u836f \u57fa\u7840\u5316\u5de5\u6750\u6599  ","words":"\u5c3f\u9178\u9176 \u6297her3\u6297\u4f53 \u4eba\u9f20\u5d4c\u5408\u6297\u4f53 \u897f\u59a5\u6614\u5355\u6297 her3\u6297\u4f53 \u897f\u59a5\u6614 \u9175\u6bcd\u7ec6\u80de \u7a81\u53d8\u578b\u5c3f\u9178\u9176 peg\u4fee\u9970 \u534a\u80f1\u6c28\u9178\u6b8b\u57fa elution) peg\u5316\u7684\u5c3f\u9178\u9176 \u5c3f\u9178\u9176\u7684\u6d17\u8131\u6db2 \u4eba\u6e90\u5316\u6297\u4f53 \u6297her3\u4eba\u6e90\u5316\u5355\u514b\u9686\u6297\u4f53 \u6297her3\u4eba\u6e90\u5316\u6297\u4f53 \u6297\u4f53\u5236\u5242 her3\u6297\u539f \u7ec8\u6b62\u4fe1\u53f7\u5143\u4ef6aox(tt) \u75c5\u6bd2\u6837\u9897\u7c92 rankl-hbsag\u91cd\u7ec4\u86cb\u767d\u7f16\u7801\u5e8f\u5217 rankl-hbsag\u91cd\u7ec4\u86cb\u767d rankl-hbsag\u91cd\u7ec4\u86cb\u767d\u7684\u6784\u5efa\u7269 rankl-hbsag \u8868\u8fbe\u8f7d\u4f53 cdr2 cdr3 dna\u5206\u5b50 cdr1 \u6297\u7834\u4f24\u98ce\u7c7b\u6bd2\u7d20\u5355\u514b\u9686\u6297\u4f53 \u5bbf\u4e3b\u7ec6\u80de \u75ab\u82d7\u7ec4\u5408\u7269 \u8d77\u59cb\u4fe1\u53f7\u5143\u4ef6aox \u4eba\u8f6e\u72b6\u75c5\u6bd2\u7ed3\u6784\u86cb\u767d\u8868\u8fbe\u76d2 \u8f6e\u72b6\u75c5\u6bd2\u7c7b\u75c5\u6bd2\u9897\u7c92 \u8f6e\u72b6\u75c5\u6bd2\u7c7b\u8868\u8fbe\u9897\u7c92 \u8868\u8fbe\u8f6e\u72b6\u75c5\u6bd2\u7c7b\u8868\u8fbe\u9897\u7c92 \u6bd5\u8d64\u9175\u6bcd \u8f6e\u72b6\u75c5\u6bd2\u7ed3\u6784\u86cb\u767d\u57fa\u56e0 \u7c7b\u75c5\u6bd2\u9897\u7c92 \u5e72\u7ec6\u80de mirna-9 \u9006\u8f6c\u5f55\u75c5\u6bd2\u7cfb\u7edf \u4eba\u6210\u7ea4\u7ef4\u7ec6\u80de mirna\u7ec4\u5408 \u795e\u7ecf\u5143\u7ec6\u80de mirna-124 mirna-302/367\u7c07 \u6210\u7ea4\u7ef4\u7ec6\u80de \u6c34\u75d8\u75ab\u82d7\u51bb\u5e72\u5236\u5242 \u8c37\u6c28\u9178\u94a0 \u539f\u6db2 \u52a8\u7269\u6e90\u6027\u86cb\u767d \u75ab\u82d7\u7a33\u5b9a\u5242 \u65e0\u660e\u80f6\u6c34\u75d8\u75ab\u82d7\u51bb\u5e72\u5236\u5242 \u51bb\u5e72\u6210\u54c1 \u51bb\u5e72\u5236\u5242 \u6c34\u75d8\u75ab\u82d7\u539f\u6db2 \u6269\u589e\u6d41\u611f\u75c5\u6bd2 \u975e\u81f4\u7624\u6027mdck\u7ec6\u80de\u7cfb \u975e\u81f4\u7624\u6027\u7ec6\u80de\u7cfb \u4e9a\u514b\u9686\u7ec6\u80de\u7cfb \u6d41\u611f\u75c5\u6bd2 mdck-2b2 \u5de8\u578b\u7ec6\u80de \u6d41\u611f\u75c5\u6bd2\u51cf\u6bd2\u6d3b\u75ab\u82d7 \u6d41\u611f\u75c5\u6bd2\u7279\u5f02\u6027\u8840\u6e05\u6297\u4f53 \u7c98\u819c\u6297\u4f53 v1\u53d8\u5f02\u578b\u86cb\u767d \u8111\u819c\u708e\u7403\u83cc\u6297\u539f\u7ec4\u5408 fhbp \u8111\u819c\u708e\u7403\u83cc \u6297\u539f\u7ec4\u5408\u5236\u5907 nhba\u86cb\u767d v2\u53d8\u5f02\u578b\u86cb\u767d \u91cd\u7ec4\u7ed3\u6838\u75c5\u75ab\u82d7 \u7ed3\u6838\u6746\u83cc \u5361\u4ecb\u82d7 \u7ed3\u6838\u5206\u679d\u6746\u83cc \u7279\u5f02i\u578b\u7ec6\u80de\u514d\u75ab bcg \u6297egfr\u6297\u4f53 \u91cd\u7ec4\u80bf\u7624-\u777e\u4e38\u6297\u539fny-eso-1\u86cb\u767d\u8868\u8fbe\u7684\u8d28\u7c92 ny-eso-1\u91cd\u7ec4\u803b\u57a2\u5206\u679d\u6746\u83cc \u91cd\u7ec4\u803b\u57a2\u5206\u679d\u6746\u83cc \u03b2-\u534a\u4e73\u7cd6\u82f7\u9176\u7f16\u7801\u5e8f\u5217 \u03b2-\u534a\u4e73\u7cd6\u82f7\u9176\u4fe1\u53f7\u80bd\u7f16\u7801\u5e8f\u5217 ny-eso-1\u7f16\u7801\u5e8f\u5217 \u4eba\u51dd\u8840\u56e0\u5b50\u2177 \u809d\u7d20\u94a0 \u805a\u4e59\u4e8c\u9187\u6c89\u6dc0 \u6838\u9178\u5e8f\u5217 \u878d\u5408\u86cb\u767d \u805a\u4e59\u4e8c\u9187\u4fee\u9970\u7684glp-1\u884d\u751f\u7269 \u836f\u7528\u76d0 glp#1\u884d\u751f\u7269 \u805a\u4e59\u4e8c\u9187\u4fee\u9970  "}],
        nodeNames: ["制药原材料", "基础化工材料",
            "医用包材",
            "药用辅料",
            "大宗原料药", "维生素类",
            "抗生素类",
            "解热镇痛类",
            "激素类",
            "原料药", "特色原料药",
            "药用辅助药",
            "制药设备",
            "传统中药", "中药材",
            "中药饮片",
            "中药", "中成药",
            "化学药", "原料药",
            "制剂", "抗感染药",
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
            "疫苗", "一类疫苗",
            "二类疫苗",
            "诊断检测",
            "医药流通",
            "医疗废弃物处理",
            "医疗废水处理"],
        initAsideTableData: [
            {
                id: 10,
                nodeName: '制药原材料',
                count: 0,
                children: [
                    {
                        id: 11,
                        nodeName: '基础化工材料',
                        count: 0,
                    },
                    {
                        id: 12,
                        nodeName: '医用包材',
                        count: 0,
                    },
                    {
                        id: 13,
                        nodeName: '药用辅料',
                        count: 0,
                    },
                ]
            },
            {
                id: 20,
                nodeName: '大宗原料药',
                count: 0,
                children: [
                    {
                        id: 21,
                        nodeName: '维生素类',
                        count: 0,
                    },
                    {
                        id: 22,
                        nodeName: '抗生素类',
                        count: 0,
                    },
                    {
                        id: 23,
                        nodeName: '解热镇痛类',
                        count: 0,
                    },
                    {
                        id: 24,
                        nodeName: '激素类',
                        count: 0,
                    },
                ]
            },
            {
                id: 30,
                nodeName: '制药设备',
                count: 0
            },
            {
                id: 40,
                nodeName: '传统中药',
                count: 0,
                children: [
                    {
                        id: 41,
                        nodeName: '中药材',
                        count: 0,
                    },
                    {
                        id: 42,
                        nodeName: '中药饮片',
                        count: 0,
                    }
                ]
            },
            {
                id: 50,
                nodeName: '中药',
                count: 0,
                children: [
                    {
                        id: 51,
                        nodeName: '中成药',
                        count: 0,
                    }
                ]
            },
            {
                id: 60,
                nodeName: '化学药',
                count: 0,
                children: [
                    {
                        id: 61,
                        nodeName: '原料药',
                        count: 0,
                        children: [
                            {
                                id: 62,
                                nodeName: '特色原料药',
                                count: 0,
                            },
                            {
                                id: 63,
                                nodeName: '药用辅助药',
                                count: 0,
                            }
                        ]
                    }
                ]
            },
            {
                id: 70,
                nodeName: '制剂',
                count: 0,
                children: [
                    {
                        id: 71,
                        nodeName: '抗感染药',
                        count: 0,
                    },
                    {
                        id: 72,
                        nodeName: '心血管系统用药',
                        count: 0,
                    },
                    {
                        id: 73,
                        nodeName: '血液和造血系统用药',
                        count: 0,
                    },
                    {
                        id: 74,
                        nodeName: '抗肿瘤药',
                        count: 0,
                    },
                    {
                        id: 75,
                        nodeName: '神经系统用药',
                        count: 0,
                    },
                    {
                        id: 76,
                        nodeName: '呼吸系统用药',
                        count: 0,
                    },
                    {
                        id: 77,
                        nodeName: '消化系统用药',
                        count: 0,
                    },
                    {
                        id: 78,
                        nodeName: '免疫调节剂',
                        count: 0,
                    },
                    {
                        id: 79,
                        nodeName: '皮肤及五官科药物',
                        count: 0,
                    },
                ]
            },
            {
                id: 80,
                nodeName: '创新药',
                count: 0
            },
            {
                id: 90,
                nodeName: '保健品',
                count: 0
            },
            {
                id: 100,
                nodeName: '生物制药',
                count: 0
            },
            {
                id: 110,
                nodeName: '疫苗',
                count: 0,
                children: [
                    {
                        id: 111,
                        nodeName: '一类疫苗',
                        count: 0,
                    },
                    {
                        id: 112,
                        nodeName: '二类疫苗',
                        count: 0,
                    }
                ]
            },
            {
                id: 120,
                nodeName: '诊断检测',
                count: 0
            },
            {
                id: 130,
                nodeName: '医药流通',
                count: 0
            },
            {
                id: 140,
                nodeName: '医疗废弃物处理',
                count: 0
            },
            {
                id: 150,
                nodeName: '医疗废水处理',
                count: 0
            }
        ]
    },
    getters: {
        getNodeCounts: () => {
            var nodeCounts = {}
            // eslint-disable-next-line no-unused-vars
            for (let enterprise in this.state.enterpriseList) {
                // eslint-disable-next-line no-unused-vars
                var nodes = enterprise.nodes.trim().split(" ")
                // eslint-disable-next-line no-unused-vars
                for (let node in nodes) {
                    if (node !== "") {
                        nodeCounts[node]++;
                    }
                }
            }
        }
    },
    mutations: {
        mSetChainname (state,newChainname){
            state.chainname = newChainname
        },
        mSetProvincename (state,newProvincename){
            state.provincename = newProvincename
        },
        mSetCityname (state,newCityname){
            state.cityname = newCityname
        },
        mSetkeywords (state,newkeywords){
            state.keywords = newkeywords
        },
        initEnterpriseList(state, data) {
            state.enterpriseList = data
        }
    },
    actions: {
        getEnterpriseList: (state,params) => {
            axios({
                method: "get",
                url: "http://139.224.233.19:50000/biologicalmedicine/getEnterpriseList",
                params:params,
                timeout:120000
            })
                .then(res => {
                    console.log("params:",params)
                    state.commit('initEnterpriseList', res.data)
                })
                .catch(error => console.log(error))
        },
    },
    modules: {

    }
})
export default store
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

axios.defaults.baseURL = "http://139.224.233.19:50000"
axios.defaults.timeout = 120000

const store = new Vuex.Store({
    state: {
        chainname: "生物医药",
        provincename: "天津市",
        cityname: "",
        keywords: "",
        enterpriseList: [{}],
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
        industryChain: {
            "生物医药":
                [
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
                        count: 0,
                        children: []
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
                        count: 0,
                        children: []
                    },
                    {
                        id: 90,
                        nodeName: '保健品',
                        count: 0,
                        children: []
                    },
                    {
                        id: 100,
                        nodeName: '生物制药',
                        count: 0,
                        children: []
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
                                children: []
                            },
                            {
                                id: 112,
                                nodeName: '二类疫苗',
                                count: 0,
                                children: []
                            }
                        ]
                    },
                    {
                        id: 120,
                        nodeName: '诊断检测',
                        count: 0,
                        children: []
                    },
                    {
                        id: 130,
                        nodeName: '医药流通',
                        count: 0,
                        children: []
                    },
                    {
                        id: 140,
                        nodeName: '医疗废弃物处理',
                        count: 0,
                        children: []
                    },
                    {
                        id: 150,
                        nodeName: '医疗废水处理',
                        count: 0,
                        children: []
                    }
                ],
            "医疗器械":
                [
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
                        count: 0,
                        children: []
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
                        count: 0,
                        children: []
                    },
                    {
                        id: 90,
                        nodeName: '保健品',
                        count: 0,
                        children: []
                    },
                    {
                        id: 100,
                        nodeName: '生物制药',
                        count: 0,
                        children: []
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
                                children: []
                            },
                            {
                                id: 112,
                                nodeName: '二类疫苗',
                                count: 0,
                                children: []
                            }
                        ]
                    },
                    {
                        id: 120,
                        nodeName: '诊断检测',
                        count: 0,
                        children: []
                    },
                    {
                        id: 130,
                        nodeName: '医药流通',
                        count: 0,
                        children: []
                    },
                    {
                        id: 140,
                        nodeName: '医疗废弃物处理',
                        count: 0,
                        children: []
                    },
                    {
                        id: 150,
                        nodeName: '医疗废水处理',
                        count: 0,
                        children: []
                    }
                ],
            "集成电路":
                [
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
                        count: 0,
                        children: []
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
                        count: 0,
                        children: []
                    },
                    {
                        id: 90,
                        nodeName: '保健品',
                        count: 0,
                        children: []
                    },
                    {
                        id: 100,
                        nodeName: '生物制药',
                        count: 0,
                        children: []
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
                                children: []
                            },
                            {
                                id: 112,
                                nodeName: '二类疫苗',
                                count: 0,
                                children: []
                            }
                        ]
                    },
                    {
                        id: 120,
                        nodeName: '诊断检测',
                        count: 0,
                        children: []
                    },
                    {
                        id: 130,
                        nodeName: '医药流通',
                        count: 0,
                        children: []
                    },
                    {
                        id: 140,
                        nodeName: '医疗废弃物处理',
                        count: 0,
                        children: []
                    },
                    {
                        id: 150,
                        nodeName: '医疗废水处理',
                        count: 0,
                        children: []
                    }
                ]
        },
        LOADING: true
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
        mSetChainname(state, newChainname) {
            state.chainname = newChainname
        },
        mSetProvincename(state, newProvincename) {
            state.provincename = newProvincename
        },
        mSetCityname(state, newCityname) {
            state.cityname = newCityname
        },
        mSetkeywords(state, newkeywords) {
            state.keywords = newkeywords
        },
        initEnterpriseList(state, data) {
            state.enterpriseList = data
        },
        initLOADING(state, data) {
            state.LOADING = data
        }
    },
    actions: {
        getEnterpriseList: (state, params) => {
            axios({
                method: "get",
                url: "../../biologicalmedicine/getEnterpriseList",
                params: params,
                timeout: 120000
            })
                .then(res => {
                    console.log("params:", params)
                    state.commit('initEnterpriseList', res.data)

                    // var preTableData = res.data
                    // console.log('preTableData:', preTableData)
                    //
                    // for (let i in preTableData) {
                    //
                    //     preTableData[i].words = preTableData[i].words.trim().split(/[ ]+/).slice(0, 3).join(" ")
                    //
                    //     preTableData[i].capital = parseFloat(preTableData[i].capital).toFixed(2) + " "+preTableData[i].capitalcurrency
                    //
                    //     preTableData[i].establishdate = preTableData[i].establishdate.slice(0,10)
                    //
                    // }
                    //
                    // // state.commit('initLOADING', false)
                    // return preTableData
                })
                .catch(error => console.log(error))
        },
    },
    modules: {}
})
export default store
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import utils from '../utils'
Vue.use(Vuex)

axios.defaults.baseURL = "http://139.224.233.19:50000"
axios.defaults.timeout = 120000

const store = new Vuex.Store({
    state: {
        chainname: "生物医药",
        provincename: "上海市",
        cityname: "",
        keywords: "",
        nodenames:[],
        enterpriseList: [{}],
        industryChain: {
            "生物医药":
                [
                    {
                        id: '1',
                        nodeName: '制药原材料',
                        count: 0,
                        children: [
                            {
                                id: '1-1',
                                nodeName: '基础化工材料',
                                count: 0,
                            },
                            {
                                id: '1-2',
                                nodeName: '医用包材',
                                count: 0,
                            },
                            {
                                id: '1-3',
                                nodeName: '药用辅料',
                                count: 0,
                            },
                        ]
                    },
                    {
                        id: '2',
                        nodeName: '大宗原料药',
                        count: 0,
                        children: [
                            {
                                id: '2-1',
                                nodeName: '维生素类',
                                count: 0,
                            },
                            {
                                id: '2-2',
                                nodeName: '抗生素类',
                                count: 0,
                            },
                            {
                                id: '2-3',
                                nodeName: '解热镇痛类',
                                count: 0,
                            },
                            {
                                id: '2-4',
                                nodeName: '激素类',
                                count: 0,
                            },
                        ]
                    },
                    {
                        id: '3',
                        nodeName: '制药设备',
                        count: 0,
                        children: []
                    },
                    {
                        id: '4',
                        nodeName: '传统中药',
                        count: 0,
                        children: [
                            {
                                id: '4-1',
                                nodeName: '中药材',
                                count: 0,
                            },
                            {
                                id: '4-2',
                                nodeName: '中药饮片',
                                count: 0,
                            }
                        ]
                    },
                    {
                        id: '5',
                        nodeName: '中药',
                        count: 0,
                        children: [
                            {
                                id: '5-1',
                                nodeName: '中成药',
                                count: 0,
                            }
                        ]
                    },
                    {
                        id: '6',
                        nodeName: '化学药',
                        count: 0,
                        children: [
                            {
                                id: '6-1',
                                nodeName: '原料药',
                                count: 0,
                                children: [
                                    {
                                        id: '6-1-1',
                                        nodeName: '特色原料药',
                                        count: 0,
                                    },
                                    {
                                        id: '6-1-2',
                                        nodeName: '药用辅助药',
                                        count: 0,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '7',
                        nodeName: '制剂',
                        count: 0,
                        children: [
                            {
                                id: '7-1',
                                nodeName: '抗感染药',
                                count: 0,
                            },
                            {
                                id: '7-2',
                                nodeName: '心血管系统用药',
                                count: 0,
                            },
                            {
                                id: '7-3',
                                nodeName: '血液和造血系统用药',
                                count: 0,
                            },
                            {
                                id: '7-4',
                                nodeName: '抗肿瘤药',
                                count: 0,
                            },
                            {
                                id: '7-5',
                                nodeName: '神经系统用药',
                                count: 0,
                            },
                            {
                                id: '7-6',
                                nodeName: '呼吸系统用药',
                                count: 0,
                            },
                            {
                                id: '7-7',
                                nodeName: '消化系统用药',
                                count: 0,
                            },
                            {
                                id: '7-8',
                                nodeName: '免疫调节剂',
                                count: 0,
                            },
                            {
                                id: '7-9',
                                nodeName: '皮肤及五官科药物',
                                count: 0,
                            },
                        ]
                    },
                    {
                        id: '8',
                        nodeName: '创新药',
                        count: 0,
                        children: []
                    },
                    {
                        id: '9',
                        nodeName: '保健品',
                        count: 0,
                        children: []
                    },
                    {
                        id: '10',
                        nodeName: '生物制药',
                        count: 0,
                        children: []
                    },
                    {
                        id: '11',
                        nodeName: '疫苗',
                        count: 0,
                        children: [
                            {
                                id: '11-1',
                                nodeName: '一类疫苗',
                                count: 0,
                                children: []
                            },
                            {
                                id: '11-2',
                                nodeName: '二类疫苗',
                                count: 0,
                                children: []
                            }
                        ]
                    },
                    {
                        id: '12',
                        nodeName: '诊断检测',
                        count: 0,
                        children: []
                    },
                    {
                        id: '13',
                        nodeName: '医药流通',
                        count: 0,
                        children: []
                    },
                    {
                        id: '14',
                        nodeName: '医疗废弃物处理',
                        count: 0,
                        children: []
                    },
                    {
                        id: '15',
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
        LOADING: true,
        limitLength:100//文本长度限制
    },
    getters: {},
    mutations: {
        Setchainname(state, newChainname) {
            state.chainname = newChainname
        },
        Setprovincename(state, newProvincename) {
            state.provincename = newProvincename
        },
        Setcityname(state, newCityname) {
            state.cityname = newCityname
        },
        Setkeywords(state, newkeywords) {
            state.keywords = newkeywords
        },
        Setnodenames(state,data){
            state.nodenames = data
        },
        SetenterpriseList(state, data) {
            state.enterpriseList = data
        },
        SetLOADING(state, data) {
            state.LOADING = data
        },

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
                    res.data.sort(utils.compare('Num',null));
                    // console.log("enterpriseList:",res.data)
                    state.commit('SetenterpriseList', res.data)
                })
                .catch(error => console.log(error))
        },
    },
    modules: {}
})
export default store
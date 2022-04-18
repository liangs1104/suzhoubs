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
                        id: '1',
                        nodeName: '放射治疗、核医学和放射剂量学',
                        count: 0
                    },
                    {
                        id: '2',
                        nodeName: '呼吸麻醉设备及装置',
                        count: 0
                    },
                    {
                        id: '3',
                        nodeName: '患者承载设备',
                        count: 0
                    },
                    {
                        id: '4',
                        nodeName: '计划生育器械',
                        count: 0
                    },
                    {
                        id: '5',
                        nodeName: '手术、治疗电子仪器',
                        count: 0
                    },
                    {
                        id: '6',
                        nodeName: '输液、输血、采血、引流器械',
                        count: 0
                    },
                    {
                        id: '7',
                        nodeName: '外科植入物',
                        count: 0
                    },
                    {
                        id: '8',
                        nodeName: '卫生材料',
                        count: 0
                    },
                    {
                        id: '9',
                        nodeName: '医用x射线设备及用具',
                        count: 0
                    },
                    {
                        id: '10',
                        nodeName: '医用超声设备',
                        count: 0
                    },
                    {
                        id: '11',
                        nodeName: '医用光学和仪器',
                        count: 0
                    },
                    {
                        id: '12',
                        nodeName: '医用生物防护',
                        count: 0
                    },
                    {
                        id: '13',
                        nodeName: '医用体外循坏设备及装置',
                        count: 0
                    },
                    {
                        id: '14',
                        nodeName: '医用血管内导管及非血管内导管',
                        count: 0
                    },
                    {
                        id: '15',
                        nodeName: '诊断电子仪器',
                        count: 0
                    },
                    {
                        id:'16',
                        nodeName: '注射器（针）、穿刺器械',
                        count:0
                    }
                ],
            "集成电路":
                [
                    {
                        id: '1',
                        nodeName: 'EDA电子设计自动化',
                        count: 0
                    },
                    {
                        id: '2',
                        nodeName: '半导体制造材料',
                        count: 0
                    },
                    {
                        id: '3',
                        nodeName: '湿电子化学品',
                        count: 0
                    },
                    {
                        id: '4',
                        nodeName: '半导体设备',
                        count: 0
                    },
                    {
                        id: '5',
                        nodeName: '芯片制造',
                        count: 0
                    },
                    {
                        id: '6',
                        nodeName: '芯片封装',
                        count: 0
                    },
                    {
                        id: '7',
                        nodeName: '通讯芯片',
                        count: 0
                    },
                    {
                        id: '8',
                        nodeName: '计算及控制芯片',
                        count: 0
                    },
                    {
                        id: '9',
                        nodeName: '存储器芯片',
                        count: 0
                    },
                    {
                        id: '10',
                        nodeName: '音视频处理芯片',
                        count: 0
                    },
                    {
                        id: '11',
                        nodeName: '电源管理芯片',
                        count: 0
                    },
                    {
                        id: '12',
                        nodeName: '驱动芯片',
                        count: 0
                    },
                    {
                        id: '13',
                        nodeName: '传感器芯片',
                        count: 0
                    },
                    {
                        id: '14',
                        nodeName: '其他芯片',
                        count: 0
                    },
                    {
                        id: '15',
                        nodeName: '电子元器件',
                        count: 0
                    }
                ]
        },
        chainnameUrl:{
            "生物医药":"../../biologicalmedicine",
            "医疗器械":"../../medicainstruments",
            "集成电路":"../../integratedcircuit"
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
                url: store.state.chainnameUrl[params.chainname]+"/getEnterpriseList",
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
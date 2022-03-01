import store from './store'
/**
 * 关键词个数限制
 * @param {string} data 需要处理的关键词
 * @param {int} limit 关键词限制个数
 * @return {string}
 */
function limitNum(data, limit) {
    try {
        data = data.trim().split(/[ ]+/)
        if ((store.state.keywords !== '' && data.join(",").indexOf(store.state.keywords) !== -1) || store.state.nodenames.length){
            let temp = []
            if(store.state.keywords !== '' && data.join(",").indexOf(store.state.keywords) !== -1){
                data = data.filter(item => {
                    if(item.indexOf(store.state.keywords) !== -1){
                        temp.push(item)
                        return false
                    }
                    return true
                })
            }
            if(store.state.nodenames.length) {
                data = data.filter(item => {
                    let nodenames = store.state.nodenames
                    for (let i in nodenames) {
                        if (item.indexOf(nodenames[i]) > -1) {
                            temp.push(item)
                            return false
                        }
                    }
                    return true
                })
            }
            data = temp.concat(data)
        }

        if (data.length > limit) {
            data = data.slice(0, limit).join(", ") + ", ..."
        } else {
            data = data.join(", ")
        }
        // while (data.length > 100) {
        //     data = data.slice(0, limit - 1).join(", ") + ", ..."
        //     limit = -1
        // }
        if (data === "null" || data === "" || data == null) {
            data = "无"
        }
        return data
    } catch (err) {
        console.log(err)
        console.log(data)
    }
}
/**
 * 排序比较
 * @param {string} propertyName 排序的属性名
 * @param {string} sort ascending(升序)/descending(降序)
 * @return {function}
 */
function compare (propertyName, sort) {
    if(!sort){
        propertyName = 'Num'
    }
    return function (obj1, obj2) {
        var value1 = obj1[propertyName]
        var value2 = obj2[propertyName]
        if (typeof value1 === 'string' && typeof value2 === 'string') {
            if(propertyName === 'capital'){
                if (parseInt(value1) <= parseInt(value2)) {
                    return sort === 'ascending' ? -1 : 1
                } else if (parseInt(value1) > parseInt(value2)) {
                    return sort === 'ascending' ? 1 : -1
                }
            }
            const res = value1.localeCompare(value2, 'zh')
            return sort === 'ascending' ? res : -res
        } else {
            if (value1 <= value2) {
                return sort === 'ascending' ? -1 : 1
            } else if (value1 > value2) {
                return sort === 'ascending' ? 1 : -1
            }
        }
    }
}

export default {
    limitNum,
    compare
}
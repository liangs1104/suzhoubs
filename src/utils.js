function limitNum(data,limit){
    data = data.trim().split(/[ ]+/)
    if (data.length > limit) {
        data = data.slice(0, limit).join(", ") + ", ..."
    }else {
        data = data.join(", ")
    }
    return data
}

export default{
    limitNum
}
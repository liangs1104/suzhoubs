function limitNum(data,limit){
    try{
        data = data.trim().split(/[ ]+/)
        if (data.length > limit) {
            data = data.slice(0, limit).join(", ") + ", ..."
        }else {
            data = data.join(", ")
        }
        return data
    }
    catch(err){
        console.log(err)
        console.log(data)
    }
}

export default{
    limitNum
}

const axios  = require("axios")

const sum =(num1,num2)=>{
    return num1+num2
}

const average =(arr)=>{
    return arr.reduce((a,c)=>a+c,0)/arr.length
}

const createUser = (name,age,place)=>{
    return{name,age,place}
}

const unionArr = (arr1,arr2)=>{
    let obj = {}
    arr1.forEach(ele=>obj[ele] = ele)
    arr2.forEach(ele=>obj[ele] = ele)
    console.log(obj)
    return Object.values(obj)
}

const apiUser = ()=>{
    return axios.get("https://reqres.in/api/users/3")
            .then(data=>data.data.data)
            .catch(err=>console.log(err))

}
apiUser()
module.exports = {
    sum,average,createUser,unionArr,apiUser
}
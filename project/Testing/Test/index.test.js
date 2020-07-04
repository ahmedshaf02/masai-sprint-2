
// const {sum,average,createUser,unionArr,apiUser} = require("./index")

// describe("test cases for sum function", () => {
//     test('should exists sum function', () => {
//         expect(sum).toBeDefined()
//     })
//     test('sum of 10 and 10 should be 20', () => {
//         expect(sum(10,40)).toBe(50)
//     })
// })

// describe('test cases for average fucntion', () => {
//     test('should average exists', () => {
//         expect(average).toBeDefined()
//     })

//     test('arr [1,2,3,4,5] average should be 3', () => {
//         expect(average([1,2,3,4,5])).toBe(3)
//     })
// })

// describe('createUser test cases', () => {
//     test('should createUser exists', () => {
//         expect(createUser).toBeDefined()
//     })
//     test('should createUser {name:shaf,age:26,place:mumbai}', () => {
//         let name = "shaf", age = 26, place = "mumbai"
//         let obj = {name,age,place}
//         expect(createUser(name,age,place)).toEqual(obj)
//     })
    
// })

// describe('<= test cases', () => {
//     let m = 100,n = 200
//     test('should 100+200 <=300', () => {
//         expect(m+n).toBeLessThanOrEqual(400)
//     })
    
// })
// describe('>= test cases', () => {
//     let m = 100,n = 200
//     test('should 100+200 >=100', () => {
//         expect(m+n).toBeGreaterThanOrEqual(100)
//     })
    
// })
// describe('array contains', () => {
//     test('should check if array contains masai', () => {
//         let name = ["masai","school","admin"]
//         expect(name).toContain("masai")
//     })
    
// })
// describe('union array test cases', () => {
//     test('should be exists', () => {
//         expect(unionArr).toBeDefined()
//     })
//     test('should return [1,2,3] and [3,4,5] union is [1,2,3,4,5]', async () => {
//         let arr1 = [1,2,3]
//         let arr2 = [3,4,5]
//         let arr3 = [1,2,3,4,5]
//         expect(unionArr(arr1,arr2)).toEqual(arr3)
//     })
//     test('should return [1,1,1] and [3,3,3] union is [1,3]', async () => {
//         let arr1 = [1,1,1]
//         let arr2 = [3,3,3]
//         let arr3 = [1,3]
//         expect(unionArr(arr1,arr2)).toEqual(arr3)
//     })
//     test('should return [] and [] union is []', async () => {
//         let arr1 = []
//         let arr2 = []
//         let arr3 = []
//         expect(unionArr(arr1,arr2)).toEqual(arr3)
//     })
//     test('should return [1,2,2] and [] union is [1,2]', async () => {
//         let arr1 = [1,2,2]
//         let arr2 = []
//         let arr3 = [1,2]
//         expect(unionArr(arr1,arr2)).toEqual(arr3)
//     })
    
// })

// describe('newtwork request, apiUser', () => {
//     test('async test 1', () => {
//         return apiUser().then(data=>{
//             expect(data.first_name).toBe("Emma")
//         })
//     })
    
//     test('async test 2', async () => {
//         const data = await apiUser()
//         expect(data.first_name).toBe("Emma")
        
//     })
    
// })






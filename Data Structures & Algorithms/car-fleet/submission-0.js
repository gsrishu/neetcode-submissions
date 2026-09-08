class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const groupArray = new Array()
        const result = new Array()
        for(let i = 0; i < position.length; i++){
            groupArray.push([position[i],speed[i]])
        }
        groupArray.sort((a,b)=> a[0] - b[0])
        for(let i = groupArray.length -1; i >= 0; i--){
             // console.log(groupArray[i])
            const [p,s] = groupArray[i]
            let remainingDistance = (target - p) / s
           // console.log(remainingDistance,"==")
            if(result.length == 0 || remainingDistance > result[result.length-1]) result.push(remainingDistance)
        }
        //console.log(result)
        return result.length
    }
}

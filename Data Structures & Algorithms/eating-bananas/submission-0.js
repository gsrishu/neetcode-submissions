class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let r = Math.max(...piles)
        let l = 1
        let res = Infinity
        while( l <= r){
            let mid = Math.floor((l+r)/2)
            let temp = 0
            for(let i = 0; i < piles.length;i++){
                temp += Math.ceil(piles[i]/ mid)
            }
            if(temp <= h){
                res = Math.min(res,mid)
                r = mid - 1;
            } else l = mid + 1

        }
        return res
    }
}

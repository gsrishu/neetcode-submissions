class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
       if(this.keyStore.has(key))  this.keyStore.get(key).push([value,timestamp])
       else this.keyStore.set(key,[[value,timestamp]])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let k = this.keyStore.get(key)
        if(!k) return ""
       // k.sort((a,b)=>a[1]-b[1])
        let l = 0, r = k.length - 1 
        let res = ""
        while(l <= r){
            let mid = Math.floor((l+r)/2)
            if(k[mid][1] <= timestamp){
                res = k[mid][0]
                l = mid + 1
            }else  r = mid - 1
            
        }
        return res
    }
}

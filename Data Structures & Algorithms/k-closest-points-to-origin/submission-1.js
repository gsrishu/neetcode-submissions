class MinHeap{
    constructor(){
        this.heap = new Array()
    }
    push(val,points){
        this.heap.push([val,points])
        let idx = this.heap.length - 1
        while(idx > 0){
            let parent = Math.floor((idx-1)/2)
            if(this.heap[parent][0] > this.heap[idx][0] ){
                [this.heap[parent],this.heap[idx]] = [this.heap[idx],this.heap[parent]]
                idx = parent
            }else break
        }
    }
    pop(){
        const res = this.heap[0]
        console.log("===>",res)
        const last = this.heap.pop()
        let n = this.heap.length
        if(n > 0){
            this.heap[0] = last
            let idx = 0
            while(true){
                let smallest = idx
                let left = idx * 2 + 1
                let right = idx * 2 + 2
                if(left < n && this.heap[left][0] < this.heap[smallest][0]) smallest = left
                if(right < n && this.heap[right][0] < this.heap[smallest][0]) smallest = right
                if(idx == smallest) break
                [this.heap[idx],this.heap[smallest]] = [this.heap[smallest],this.heap[idx]]
                idx = smallest
            }
        }
        return res
    }
    size(){
        return this.heap.length
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        if(points.length == 0) return []
        const obj = new MinHeap()
        for(const [i,j] of points){
             console.log("===>[i,j]",[i,j])
            let temp = Math.sqrt((i*i) + (j*j))
             console.log("===>[temp",temp,[i,j])
            obj.push(temp,[i,j])
        }
        let result = new Array()
        for(let i = 0; i < k; i++){
            let [distance,points] = obj.pop()
            console.log([distance,points])
            result.push(points)
        }
        return result

    }
}

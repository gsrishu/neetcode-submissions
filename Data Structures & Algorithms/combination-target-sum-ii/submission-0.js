class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = new Array();
        const temp = new Array();
        candidates = candidates.sort()
        function getComb(i, rn) {
            if (rn == 0) {
                result.push([...temp]);
                return;
            }
            if (i === candidates.length) return;

            if (candidates[i] > rn) {
                getComb(i + 1, rn);
                return;
            }
            temp.push(candidates[i]);
            getComb(i + 1, rn - candidates[i]);
            temp.pop(candidates[i]);
            let idx = i + 1
            while(idx < candidates.length && candidates[idx] == candidates[i]) idx++
            getComb(idx, rn);
        }

        getComb(0, target);
        return result;
    }
}

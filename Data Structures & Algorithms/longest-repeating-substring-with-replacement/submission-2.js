class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length == 1) return 1;

        let l = 0,
            r = 0;
        let maxCount = 0
        const map = new Map();
        let result = 0;
        while (r < s.length) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            maxCount = Math.max(maxCount,map.get(s[r]))
            let isValid = (r - l + 1) - maxCount <= k 
            while (!isValid) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
                isValid = (r - l + 1) - maxCount <= k 
            }

            result = Math.max(result, r - l + 1);
            r++;
        }

        return result;
    }
    
}

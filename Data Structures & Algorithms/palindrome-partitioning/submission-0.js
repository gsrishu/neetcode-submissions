class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        function isPalindron(str) {
            if (str.length == 0) return false;
            if (str.length == 1) return true;
            let j = str.length - 1;
            let i = 0;
            while (i < j) {
                if (str[i] != str[j]) return false;
                i++;
                j--;
            }
            return true;
        }
        const len = s.length;
        const res = new Array();
        const temp = new Array();
        function check(index) {
            if(index == len){
                res.push([...temp])
                return 
            }
            for(let i = index; i < s.length; i++){
                let substring = s.substring(index, i+1);
                 if(isPalindron(substring)){
                    temp.push(substring)
                    check(i+1)
                    temp.pop()
                 }

            }
        }
        check(0);
        console.log(res);
        return res;
    }
}

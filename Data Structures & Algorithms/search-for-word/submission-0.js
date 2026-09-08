class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const n = board.length;
        const m = board[0].length;
        function check(i, j, w) {
            if (w == word.length) return true;
            if (i < 0 || i >= n || j < 0 || j >= m) return false;

            if (board[i][j] != word[w]) return false;

            let original = board[i][j];
            board[i][j] = ".";

            let found =
                check(i + 1, j, w + 1) ||
                check(i - 1, j, w + 1) ||
                check(i, j + 1, w + 1) ||
                check(i, j - 1, w + 1);

            board[i][j] = original;
            return found;
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                const res = check(i, j, 0);
                if (res == true) return true;
            }
        }
        return false;
    }
}

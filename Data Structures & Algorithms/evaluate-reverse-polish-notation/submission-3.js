class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = new Array();

        for (const t of tokens) {
            if (t == "+") {
                const second = Number(stack.pop());
                const first = Number(stack.pop());
                stack.push(first + second);
            } else if (t == "-") {
                const second = Number(stack.pop());
                const first = Number(stack.pop());
                stack.push(first - second);
            } else if (t == "*") {
                const second = Number(stack.pop());
                const first = Number(stack.pop());
                stack.push(first * second);
            } else if (t == "/") {
                const second = Number(stack.pop());
                const first = Number(stack.pop());
                stack.push(Math.trunc(first / second));
            } else {
                stack.push(t);
            }
        }

        return stack.pop();
    }
}

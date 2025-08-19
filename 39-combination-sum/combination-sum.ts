function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
 
    candidates.sort((a, b) => a - b);
    
    function backtrack(start: number, target: number, current: number[]) {
        if (target === 0) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > target) {
                break;
            }
            current.push(candidates[i]);
            backtrack(i, target - candidates[i], current);
            current.pop();
        }
    }
    
    backtrack(0, target, []);
    return result;
}
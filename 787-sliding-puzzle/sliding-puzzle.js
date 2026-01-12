/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const target = "123450"; 
    const start = board.flat().join(""); 
    const neighbors = [
        [1,3], 
        [0,2,4], 
        [1,5],  
        [0,4],
        [1,3,5],  
        [2,4]   
    ];
    
    const queue = [[start, 0]]; 
    const visited = new Set();
    visited.add(start);
    
    while (queue.length > 0) {
        const [curr, steps] = queue.shift();
        if (curr === target) return steps;
        
        const zeroIndex = curr.indexOf("0");
        
        for (const nei of neighbors[zeroIndex]) {
            const newStateArr = curr.split("");
            [newStateArr[zeroIndex], newStateArr[nei]] = [newStateArr[nei], newStateArr[zeroIndex]];
            const newState = newStateArr.join("");
            
            if (!visited.has(newState)) {
                visited.add(newState);
                queue.push([newState, steps + 1]);
            }
        }
    }
    
    return -1;
};

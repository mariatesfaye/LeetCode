function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const m = mat.length;
    const n = mat[0].length;

    if (m * n !== r * c) return mat;

    const flat: number[] = [];
    for (let row of mat) {
        flat.push(...row);
    }

    const res: number[][] = [];
    for (let i = 0; i < r; i++) {
        res.push(flat.slice(i * c, (i + 1) * c));
    }

    return res;
}

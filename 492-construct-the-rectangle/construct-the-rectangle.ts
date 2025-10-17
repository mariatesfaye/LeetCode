function constructRectangle(area: number): number[] {
    let W = Math.floor(Math.sqrt(area));
    while (area % W !== 0) {
        W--;
    }
    return [area / W, W];
}

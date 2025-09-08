function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: Map<number, number[]> = new Map();
    const inDegree: number[] = Array(numCourses).fill(0);

    for (const [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) {
            graph.set(prereq, []);
        }
        graph.get(prereq)!.push(course);
        inDegree[course]++;
    }
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const order: number[] = [];
    while (queue.length > 0) {
        const course = queue.shift()!;
        order.push(course);

        const neighbors = graph.get(course) || [];
        for (const nextCourse of neighbors) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }

    return order.length === numCourses ? order : [];
}

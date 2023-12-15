function findSegmentIntersection(a, b) {
    const [a1, a2] = a;
    const [b1, b2] = b;

    const start = a1 > b1 ? a1 : b1;
    const end = a2 < b2 ? a2 : b2;

    if (start <= end) {
        return [start, end]; // Отрезки пересекаются
    } else if (a2 === b1) {
        return a2; // Отрезки пересекаются в одной точке
    } else if (b2 === a1) {
        return b2; // Отрезки пересекаются в одной точке
    } else {
        return "No collision"; // Отрезки не пересекаются
    }
}

// Пример использования
const segment1 = [-1, 15];
const segment2 = [0, 200];
const result = findSegmentIntersection(segment1, segment2);

console.log(result);

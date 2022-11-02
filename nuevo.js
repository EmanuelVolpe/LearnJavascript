const grades = [4, 2, 5, 19, 20];

function getRaisedGrades(grades) {
    // TODO: return all the grades raised by 1 (no grade should exceed 20)
    let arreglo = grades.map(function (grade) {
        if (grade < 20)
            return ++grade
        return 20
    })
    return arreglo;
}

console.log(getRaisedGrades(grades));
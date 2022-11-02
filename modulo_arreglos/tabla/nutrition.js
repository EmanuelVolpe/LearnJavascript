/**
 * @param {array[][]} rows
 */

export function renderTableRows(rows) {
    console.log(rows);
    let linea = '';
    rows.forEach(row => {
        linea += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`
    })
    //console.log(ele)
    return linea;
}


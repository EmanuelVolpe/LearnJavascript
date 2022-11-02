/**
 * @param {string[]} countries
 */
export function getDropdown(countries) {
    console.log(countries);
    let cabecera = '<option value="">Please select</option>'
    let selecto = "";
    countries.forEach((country) => {
        let elemento = '<option value=' + country.toLowerCase() + '>'
            + country[0].toUpperCase() + country.substring(1).toLowerCase(1) +
            '</option >'
        selecto += elemento
    })

    return cabecera + selecto
}

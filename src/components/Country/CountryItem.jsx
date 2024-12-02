/* eslint-disable react/prop-types */
function CountryItem({country}) {
    return (
        <div>
            <span>{country.emoji}</span>
            <span>{country.country}</span>
        </div>
    )
}

export default CountryItem

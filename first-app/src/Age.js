import propTypes from "prop-types";
function Age(props) {
    return props.age !== undefined ?
    <h1> Masz {props.age} lat!</h1> :
    <h1> Nie wiem ile masz lat...</h1>
}
Age.propTypes = { // zastrzeżenia do typów w tej funkcji
    age : propTypes.number.isRequired
}
Age.defaultProps = { // wartości domyślne w przypadku niepodania
    age : 18
}
export default Age;
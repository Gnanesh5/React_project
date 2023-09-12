import PropTypes from 'prop-types';
import Button from './Button';



const Header = ({title, showForm, showAdd}) => { 
  return (
    <header className='header'>
            <h2>{title}</h2>
            <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'Close': 'Add'} onClick = {showForm}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,

}

// const customStyle = {
//     color: 'red',
//     backgroundColor: 'white'
// }
export default Header
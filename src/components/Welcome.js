import PropTypes from 'prop-types';

const Welcome = ({name, alumni, gender}) => {
  return(
    <h2>Hi {name} from Alumni {alumni}. This is ReactJS. Gender: {gender}</h2>
  );
}

// function Welcome({name}) {
//   return(
//     <h1>Hi {name}. This is ReactJS</h1>
//   );
// }

Welcome.defaultProps = {
  gender: 'Male'
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  alumni: PropTypes.number,
  gender: PropTypes.string,
};

export default Welcome;
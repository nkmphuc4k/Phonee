import PropTypes from 'prop-types';

export const productProps = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  crossPrice: PropTypes.number,
  image: PropTypes.string.isRequired,
};

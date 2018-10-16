import React from 'react';
import PropTypes from 'prop-types';
import { CURRENCIES } from '../../../utils/constants';
import { LiveRates } from '../styles.js'

const Rate = ({fromCurrency, toCurrency, rate}) => {
  const from = CURRENCIES.find(function(el){ return el.code === fromCurrency })
  const to = CURRENCIES.find(function(el){ return el.code === toCurrency })
  return (<LiveRates>{`${from.symbol} 1 = ${to.symbol} ${Number(rate).toFixed(4)}`}</LiveRates>)
};

Rate.defaultProps = {
  rate: 0
  };
  
  Rate.propTypes = {
    fromCurrency: PropTypes.string.isRequired,
    toCurrency: PropTypes.string.isRequired,
    rate: PropTypes.number
  };

export default Rate;

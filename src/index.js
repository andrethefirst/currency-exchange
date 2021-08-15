import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/service';

function clear() {
  $('.showCurrencies').text('');
  $('.showError').text('');
}

$(document).ready(function() {
  $('#currencyChange').on('click', function() {
    const usdAmount = $('#currency').val();
    const newCurrency = $('#currency-chosen').val();
    let errors = false;

    if(newCurrency === 'ERROR') {
      errors = true;
    }
    
    let promise = CurrencyService.currencyConvert(errors);
    promise.then(function(response) {
      const body = JSON.parse(response);
      clear();
      $('.showCurrency').text(`$${usdAmount} in ${newCurrency} is equal to ${usdAmount * body.conversion_rates[newCurrency]} ${newCurrency}.`);
    }).catch(function(error) {
      clear();
      $('.showError').text(`Error has been caught: ${error}`);
    });
  });
});
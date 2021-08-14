import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/service';

function clear() {
  $('.showCurrencies').text('');
  $('.showError').text('');
}


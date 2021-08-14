export default class CurrencyService {
  static currencyConvert(errors) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = ``;

      if(errors) {
        url = `https://v6.exchangerate-api.com/v6/12345abcde/latest/USD`;
      } else {
        url = `https://v6.exchangerate-api.com/v6/2911b5b91c212768e88641a5/latest/USD`;
      }

      request.onload = function() {
        if (this.money === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open('GET',url, true);
      request.send();
    });
  }
}

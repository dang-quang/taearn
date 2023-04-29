var appName = 'Taearn';
var storeUrl = '';
var date = '2023-03-29';
var linkBuy = 'https://1.envato.market/q4Dggy';

function onIndexLoad() {
  document.title = appName;
  document.getElementById('storeUrl').href = storeUrl;
}

function onLinkBuyLoad() {
  document.getElementById('linkBuy').href = linkBuy;
}

function onPolicyLoad() {
  document.title = appName + ' ' + 'Privacy Policy';
  getData();
}

function onTermLoad() {
  document.getElementById('appName2').innerHTML = appName;
  document.title = appName + ' ' + 'Terms and Conditions';
  getData();
}

function getData() {
  document.getElementById('appName').innerHTML = appName;
  document.getElementById('date').innerHTML = date;
}

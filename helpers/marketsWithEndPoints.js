const URLS = require ('./urls')

function addEndPointToMarket(endPoint) {
  return URLS.map((element) => {
    return Object.values(element).toString() + endPoint;
  });
}

module.exports = { addEndPointToMarket };

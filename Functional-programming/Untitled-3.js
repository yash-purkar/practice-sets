

// 
const stockData = {
  "stocks": [
    {
      "symbol": "AAPL",
      "name": "Apple Inc.",
      "prices": [
        {"date": "2022-03-01", "price": 138.54},
        {"date": "2022-03-02", "price": 142.76},
        {"date": "2022-03-03", "price": 144.11},
        {"date": "2022-03-04", "price": 143.98},
        {"date": "2022-03-05", "price": 145.60}
      ]
    },
    {
      "symbol": "GOOGL",
      "name": "Alphabet Inc.",
      "prices": [
        {"date": "2022-03-01", "price": 2749.50},
        {"date": "2022-03-02", "price": 2778.79},
        {"date": "2022-03-03", "price": 2787.44},
        {"date": "2022-03-04", "price": 2792.76},
        {"date": "2022-03-05", "price": 2768.25}
      ]
    },
    {
      "symbol": "MSFT",
      "name": "Microsoft Corporation",
      "prices": [
        {"date": "2022-03-01", "price": 249.22},
        {"date": "2022-03-02", "price": 252.96},
        {"date": "2022-03-03", "price": 253.57},
        {"date": "2022-03-04", "price": 251.68},
        {"date": "2022-03-05", "price": 254.16}
      ]
    }
  ]
}

const getDate = ({date}) => date.split("-").join("")>20220302;

const getObj = ({stocks}) => stocks.map(({symbol,name,prices}) => {
    console.log({"symbol":symbol,"prices":prices.filter(getDate)})
  return  {"symbol":symbol,"prices":prices.filter(getDate)}
});
console.log(getObj(stockData))
// Write your JS code here

import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {blogData} = props

  return (
    <div className="div-container">
      <h1>Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div>
        <div className="table-format">
          <h1>Coin Type</h1>
          <h1>USD</h1>
          <h1>EURO</h1>
        </div>
        <ul className="back-div">
          {blogData.map(item => (
            <CryptocurrencyItem blogData={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList

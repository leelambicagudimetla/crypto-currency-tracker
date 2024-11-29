// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {blogData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = blogData

  return (
    <li className="table-main-container">
      <div className="table-content">
        <div className="img-item">
          <img src={currencyLogo} alt={currencyName} width="50px" />
          <p>{currencyName}</p>
        </div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem

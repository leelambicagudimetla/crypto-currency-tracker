// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, blogData: []}

  componentDidMount() {
    // Simulating a fetch request
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    console.log(typeof formattedData)
    this.setState({blogData: formattedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const blogData = this.state
    console.log(blogData.blogData)
    console.log('Rendering CryptocurrenciesList in renderBlogItemDetails')
    return <CryptocurrenciesList blogData={blogData.blogData} />
  }

  render() {
    const {isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker

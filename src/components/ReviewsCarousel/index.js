import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {num: 0}

  leftArrow = () => {
    const {num} = this.state
    if (num > 0) {
      this.setState(prevState => ({num: prevState.num - 1}))
    }
  }

  rightArrow = () => {
    const {num} = this.state
    if (num < 3) {
      this.setState(prevState => ({num: prevState.num + 1}))
    }
  }

  render() {
    const {num} = this.state
    const {reviewsList} = this.props
    const list = reviewsList[num]

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="details">
          <button
            type="button"
            className="button"
            onClick={this.leftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="con">
            <img src={list.imgUrl} alt={list.username} />
            <p className="name">{list.username}</p>
            <p className="company">{list.companyName}</p>
            <p className="description">{list.description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.rightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

interface Props {
  movieId: string
}

function Reviews(props: Props) {
  return (
    <div className="review-container">
      <div className="review">
        Review body
        <div className="review-details">user details</div>
      </div>
      <div className="review-input">
        <input type="text" className="review-body"></input>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Reviews

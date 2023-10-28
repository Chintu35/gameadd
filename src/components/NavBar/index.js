// Write your code here.
import './index.css'

const Navbar = props => {
  const {gamestatus, score, topscore} = props
  return (
    <div className="navbar-container">
      <div className="logo">
        <img
          className="logo-image"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {gamestatus ? (
        <div className="score-conatiner">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topscore}</p>
        </div>
      ) : null}
    </div>
  )
}
export default Navbar

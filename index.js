const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="card-heading">Congratulations</h1>
    <div className="congrats-card">
      <img
        className="profile-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <p className="name-heading">Kiran V</p>
      <p>
        Vishnu Institute of Computer Education and Technology,
        <br />
        Bhimavaram
      </p>
      <img
        className="profile-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

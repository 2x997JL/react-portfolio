import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <section className="hero is-primary is-bold" style={{ background: 'lightgrey' }}>
          &gt;
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-black has-text-centered">My Developer Portfolio</h1>
            </div>
          </div>
        </section>
        <div className="column is-half mx-auto my-auto">
          <section className="section">
            <h3 className="title is-3">About Me</h3>
            <p>Hi! My name is Jay Leonard and this is my portfolio. <br /><br />
              Because of my creative thinking, I was drawn to web design. <br /><br />
              I'm currently living in Nashville, TN where I'm attending the coding booting at
              Vanderbilt
              University.
              <br /><br />
              We're currently learning our way through CSS HTML to create webpages. <br /><br />
              All of my sites that I've created have been hand coded and organized for the best
              results.
              <br /><br />
            </p>
          </section>
        </div>
        <section className="section">
          <div className="container">
            <h3 className="title is-3">My Projects</h3>
            <div className="columns">
              <div className="column">
                <div className="card" style={{ background: 'linear-gradient(to bottom right, #b783b0, #ff33e4)' }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={require("./assets/03-javascript-homework-demo.png")} alt="password generator" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Password Generator</p>
                    <a href="https://2x997jl.github.io/password-generator/" className="button is-primary">Check It
                      Out</a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card" style={{ background: 'linear-gradient(to bottom right, #b783b0, #ff33e4)' }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={require("./assets/agency.png")} alt="marketing website" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Herison</p>
                    <a href="https://2x997jl.github.io/marketing-agency/" className="button is-primary">Check It
                      Out</a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card" style={{ background: 'linear-gradient(to bottom right, #b783b0, #ff33e4)' }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={require("./assets/bowtie-cat.png")} alt="study guide page bowtie cat" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Study Guide</p>
                    <a href="https://2x997jl.github.io/prework-study-guide/" className="button is-primary">Check It
                      Out</a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card" style={{ background: 'linear-gradient(to bottom right, #b783b0, #ff33e4)' }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={require("./assets/quiz.png")} alt="javascript quiz" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Javascript Quiz</p>
                    <a href="https://2x997jl.github.io/javascript-quiz/" className="button is-primary">Check It
                      Out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="card" style={{ background: 'linear-gradient(to bottom right, #b783b0, #ff33e4)' }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={require("./assets/bike.png")} alt="Cycling Travel App" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Cycling Travel App</p>
                    <a href="https://2x997jl.github.io/Project/" className="button is-primary">Check It
                      Out</a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card" style={{ background: 'linear-gradient(to bottom right, #b783b0, #ff33e4)' }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={require("./assets/weather.png")} alt="weather app" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Weather App</p>
                    <a href="https://2x997jl.github.io/weather-app/" className="button is-primary">Check It
                      Out</a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card" style={{ background: 'linear-gradient(to bottom right, #b783b0, #ff33e4)' }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={require("./assets/schedule.png")} alt="work day scheduler website" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Work Scheduler</p>
                    <a href="https://2x997jl.github.io/work-day-scheduler/" className="button is-primary">Check It
                      Out</a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card" style={{ background: 'linear-gradient(to bottom right, #b783b0, #ff33e4)' }}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={require("./assets/Share.png")} alt="foodbank website" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Foodbank</p>
                    <a href="https://restaurant-foodbank.herokuapp.com/" className="button is-primary">Check It
                      Out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='small-section'>
          <div className="column">
            <div className="card" style={{ background: 'linear-gradient(to bottom right, #b783b0, #ff33e4)' }}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={require("./assets/MOMentum.png")} alt="work day scheduler website" />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">MOMentum</p>
                <a href="https://momentum-v1.herokuapp.com/" className="button is-primary">Check It
                  Out</a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;

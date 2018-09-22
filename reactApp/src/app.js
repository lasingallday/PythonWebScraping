class App extends React.Component {
    constructor() {
        super();
    };

    componentDidMount() {
        document.title = 'Python Animal Adoption Scraper';
    }

    render() {
        const url = 'http://localhost:8000';
        return (
          <div>
            <FetchAPI apiUrl={url} />
            <NextButton nextButtonText={"Next Dog"} />
          </div>
        );
    }
}

/* Component for Fetching data from an API */
class FetchAPI extends React.Component {
  constructor() {
      super();

      this.state = {
          data: []
      }
  };

  componentDidMount() {
      fetch(this.props.apiUrl)
          .then(result => result.json())
          .then(data => this.setState({data: data}))
  }

  render() {
    return (
        <div className="container2">
            <div className="container1">

                    {this.state.data.map(function(dog, index) {
                      return (
                        <div key={index}>
                            <h1>{dog.Name}</h1>
                            <img src={dog.image} />
                            <p><b>Age: </b> {dog['age:']}</p>
                            <p><b>Breed: </b> {dog['breed:']}</p>
                            <p><b>Gender: </b> {dog['gender:']}</p>
                            <p><b>Adoption Fee: </b> {dog['fee:']}</p>
                            <p><b>Last Updated: </b> {dog['lastUpdated:']}</p>
                            <br />
                            <hr />
                        </div>
                      )
                    })}
   

            </div>
        </div>
    );
  }
}

class NextButton extends React.Component {
  handlePick(e) {
    console.log('picked...');
    console.log(e);
  }

  render() {
    const buttonText = this.props.nextButtonText;
    return(
      <div>
        <button onClick={this.handlePick}>{buttonText}</button>
      </div>
    )
  }
}


var appRoot = document.getElementById('app');
ReactDOM.render(<App />, appRoot);
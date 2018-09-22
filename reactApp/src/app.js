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
          <FetchAPI apiUrl={url} />
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
                {
                    this.state.data.map(dog => 
                        <div key={dog.image}>
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
                }
            </div>
        </div>
    );
  }
}

var appRoot = document.getElementById('app');
ReactDOM.render(<App />, appRoot);
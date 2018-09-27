import React from 'react';

/* Component for Fetching data from an API */
export default class FetchAPI extends React.Component {
  constructor() {
      super();

      this.handleClick = this.handleClick.bind(this);

      this.state = {
          data: [],
          counter: 0
      }
  }

  componentDidMount() {
      fetch(this.props.apiUrl)
          .then(result => result.json())
          .then(data => this.setState({data: data}))
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      };
    });
  }


  render() {
    return (
        <div className="container2">
            <div className="container1">

              { this.state && this.state.data && this.state.data[0] &&
              <div>
                  <h1>{this.state.data[this.state.counter].Name}</h1>
                  <img src={this.state.data[this.state.counter].image} />
                  <p><b>Age: </b> {this.state.data[this.state.counter]['age:']}</p>
                  <p><b>Breed: </b> {this.state.data[this.state.counter]['breed:']}</p>
                  <p><b>Gender: </b> {this.state.data[this.state.counter]['gender:']}</p>
                  <p><b>Adoption Fee: </b> {this.state.data[this.state.counter]['fee:']}</p>
                  <p><b>Last Updated: </b> {this.state.data[this.state.counter]['lastUpdated:']}</p>

                  <button type="button" className="btn btn-primary" onClick={this.handleClick}>Next Doggy</button>
              </div>
            }

            </div>
        </div>
    );
  }
}
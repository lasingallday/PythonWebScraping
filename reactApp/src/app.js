class App extends React.Component {
    constructor() {
        super();

        this.state = {
            dogs: []
        }
    };

    componentDidMount() {
        fetch('http://localhost:8000')
            .then(result => result.json())
            .then(dogs => this.setState({dogs: dogs}))
    }

    render() {
        return (
            <div className="container2">
                <div className="container1">
                    {
                        this.state.dogs.map(dog => 
                            <div key={dog.image}><img src={dog.image} /></div>
                        )
                    }
                </div>
            </div>
        );
    }
}

var appRoot = document.getElementById('app');
ReactDOM.render(<App />, appRoot);
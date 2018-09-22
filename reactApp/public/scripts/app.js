'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.title = 'Python Animal Adoption Scraper';
        }
    }, {
        key: 'render',
        value: function render() {
            var url = 'http://localhost:8000';
            return React.createElement(
                'div',
                null,
                React.createElement(FetchAPI, { apiUrl: url })
            );
        }
    }]);

    return App;
}(React.Component);

/* Component for Fetching data from an API */


var FetchAPI = function (_React$Component2) {
    _inherits(FetchAPI, _React$Component2);

    function FetchAPI() {
        _classCallCheck(this, FetchAPI);

        var _this2 = _possibleConstructorReturn(this, (FetchAPI.__proto__ || Object.getPrototypeOf(FetchAPI)).call(this));

        _this2.handleClick = _this2.handleClick.bind(_this2);

        _this2.state = {
            data: [],
            counter: 0
        };
        return _this2;
    }

    _createClass(FetchAPI, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            fetch(this.props.apiUrl).then(function (result) {
                return result.json();
            }).then(function (data) {
                return _this3.setState({ data: data });
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.setState(function (prevState) {
                return {
                    counter: prevState.counter + 1
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container2' },
                React.createElement(
                    'div',
                    { className: 'container1' },
                    this.state && this.state.data && this.state.data[0] && React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'h1',
                            null,
                            this.state.data[this.state.counter].Name
                        ),
                        React.createElement('img', { src: this.state.data[this.state.counter].image }),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Age: '
                            ),
                            ' ',
                            this.state.data[this.state.counter]['age:']
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Breed: '
                            ),
                            ' ',
                            this.state.data[this.state.counter]['breed:']
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Gender: '
                            ),
                            ' ',
                            this.state.data[this.state.counter]['gender:']
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Adoption Fee: '
                            ),
                            ' ',
                            this.state.data[this.state.counter]['fee:']
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Last Updated: '
                            ),
                            ' ',
                            this.state.data[this.state.counter]['lastUpdated:']
                        ),
                        React.createElement(
                            'button',
                            { onClick: this.handleClick },
                            'Next Doggy'
                        )
                    )
                )
            );
        }
    }]);

    return FetchAPI;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(App, null), appRoot);

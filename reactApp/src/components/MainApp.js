import React from 'react';
import FetchAPI from './FetchAPI';

export default class MainApp extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        document.title = 'Python Animal Adoption Scraper';
    }

    render() {
        const url = 'http://localhost:8000';
        return (
          <div>
            <FetchAPI apiUrl={url} />
          </div>
        );
    }
}

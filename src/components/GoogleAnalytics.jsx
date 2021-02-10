// Google Analytics
import ReactGA from "react-ga";

import { Component } from 'react';

export default class GoogleAnalytics extends Component {
    componentDidMount = () => {
		this.initializeReactGA();
	};

	initializeReactGA = () => {
        var page = this.props.page;
		ReactGA.initialize("UA-130615050-1");
		ReactGA.pageview(page);
    };
    render(){return null};
}

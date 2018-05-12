import React, { Component } from 'react';
import LayoutSections from './LayoutSections';

class ViewAccount extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sections: null,
			fields: null
		};
		this.fetchAccountDataFromUiApi();
	}

	fetchAccountDataFromUiApi() {
		let that = this;
		fetch('https://curious-raccoon-19907-dev-ed.my.salesforce.com/services/data/v42.0/ui-api/record-ui/'+that.props.accountId, {
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + that.props.accessToken
			}
		})
		.then((response) => response.json())
		.then((responseObj) => {
			var accountLayouts = responseObj.layouts.Account;
			var accountRecord = responseObj.records;
			for(var key in accountLayouts);
			this.setState({ sections : accountLayouts[key].Full.View.sections });
			for(var key1 in accountRecord);
			this.setState({ fields: accountRecord[key1].fields })
		},
		(error) => {
			console.log(error);
		})
	}

	renderLayoutSections() {
		if(this.state.sections!=null && this.state.fields!=null) {
			return <LayoutSections sections={this.state.sections} fields={this.state.fields}/>;
		}
	}

	render() {
		return(
			<div>
				<h5>This is a simple component to view account</h5>
				{this.renderLayoutSections()}
			</div>
		);
	}

}

export default ViewAccount;
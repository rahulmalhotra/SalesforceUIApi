import React from 'react';
import LayoutRows from './LayoutRows';

function LayoutSections(props) {
	var sections = props.sections;
	var fields =  props.fields;
		const viewSections = sections.map((section, index) => {
		return(
			<div key={index}>
				<h3>{section.heading}</h3>
				<LayoutRows rows={section.layoutRows} fields={fields}/>
			</div>
		);
	});
	return(
		<div>{viewSections}</div>
	);
}

export default LayoutSections;
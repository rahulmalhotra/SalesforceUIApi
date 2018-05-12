import React from 'react';

function LayoutRows(props) {
	var rows = props.rows;
	var fields = props.fields;
	const viewRows = rows.map((row, index) => {
		return(
			<div key={index}>
				{row.layoutItems.map((layoutItem, index) => {
					var apiName = layoutItem.layoutComponents[0].apiName;
					var value = '';
					if(fields[apiName]!=null) { 
						value = fields[apiName].value;
					}
					return(
						<div key={index}><b>FieldName:</b> {layoutItem.label} <br /> <b>FieldValue:</b> {value} <br /><br /></div>
					)})
				}
			</div>
		);
	});
	return(
		<div>{viewRows}</div>
	);
}

export default LayoutRows;
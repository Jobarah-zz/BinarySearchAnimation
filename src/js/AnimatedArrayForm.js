import React from 'react';
import AnimatedArray from './AnimatedArray';

export default class AnimatedArrayForm extends React.Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="form-view">
				<AnimatedArray arrayLength={ 11 } ref={ (AA) => this.Aa = AA }/>
				<div className="array-form">
					<div className="array-sz-section">
						<div className="pr">Array Size</div>
						<input type="text" className="array-sz-input pr" ref={ input => this.arraySize = input }/>
						<button type="submit" onClick={ () => console.log(this.AA.updateSize) }>set Size</button>
					</div>
					<div className="array-search-section">
						<div className="pr">Find</div>
						<input type="text" className="array-search-input pr" ref={ input => this.searchValue = input }/>
						<button type="submit">Search</button>
					</div>
				</div>
			</div>
		)
	}
}
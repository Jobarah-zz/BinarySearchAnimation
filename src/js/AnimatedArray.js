import React from 'react';

export default class AnimatedArray extends React.Component {

	static propTypes = {
		arrayLength: React.PropTypes.number,
		array: React.PropTypes.array,
		updateSize: React.PropTypes.func
	};

	static defaultProps = {
        arrayLength: 6
    };


	constructor(props) {
		super(props);

		this.generateArray = this.generateArray.bind(this);
		this.animateSearch = this.animateSearch.bind(this);

		this.state = {
			array: this.generateArray(props.arrayLength)
		}
	}

	generateArray(size) {
		let generatedArray = new Array();
		for (let i = 0; i < size; ++i) {
			generatedArray.push(<div className="element" key={ i }>{ i }</div>);
		}
		return generatedArray;
	}

	updateSize(newSize) {
		console.log(newSize);
		this.setState({ array: this.generateArray(newSize) });
	}

	animateSearch(array, number, lastChecked, start, end) {
		/*logical ops*/
		let half = Math.floor((start + end) / 2);
	    let b = array[half].props.children;
	    /*animation ops*/
	    let updatedArray = this.state.array;
	    let activeElement = <div className="element active" key={ half }>{ half }</div>;
	    updatedArray[half] = activeElement;
	    this.setState({array: updatedArray});

	    if (number === b)
	    {
		    let updatedArray = this.state.array;
		    let activeElement = <div className="element found" key={ half }>{ half }</div>;
		    updatedArray[half] = activeElement;
		    this.setState({array: updatedArray});
	        return true;
	    }

	    if(number > b && half<array.length - 1 && half != lastChecked)
	    {
	        return setTimeout(()=>this.animateSearch(array, number, half, half+1, end), 500);
	    }

	    if(number < b && half > 0 && half != lastChecked)
	    {
	        return setTimeout(()=>this.animateSearch(array, number, half, start, half-1), 500);
	    }

	    return false;
	}

	render() {
		return (
			<div>
				<div className = "array-container">
					{ this.state.array }
				</div>
				<div className="array-form">
					<div className="array-sz-section">
						<div className="pr">Array Size</div>
						<input type="text" className="array-sz-input pr" ref={ input => this.arraySize = input }/>
						<button type="submit" onClick={ () => this.updateSize(parseInt(this.arraySize.value)) }>set Size</button>
					</div>
					<div className="array-search-section">
						<div className="pr">Find</div>
						<input type="text" className="array-search-input pr" ref={ input => this.searchValue = input }/>
						<button type="submit" onClick={ () => console.log(this.animateSearch(this.state.array, parseInt(this.searchValue.value), 0, 0, this.state.array.length)) }>Search</button>
					</div>
				</div>
			</div>
		)
	}
}

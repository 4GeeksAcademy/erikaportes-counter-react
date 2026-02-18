import React from "react";

// index.css'
import '../../styles/index.css'

const DigitFunction = (props) => {
	return (
		<div>
			{props.tiempo}
		</div>
	)
}

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="contenedor">

			<div>
				<i className="fa-regular fa-clock"></i>
			</div>

			<DigitFunction tiempo={Math.floor((props.seconds % 1000000) / 100000)} > </DigitFunction>
			<DigitFunction tiempo={Math.floor((props.seconds % 100000) / 10000)} > </DigitFunction>
			<DigitFunction tiempo={Math.floor((props.seconds % 10000) / 1000)} > </DigitFunction>
			<DigitFunction tiempo={Math.floor((props.seconds % 1000) / 100)} > </DigitFunction>
			<DigitFunction tiempo={Math.floor((props.seconds % 100) / 10)} > </DigitFunction>
			<DigitFunction tiempo={Math.floor((props.seconds % 10) / 1)} > </DigitFunction>

		</div>
	);
};

export default SecondsCounter;
import './InputBox.css';

function InputBox(props) {
	return (
		<input className={"input-box " + props.className} placeholder={props.placeholder} onChange={props.trigger} value={props.value} autoComplete="off"/>
	);
}

export default InputBox;
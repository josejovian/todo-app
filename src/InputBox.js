import './InputBox.css';

function InputBox(props) {
    return (
		<input class={"input-box " + props.class} placeholder={props.placeholder} onChange={props.trigger} value={props.value} autoComplete="off"/>
	);
}

export default InputBox;
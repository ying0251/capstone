export default function MenuButton(props) {
    return (
        <div>
            <button onClick={() => props.handleClick()}>
                {props.menuName}
            </button>
        </div>
    );
}

function FirstComponenet(props) {

    return <div className="modal">
        <h1>{props.owner} A's Application</h1>
        <p>application for {props.reason}</p>
        <button onClick={props.closeModal}>Close</button>
    </div>
}

export default FirstComponenet;
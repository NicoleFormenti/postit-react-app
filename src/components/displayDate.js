function DisplayDate() {
    const date = new Date();
    const day = date.getDay();
    return (
        <div>
            Today is { //this is an if else statement with a conditional ? operator!!
                day === 0 ? ' Sunday' :
                day === 1 ? ' Monday' :
                day === 2 ? ' Tuesday' :
                day === 3 ? ' Wednesday' :
                day === 4 ? ' Thursday' :
                day === 5 ? ' Friday' :
                day === 6 ? ' Saturday':
                '' //this is the else part, empty
            }
        </div>
    )
}
export default DisplayDate;
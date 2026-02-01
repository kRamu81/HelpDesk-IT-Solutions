export default function SubmitTicket(){
    return(
        <>
        <div>
            <h1>Submit IT Ticket</h1>
            <p>Techserve Solutions</p>

            <form>
                <div>
                    <label>Issue Title</label><br/>
                    <input type="text" placeholder="please Enter your issue here"/>
                </div>
                <div>
                    <label>Description</label><br/>
                    <input type="text" placeholder="Describe your issue"/>
                </div>
                <div>
                    <label>Priority</label><br/>
                    <select>
                        <option>High</option>
                        <option>Moderate</option>
                        <option>small</option>
                    </select>
                </div>
                <div>
                    <label>Label</label><br/>
                    <input type="text" placeholder="your department"/>
                </div>

                <button>Submit</button>
            </form>
        </div>
        </>
    )
}
export default function TodoForm({ ...val }) {
    return (
        <form onSubmit={val.addTask} className="flex justify-center items-center mb-4" data-gtm-form-interact-id="2">
            <div data-mdb-input-init className="form-outline flex-fil"
                data-mdb-input-initialized="true">
                <input value={val.inputs} onChange={(ev) => val.HandleChange(ev.target.value)}
                    type="text" id="form2" className="form-control" data-gtm-form-interact-field-id="3" />
                <label className="form-label" htmlFor="form2">{val.edit === null ? 'New Task...' : val.edit.name}</label>
            </div>
            <button type="submit" id="submit" value="Add" data-mdb-button-init data-mdb-ripple-init
                className="btns" title="Add" data-mdb-button-initialized="true" aria-pressed="false"
            >Add</button>
        </form>
    )
}
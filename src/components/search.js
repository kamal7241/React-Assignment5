// search component recive onSearch method from parent
const Search = ({onSearch})=>{

    // on change event to get value
    const sendFilterKey =(e)=> {
        // on value change send new value it to parent state
        onSearch(e.target.value);
    }
    return (
        <form>
        <div className="form-group text-center my-3">
            <label className="text-primary border rounder alert h3 shadow" for="filter">search on students</label>
            <input className="form-control " id="filter" onChange={sendFilterKey} placeholder="filter by name"/>
        </div>
        </form>
    )
}

export default Search;
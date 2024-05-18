function Form() {
    const handleSubmit = () => {

    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80  p-1 rounded-lg align-center">
            <div className="flex flex-row ml-1 left-1">
                <label>📆</label>
                <input className="pl-5 ml-5" type="date" name="name"></input>
            </div>
            <div className="flex flex-row ml-1 left-1">
                <label>With</label>
                <input className="pl-5 ml-5" type="text" name="buddies" placeholder="Your travel buddies"></input>
            </div>
            <div className="flex flex-row ml-1 left-1">
                <label >Comment</label>
                <textarea className="pl-5 ml-5" type="text" name="comment" placeholder="Got fun?" />
            </div>
            <button className="bg-zinc-950 m-auto" type="submit">Save</button>
        </form>
    )

}

export default Form
import Form from "./Form";

function Element({ place, removePlace }) {
    const handleClick = () => {
        removePlace(place)
    }
    const handleClickModify = () =>{
        // sul click appare il form
    }
    return (
        <div className="bg-zinc-700 m-auto mb-7 rounded-lg flex flex-col">
            <span className="inline  flex-row">
                <p className="inline align-middle">{place.name}</p>
                <button className="inline-flex m-auto ml-1 bg-zinc-700 hover:border-blue-500" onClick={handleClickModify}>✏️</button>
                <button className="inline-flex m-auto ml-1 bg-zinc-700 hover:border-red-500" onClick={handleClick}>❌</button>
            </span>
            {/* <Form id="form"></Form> */}
        </div>
    )
}

function download(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "list.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function VisitedList({ placesList, removePlace }) {

    return (
        <div>
            <h1 className="mb-10">Visited places</h1>
            <ul className="text-center w-3/4 m-auto">
                {placesList.map((place) => (
                    <li> <Element place={place} removePlace={removePlace}></Element> </li>
                ))}
            </ul>

            <button className="bottom-0" onClick={() => download(placesList, "list")}>Download</button>
        </div>
    )
}

export default VisitedList



function ListGroup() {
    

    //const stationList = Stations.map()
    //change to display the given stations 
   let items = [
        'New York',
        'San Fran',
        'Tokyo',
        'London',
        'Paris'
    ];
    items = [];
    
    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p> No item found </p>}
            <ul className="list-group">
               { items.map(item => <li key = {item}>{item}</li>) }
            </ul>

            
        </>
    );
}




export default ListGroup;
import axios from "axios";

const Location = ({ locationInfo, setLocationInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocationId = e.target.newLocation.value;

    axios.get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
    .then(({ data }) => setLocationInfo(data))
    .catch((err) => console.log(err))

  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="number" 
            name="newLocation"
            placeholder="Type a location ID ..."
          />
          <button type="submit">Search</button>
        </div>
      </form>

        <article>
            <h2>Welcome to {locationInfo?.name}</h2>
            <ul>
                <li>Type: {locationInfo?.type}</li>
                <li>Dimension: {locationInfo?.dimension}</li>
                <li>Population: {locationInfo?.residents.length}</li>
            </ul>
        </article>
    </section>
  )
}
export default Location;
import { useEffect, useState } from 'react'
import Character from './character';

function NavPage(props) {
  return (
    <header className='d-flex justify-content-between align-items-center '>
      <button className='btn btn-primary btn-sm' onClick={() => {
        if (props.page != 1) {
          props.setPage(props.page - 1)
        }
      }}>Back {props.page - 1}
      </button>
      <p>Page : {props.page}</p>
      <button className='btn btn-primary btn-sm'
        onClick={() => {
          props.setPage(props.page + 1);
        }}>Next {props.page + 1}
      </button>
    </header>
  )
}
function characterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    loadData();
  }, [page]);


  return (
    <div className='container '>
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='row'>
          {
            characters.map(character => {
              return (
                <div className='col-md-4' key={character.id}>
                  <Character character={character} />
                </div>
              )
            })
          }
          <NavPage page={page} setPage={setPage} />
        </div>
      )}
    </div>

  )
}

export default characterList
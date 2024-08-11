import Styles from '../styles/Search.module.css'

// eslint-disable-next-line react/prop-types
export default function Seach({search,setSearch}) {

  return (
    <div>
        <input type="text" className={Styles.input_text} 
        value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Search for a country"/>
    </div>
  )
}

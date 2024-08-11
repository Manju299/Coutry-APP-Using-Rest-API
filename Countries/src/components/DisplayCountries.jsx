/* eslint-disable react/prop-types */
import Proptype from "prop-types"
import Styles from "../styles/DisplayCountries.module.css"


export default function DisplayCountries({country}) {
  return (<>
    <div className={Styles.container}>
        {country.map(item=>(
          <div key={item.cca2} className={Styles.subcontainer}> 
          <div className={Styles.image_wrapper}>
          <img  src={item.flags.svg} className={Styles.image}/>
          </div>
          <div className={Styles.info_pad}><p className={Styles.country}>{item.name.common}</p>
          <p className={Styles.info}><span>Population:</span> {item.population}</p>
          <p className={Styles.info}><span>Region:</span> {item.region}</p></div>
          
          </div> 
      ))}
    </div>
    </>
  )
}


DisplayCountries.propType = {
    country:Proptype.array.isRequired,
};
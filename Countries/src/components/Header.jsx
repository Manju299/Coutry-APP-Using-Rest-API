import moon from '../assets/moon.svg'
import Styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={Styles.Header}>
        <div>
        <h1 className={Styles.heading}>Where in the world?</h1></div>
        <div className={Styles.darkmode}>
        <img src={moon} alt='dark mode' className={Styles.dark_mode_image}/>
        <p>Dark Mode</p>
        </div>
    </div>
  )
}

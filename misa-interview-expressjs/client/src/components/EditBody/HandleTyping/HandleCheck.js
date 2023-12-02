import styles from '../EditBody.module.css'

export const HandleCheck = () =>{
    const dungChung = document.getElementById('dungChungEdit')
    const dungChungEvent = (e)=> {
        if(dungChung.classList.contains(styles.iconCheck)){
            dungChung.classList.remove(styles.iconCheck)
            dungChung.classList.add(styles.iconChecked)
        } else{
            dungChung.classList.add(styles.iconCheck)
            dungChung.classList.remove(styles.iconChecked)
        }
    }
    dungChung.addEventListener('click',dungChungEvent )
}
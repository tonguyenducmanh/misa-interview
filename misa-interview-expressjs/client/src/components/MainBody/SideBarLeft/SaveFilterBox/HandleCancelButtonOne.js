import styles from './SaveFilterBox.module.css'


export const HandleCancelButtonOne = (e) =>{
    const editFilter = document.getElementsByClassName(styles.editFilter)
    editFilter[0].classList.add(styles.hiddenEditFilter)
}
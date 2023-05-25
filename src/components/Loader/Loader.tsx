import styles from './Loader.module.css'
const Loading = () => {
  return (
    <div data-cy='loading-component' className={styles.loader}>
      <span className={styles.loaderText}>Carregando sugestões</span>
      <span className={styles.loaderAnimation}></span>
    </div>
  )
}

export default Loading

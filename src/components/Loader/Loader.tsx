import styles from './Loader.module.css'
const Loading = () => {
  return (
    <div data-cy='loader-component' className={styles.loader}>
      <span data-cy='loader-text' className={styles.loaderText}>
        Carregando sugestões
      </span>
      <span
        data-cy='loader-animation'
        className={styles.loaderAnimation}></span>
    </div>
  )
}

export default Loading

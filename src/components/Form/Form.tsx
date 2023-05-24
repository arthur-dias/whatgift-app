import { useState, useCallback, useMemo } from 'react'
import { HobbiesOption, PeopleOption, SelectedOptions } from '../../types/form'
import { FormData } from '../../data/formData'
import Loading from '../Loading/Loading'
import Message from '../Message/Message'
import styles from './Form.module.css'

const Form = () => {
  const [resultMessage, setResultMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    people: '',
    age: '',
    hobbies: '',
  })
  const peopleOptions: PeopleOption[] = useMemo(
    () => FormData.peopleOptions,
    []
  )
  const hobbiesOptions: HobbiesOption[] = useMemo(
    () => FormData.hobbiesOptions,
    []
  )
  const allSelected =
    selectedOptions.age !== '' &&
    selectedOptions.hobbies !== '' &&
    selectedOptions.people !== ''

  const handleOptionChange = useCallback(
    (
      category: keyof SelectedOptions,
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [category]: event.target.value,
      }))
    },
    [setSelectedOptions]
  )

  const handleSubmit = useCallback(async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        message: `Me dê cinco ideias de presente para meu/minha ${selectedOptions.people} que tem ${selectedOptions.age} anos e tem como hobbies ${selectedOptions.hobbies}`,
      }),
    }

    setIsLoading(true)

    try {
      const response = await fetch(
        'https://api-whatgift.onrender.com/ask',
        options
      )
      const data = await response.json()
      setResultMessage(data.choices[0].message.content)
      setIsLoading(false)
      setSelectedOptions({
        people: '',
        age: '',
        hobbies: '',
      })
    } catch (error) {
      setError(error as Error)
      setIsLoading(false)
    }
  }, [selectedOptions.age, selectedOptions.hobbies, selectedOptions.people])

  return (
    <div className={styles.form}>
      <div className={styles.form__input}>
        <label htmlFor='people-select' className={styles.input__label}>
          QUEM RECEBERÁ O PRESENTE?
        </label>
        <select
          id='people-select'
          value={selectedOptions.people}
          onChange={(event) => handleOptionChange('people', event)}
          className={styles.input__select}>
          <option value=''>Selecionar</option>
          {peopleOptions.map((people) => (
            <option key={people.value} value={people.value}>
              {people.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.form__input}>
        <label htmlFor='age-select' className={styles.input__label}>
          QUAL A IDADE?
        </label>
        <select
          id='age-select'
          value={selectedOptions.age}
          onChange={(event) => handleOptionChange('age', event)}
          className={styles.input__select}>
          <option value=''>Selecionar</option>
          {Array.from({ length: 111 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.form__input}>
        <label htmlFor='hobbies-select' className={styles.input__label}>
          O QUE A PESSOA GOSTA DE FAZER?
        </label>
        <select
          id='hobbies-select'
          value={selectedOptions.hobbies}
          onChange={(event) => handleOptionChange('hobbies', event)}
          className={styles.input__select}>
          <option value=''>Selecionar</option>
          {hobbiesOptions.map((hobbie) => (
            <option key={hobbie.value} value={hobbie.value}>
              {hobbie.label}
            </option>
          ))}
        </select>
      </div>
      {allSelected ? (
        <button onClick={handleSubmit} className={styles.form__btn}>
          PEDIR SUGESTÕES
        </button>
      ) : null}
      {isLoading ? <Loading /> : <Message text={resultMessage} />}
      {error ? <p>Algo de errado ocorreu, tente novamente</p> : null}
    </div>
  )
}

export default Form

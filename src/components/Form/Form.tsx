import { useState } from 'react'
import { HobbiesOption, PeopleOption, SelectedOptions } from '../../types/form'
import { FormData } from '../../data/formData'
const Form = () => {
  const [resultMessage, setResultMessage] = useState<string | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    people: '',
    age: '',
    hobbies: '',
  })

  const peopleOptions: PeopleOption[] = FormData.peopleOptions
  const hobbiesOptions: HobbiesOption[] = FormData.hobbiesOptions

  const handleOptionChange = (
    category: keyof SelectedOptions,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [category]: event.target.value,
    }))
  }

  const handleSubmit = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        message: `Me dê cinco ideias de presente para meu/minha ${selectedOptions.people} que tem ${selectedOptions.age} anos e tem como hobbies ${selectedOptions.hobbies}`,
      }),
    }

    try {
      const response = await fetch(
        'https://api-whatgift.onrender.com/ask',
        options
      )
      const data = await response.json()
      setResultMessage(data.choices[0].message.content)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <label htmlFor='people-select'>Quem irá receber o presente?</label>
      <select
        id='people-select'
        value={selectedOptions.people}
        onChange={(event) => handleOptionChange('people', event)}>
        <option value=''>-- Select --</option>
        {peopleOptions.map((people) => (
          <option key={people.value} value={people.value}>
            {people.label}
          </option>
        ))}
      </select>
      <label htmlFor='age-select'>Qual a idade?</label>
      <select
        id='age-select'
        value={selectedOptions.age}
        onChange={(event) => handleOptionChange('age', event)}>
        <option value=''>-- Select --</option>
        {Array.from({ length: 111 }, (_, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
      <label htmlFor='hobbies-select'>Do que a pessoa gosta?</label>
      <select
        id='hobbies-select'
        value={selectedOptions.hobbies}
        onChange={(event) => handleOptionChange('hobbies', event)}>
        <option value=''>-- Select --</option>
        {hobbiesOptions.map((hobbie) => (
          <option key={hobbie.value} value={hobbie.value}>
            {hobbie.label}
          </option>
        ))}
      </select>

      <button onClick={handleSubmit}>Pedir sugestões</button>

      {resultMessage ? <p>{resultMessage}</p> : null}
    </div>
  )
}

export default Form

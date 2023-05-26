export type PeopleOption = {
  value: string
  label: string
}

export type HobbiesOption = {
  value: string
  label: string
}

export type SelectedOptions = {
  people: string
  age: string
  hobbies: string
}

export interface CardProps {
  icon: string
  title: string
  text: string
}

import React, { FC, useState } from 'react'
import useForm from "react-hook-form"

import { CircleOfSuck } from './CircleOfSuck'

export const App: FC = () => {
  const [year, setYear] = useState(new Date().getFullYear())
  const { handleSubmit, register } = useForm<{ year: number }>({
    defaultValues: { year },
  })

  const onSubmit = handleSubmit(({ year }) => {
    setYear(year)
  })

  return (
    <main>
      <h1>PAC-12 Circle of Suck</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="year">Year:</label>
        <input id="year" name="year" type="number" ref={register} />
        <button type="submit">Submit</button>
      </form>
      <CircleOfSuck year={year} conference="PAC" />
    </main>
  )
}

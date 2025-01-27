import React from 'react'
import Navigation from './pageComponents/navbar'
import AthletesList from './pageComponents/renderAthleteRegTable'
import RegistrationForm from './pageComponents/registrationForm'

function HighlandGames() {
  return (
    <>
        <Navigation />
        <RegistrationForm />
        <AthletesList />
    </> 
  )
}

export default HighlandGames
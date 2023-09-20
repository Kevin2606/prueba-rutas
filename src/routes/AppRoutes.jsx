import { Route, Routes } from 'react-router-dom'
import { Application } from '../App/Application'
import { Auth } from '../Auth/Auth'

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Application />} />
            <Route path="/auth" element={<Auth />} /> 
        </Routes>
    </>
  )
}

export default AppRoutes

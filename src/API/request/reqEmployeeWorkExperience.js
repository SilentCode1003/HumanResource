import { useQuery } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const reqEmpExp = async () => {
  const res = await hrmisAPI.get('/employeeworkexperience/load')
  return res.data
}

export const useRequestEmployeeExperience = () => {
  return useQuery({
    queryKey: ['reqemployeeworkexperience'],
    queryFn: reqEmpExp,
  })
}
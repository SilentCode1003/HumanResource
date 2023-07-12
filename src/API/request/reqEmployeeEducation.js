import { useQuery } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const reqEmpEd = async () => {
  const res = await hrmisAPI.get('/employeeeducation/load')
  return res.data
}

export const useRequestEmployeeEducation = () => {
  return useQuery({
    queryKey: ['employeeeducation'],
    queryFn: reqEmpEd,
  })
}
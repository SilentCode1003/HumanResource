import { useQuery } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const reqEmpRef = async () => {
  const res = await hrmisAPI.get('/employeereference/load')
  return res.data
}

export const useRequestEmployeeReference = () => {
  return useQuery({
    queryKey: ['reqemployeereference'],
    queryFn: reqEmpRef,
  })
}
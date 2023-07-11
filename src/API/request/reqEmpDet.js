import { useQuery } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const reqEmpDet = async () => {
  const res = await hrmisAPI.get('/employeedetails/load')
  return res.data
}

export const useRequestEmployeeDetails = () => {
  return useQuery({
    queryKey: ['request'],
    queryFn: reqEmpDet,
  });
}
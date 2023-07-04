import { useQuery } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const reqEmpGovID = async () => {
  const res = await hrmisAPI.get('/employeegovernmentid/load')
  return res.data
}

export const useRequestEmployeeGovernmentID = () => {
  return useQuery({
    queryKey: ['request'],
    queryFn: reqEmpGovID,
  })
}
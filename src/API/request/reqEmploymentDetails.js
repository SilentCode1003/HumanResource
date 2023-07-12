import { useQuery } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const reqEmploymentDet = async () => {
  const res = await hrmisAPI.get('/employmentdetails/load')
  return res.data
}

export const useRequestEmploymentDetails = () => {
  return useQuery({
    queryKey: ['employmentdetails'],
    queryFn: reqEmploymentDet,
  })
}
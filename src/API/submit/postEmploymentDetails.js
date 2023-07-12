import { useMutation, useQueryClient } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const postAddEmploymentDet = async (EmploymentDetails) => {
  const res = await hrmisAPI.post('/employmentdetails/save', EmploymentDetails)
  return res.data
}

export const usePostEmploymentDetails = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (EmploymentDetails) => postAddEmploymentDet(EmploymentDetails),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['postemploymentdetails'] }),
  })
}
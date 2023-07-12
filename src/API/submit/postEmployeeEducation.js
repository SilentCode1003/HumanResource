import { useMutation, useQueryClient } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const postAddEmpEd = async (EmployeeEducation) => {
  const res = await hrmisAPI.post('/employeeeducation/save', EmployeeEducation)
  return res.data
}

export const usePostEmployeeEducation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (EmployeeEducation) => postAddEmpEd(EmployeeEducation),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['postemployeeeducation'] }),
  })
}
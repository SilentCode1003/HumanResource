import { useMutation, useQueryClient } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const postAddEmpExp = async (EmployeeExperience) => {
  const res = await hrmisAPI.post('/employeeworkexperience/save', EmployeeExperience)
  return res.data
}

export const usePostEmployeeExperience = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (EmployeeExperience) => postAddEmpExp(EmployeeExperience),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['postemployeeworkexperience'] }),
  })
}
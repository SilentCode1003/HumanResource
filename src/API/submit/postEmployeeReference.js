import { useMutation, useQueryClient } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const postAddEmpRef = async (EmployeeReference) => {
  const res = await hrmisAPI.post('/employeereference/save', EmployeeReference)
  return res.data
}

export const usePostEmployeeReference = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (EmployeeReference) => postAddEmpRef(EmployeeReference),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['postemployeereference'] }),
  })
}
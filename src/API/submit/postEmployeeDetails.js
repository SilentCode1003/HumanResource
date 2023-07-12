import { useMutation, useQueryClient } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const postAddEmpDet = async (EmployeeDetails) => {
  const res = await hrmisAPI.post('/employeedetails/save', EmployeeDetails)
  return res.data
}

export const usePostEmployeeDetails = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (EmployeeDetails) => postAddEmpDet(EmployeeDetails),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['request'] }),
  })
}
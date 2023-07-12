import { useMutation, useQueryClient } from '@tanstack/react-query'
import { hrmisAPI } from '../axios'

export const postAddEmpGovID = async (EmployeeGovernmentID) => {
  const res = await hrmisAPI.post('/employeegovernmentid/save', EmployeeGovernmentID)
  return res.data
}

export const usePostEmployeeGovernmentID = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (EmployeeGovernmentID) => postAddEmpGovID(EmployeeGovernmentID),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['postemployeegovernmentid'] }),
  })
}
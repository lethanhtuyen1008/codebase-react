import { useQuery } from 'react-query';
import { ApiEndpoint } from 'src/commons/apiEndpoint';
import { apiClient } from 'src/providers/axiosProvider';
import { User } from 'src/types/user';

export interface ListUserRequest {
  pageSize: number;
  pageIndex: number;
  type: number;
  keyword?: string;
}

export interface ListUserReponse {
  data: User.UserInfo[];
  total: number;
}

export function getListUser(request: ListUserRequest): Promise<ListUserReponse> {
  return apiClient.get<ListUserRequest, ListUserReponse>(ApiEndpoint.LIST_USER, {
    params: {
      ...request,
    },
  });
}

const useListUser = (request: ListUserRequest) => {
  const pageIndex = request?.pageIndex || 0;
  const limitNumber = request?.pageSize || 10;
  const queryName = ['users', pageIndex, limitNumber, request.keyword].join('-');

  const { data, ...other } = useQuery<ListUserReponse>(queryName, () =>
    getListUser({ ...request, pageIndex }),
  );

  return {
    data: { data: data?.data || [], total: data?.total || 0 },
    ...other,
  };
};

export default useListUser;

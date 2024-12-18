import axios from 'axios'

// Axios 클라이언트 생성
export function axiosClient() {
  const instance = axios.create({
    baseURL: process.env.GRAPHQL_ENDPOINT, // GraphQL 엔드포인트
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.GRAPHQL_ADMIN_SECRET,
    },
  })

  return instance
}

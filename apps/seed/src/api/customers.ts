import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'

import { getCustomer } from '~/apps/customer'
import { axiosClient } from '~/libs/axios'

const axios = axiosClient()

const mutation = `
  mutation MyMutation($objects: [datarize_customers_insert_input!] = {}) {
    insert_datarize_customers(objects: $objects) {
      affected_rows
      returning {
        client_id
        email
        id
        name
      }
    }
  }
`

export async function createCustomers({
  clientId,
  length,
}: {
  clientId: string
  length: number
}) {
  const result = getCustomer()

  // 고객을 생성합니다.
  const customers = await pipe(
    Array.from({ length }),
    A.map(async () => ({
      client_id: clientId,
      ...(await result.next()).value,
    })),
    (promises) => Promise.all(promises),
  )

  console.log('고객 데이터:', customers)
  // return axios.post('', {
  //   query: mutation,
  //   variables: {
  //     objects: customers,
  //   },
  // })
}

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

export async function insertCustomers() {
  return function (
    customers: {
      name: string
      email: string
      clinet_id: string
    }[],
  ) {
    return axios
      .post('', {
        query: mutation,
        variables: {
          objects: customers,
        },
      })
      .then(console.log)
      .catch(console.error)
  }
}

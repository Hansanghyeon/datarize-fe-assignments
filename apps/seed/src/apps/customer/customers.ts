import { getCustomer } from './customer'

export async function createCustomers({
  clientId,
  length,
}: {
  clientId?: string
  length: number
}) {
  const result = getCustomer()

  // progess를 표시합니다.
  const customers = []
  // process.stdout.write를 이용하기 위해서 promise.all을 사용하지 않습니다.
  for (let i = 0; i < length; i++) {
    // 현재 진행률 출력
    process.stdout.write(
      `\r🤔 고객 생성 - ${(((i + 1) / length) * 100).toFixed(2)}%`,
    )
    const customer = await result.next()
    customers.push({
      ...(clientId ? { client_id: clientId } : {}),
      ...customer.value,
    })
  }

  return customers
}

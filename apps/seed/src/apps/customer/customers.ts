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
      `\r🤔 고객 생성중... ${(((i + 1) / length) * 100).toFixed(2)}%`,
    )
    const customer = await result.next()
    customers.push({
      ...(clientId ? { client_id: clientId } : {}),
      ...customer.value,
    })

    // (선택) 특정 단계마다 메시지 표시
    if ((i + 1) % 1000 === 0) {
      console.log(`\n${i + 1} 고객생성완료`)
    }
  }

  console.log('')
  return customers
}

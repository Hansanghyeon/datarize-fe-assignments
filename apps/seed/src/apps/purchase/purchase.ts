/**
 * purchaes는 이미 생성된 제품과 고객 데이터를 이용한다.
 */
export function getPurchase({
  customerLength,
  productLength,
}: {
  customerLength: number
  productLength: number
}) {
  // 고객id의 최대값을 가져온다. 고객id는 1부터 시작한다. autoincrement 타입이다.
  // 제품id의 최대값을 가져온다. 제품id는 1부터 시작한다. autoincrement 타입이다.
  // quantity는 1부터 30까지 랜덤하게 생성한다.
  // date는 2021년 1월 1일부터 2024년 12월 31일까지 랜덤하게 생성한다.

  const customerId = Math.floor(Math.random() * customerLength) + 1
  const productId = Math.floor(Math.random() * productLength) + 1
  const quantity = Math.floor(Math.random() * 30) + 1
  const date = new Date(
    Math.floor(Math.random() * (2024 - 2021 + 1)) + 2021,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 31),
  )

  return {
    customerId,
    productId,
    quantity,
    date,
  }
}

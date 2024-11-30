import { genCustomerEmail } from './customer-email'
import { getCustomerName } from './customer-name'

/**
 * @description
 * 고객을 만듭니다.
 * @return
 * 고객명, 고객이메일
 */
export async function* getCustomer() {
  const customerName = getCustomerName()
  const customerEmail = genCustomerEmail()

  while (true) {
    const [nextName, nextEmail] = await Promise.all([
      customerName.next(),
      customerEmail.next(),
    ])

    yield {
      name: nextName.value,
      email: nextEmail.value,
    }
  }
}

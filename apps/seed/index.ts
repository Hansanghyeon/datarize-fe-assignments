import { input, select, Separator } from '@inquirer/prompts'
import { match, P } from 'ts-pattern'

import { createCustomers } from '~/apps/customer'

// 클라이언트 입력
const clientId = await input({
  message: '클라이언트 id를 입력해주세요',
}).catch((error) => {
  if (error.name === 'AbortPromptError') {
    return 'Default value'
  }

  throw error
})

const 상수_액션 = {
  고객데이터_생성: 'create_customers',
  고객데이터_리셋: 'reset_customers',
  상품데이터_생성: 'create_products',
  상품데이터_리셋: 'reset_products',
} as const

const action = await select({
  message: '실행할 액션을 선택해주세요',
  choices: [
    {
      name: '고객데이터 생성',
      value: 상수_액션.고객데이터_생성,
    },
    {
      name: '고객데이터 리셋',
      value: 상수_액션.고객데이터_리셋,
      disabled: true,
    },
    new Separator(),
    {
      name: '상품데이터 생성',
      value: 상수_액션.상품데이터_생성,
      disabled: true,
    },
    {
      name: '상품데이터 리셋',
      value: 상수_액션.상품데이터_리셋,
      disabled: true,
    },
  ],
})

match(action)
  .with(상수_액션.고객데이터_생성, async () => {
    const length = await input({
      message: '생성할 고객 수를 입력해주세요',
    })
    // api 요청은 5000개의 고객으로 나눌것이다.
    // 100만개정도의 데이터를 만들어서 추가할때 js 메모리 부족할수있고 graphql의 병목현상이 일어날수있다.
    // 100만개의 데이터를처리하는 도중에 1개가 실패하면 트랜젝션처리를 취소할때 문제가 생길수도 있다.
    // length를 5000개로 나눈다.
    const totalCustomers = Number(length)
    for (let i = 0; i < totalCustomers; i += 5000) {
      const batchSize = Math.min(5000, totalCustomers - i)
      const customers = await createCustomers({ clientId, length: batchSize })
    }
    // stdin에 #때문에 출력 개행을 추가한다.
    console.log('')
  })
  .otherwise(() => null)

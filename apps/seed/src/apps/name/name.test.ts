import { test, expect } from "bun:test";
import { getnName } from "./name";

test("snapshot", async () => {
  const result = await getnName()
  expect(result).toMatchObject([
    { customer_name: '홍길동' },
    { customer_name: '김영희' },
    { customer_name: '이철수' },
    { customer_name: '박지민' },
    { customer_name: '최민수' },
    { customer_name: '오준호' },
    { customer_name: '한지우' },
    { customer_name: '권상우' },
    { customer_name: '윤서영' },
    { customer_name: '이서진' },
    { customer_name: '김하늘' },
    { customer_name: '조은비' },
    { customer_name: '서지영' },
    { customer_name: '전하늘' },
    { customer_name: '이상우' },
    { customer_name: '장민석' },
    { customer_name: '배윤서' },
    { customer_name: '강호준' },
    { customer_name: '문지환' },
    { customer_name: '송지우' },
  ]);
});
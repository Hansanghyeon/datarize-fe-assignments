import { getProductImgSrc } from '~/apps/product/product-img'
import { getProductName } from '~/apps/product/product-name'
import { genProductPrice } from '~/apps/product/product-price'

/**
 * @description
 * 제품을 만듭니다.
 * @return
 * 제품명, 제품가격, 제품이미지
 */
export async function* getProduct() {
  const productName = getProductName()
  const productPrice = genProductPrice()
  const productImgSrc = getProductImgSrc()

  while (true) {
    const [nextName, nextPrice, nextImgSrc] = await Promise.all([
      productName.next(),
      productPrice.next(),
      productImgSrc.next(),
    ])

    yield {
      name: nextName.value,
      price: nextPrice.value,
      imgSrc: nextImgSrc.value,
    }
  }
}

export function currencyFormat(num: number | undefined) {
    return "$" + num?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const VNDFormating = (price: number | undefined) => {
  if(price === undefined) {
    price = 0
  }
  return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

export const titleProduct = (title?: string) => {
  return title && title.length < 30 ?
    title : title?.substring(0, 30) + "..."
}


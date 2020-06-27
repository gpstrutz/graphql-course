module.exports = {
  precoDesconto: product => {
    if(product.precoDesconto) {
      return (product.preco * (1 - product.precoDesconto)).toFixed(2)
    } else {
      return product.preco
    }
  }
}
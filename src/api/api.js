const getProducts = () => new Promise(resolve => import('./products.js').then(res => setTimeout(() => resolve(res.default), 2000)))

const getImg = async (id) => (await import(`./img/product${id}.jpeg`)).default

export {getProducts, getImg}
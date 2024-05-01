const getProducts = (id) => new Promise(resolve => 
    import('./products.js').then(res => setTimeout(() => {
        if (id) {
            if (typeof id == 'string') resolve(res.default.filter(product => product.category == id))
            else resolve(res.default.find(product => product.id == id))
        }
        else resolve(res.default)
    }, 1000))
)

const getImg = async (id) => (await import(`./img/product${id}.jpeg`)).default

export {getProducts, getImg}
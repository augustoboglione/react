export default async id => (await import(`../img/${id}.jpeg`)).default
const AsyncImg = ({className, src, alt}) => {
    const handleLoad = e => e.target.classList.add('loaded')

    return <img className={className} src={src} alt={alt} onLoad={handleLoad}/>
}

export default AsyncImg
const AsyncImg = ({className, src, alt}) => (
    <img className={className} src={src} alt={alt} onLoad={e => e.target.classList.add('loaded')}/>
)

export default AsyncImg
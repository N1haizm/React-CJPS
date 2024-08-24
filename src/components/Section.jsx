export default function Section({title, children, ...restProps}){
    return (
        <section {...restProps}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
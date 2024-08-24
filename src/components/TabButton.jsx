export default function TabButton({children, isActive, ...restPrp}){
    return (
        <li><button className={isActive? 'active': ''} {...restPrp}>{children}</button></li>
    )
}
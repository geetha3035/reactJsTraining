const Product = (props) => {
    return (
        <tr>
            <td>{props.pid}</td>
            <td>{props.name}</td>
            <td>{props.MRP}</td>
            <td>{props.price}</td>
        </tr>
    )
}
export default Product;
const Employee = (props) => {
    return (
        <div>
            <h1>EmpId: {props.id}, Name: {props.name}, Email: {props.email}</h1>
        </div>
    )
}
export default Employee;
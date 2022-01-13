
import "./EmployeeComponent.css"

export default function EmployeeComponent(props) {
    return (
        <div className="card">
            <img src="https://image.shutterstock.com/image-photo/smiling-black-white-coworkers-looking-600w-648579007.jpg" className="card-img-top" alt="Mayank Gupta" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">The User Id is {props.id} and The User was created on the following Date: {props.createdAt}</p>
                <input type="button" className="btn btn-primary" value="Delete" />
            </div>
        </div>
    )
}
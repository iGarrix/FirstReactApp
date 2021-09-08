import { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

class AddContact extends Component {

    state = {
        Name: "",
        Image: `1`,
        Phone: "",
        Email: "",
        Status: "",
        Gender: "men",
        isRedirect: false,
    }

    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }

    onGetPhone = (e) => {
        const phone = e.target.value;
        this.setState({
            Phone: phone
        })
    }

    onGetEmail = (e) => {
        const email = e.target.value;
        this.setState({
            Email: email
        })
    }

    onGetGender = (e) => {
        const gender = e.target.value;
        this.setState({
            Gender: gender
        })
    }

    onGetStatus = (e) => {
        const status = e.target.value;
        this.setState({
            Status: status
        })
    }

    onGetStatus = (e) => {
        const status = e.target.value;
        this.setState({
            Status: status
        })
    }

    onGetImage = (e) => {
        const image = e.target.value;
        this.setState({
            Image: image
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        const {Name, Email, Phone, Image, Status, Gender} = this.state;        
        const contact = {
            Name: Name,
            Email:Email,
            Phone:Phone,
            Image:Image,
            Status: Status,
            Gender: Gender,
        }

        const { CreateContact } = this.props;
        CreateContact(contact);

        this.setState({
            IsRedirect: true
        })
    }
    
    render() {       
        let { Image, Gender, IsRedirect } = this.state;
        if (IsRedirect === true) {
            return <Redirect to="/"></Redirect>
        }
        const img = `https://randomuser.me/api/portraits/${Gender}/${Image}.jpg`
        console.log(img);
        return (
            <Fragment>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-8">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="Name">Name</label>
                                    <input name="Name" type="text" className="form-control" onChange={this.onGetName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input name="Phone" type="tel" className="form-control" onChange={this.onGetPhone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" onChange={this.onGetEmail}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Avatar">Avatar</label>
                                    <input type="number" min="1" max="99" className="form-control" onChange={this.onGetImage} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Gender">Gender</label>
                                    <select className="custom-select" onChange={this.onGetGender}>
                                        <option>Choose...</option>
                                        <option value="men" selected>Man</option>
                                        <option value="women">Woman</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Status</label>
                                    <select className="custom-select" onChange={this.onGetStatus}>
                                        <option selected>Choose...</option>
                                        <option value="1">Friend</option>
                                        <option value="2">Family</option>
                                        <option value="3">Work</option>
                                        <option value="4">Private</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-dark rounded-0 border-0" style={{outline: 0}}>Create contact</button>
                            </form>
                        </div>
                        <div className="col-4">
                            <img src={img} width="400" height="250" className="rounded float-left" alt="..." />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AddContact;
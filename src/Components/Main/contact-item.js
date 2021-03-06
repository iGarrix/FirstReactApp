import { Link } from "react-router-dom"

const StatusBlock = ({Status, onChangeStatus}) => {

  switch (Status) {
    case "Friend":
      return (
        <a className="d-flex justify-content-center text-light rounded text-decorator-none lab-warning" onClick={onChangeStatus}>{Status}</a>
      )
    case "Work":
      return (
        <a className="d-flex justify-content-center text-light rounded text-decorator-none lab-success" onClick={onChangeStatus}>{Status}</a>
      )
    case "Family":
      return (
        <a className="d-flex justify-content-center text-light rounded text-decorator-none lab-primary" onClick={onChangeStatus}>{Status}</a>
      )
    default:
      return (
        <a className="d-flex justify-content-center text-light rounded text-decorator-none lab-danger" onClick={onChangeStatus}>{Status}</a>
      )
  }  
}

const ContactItem = ({Obj, onChangeStatus, Remove, onGetCurrentContact}) => {

  let defaultStatus = "d-flex justify-content-center text-light rounded text-decorator-none lab-warning";

    switch (Obj.Status) {
        case "Work": defaultStatus = "d-flex justify-content-center text-light rounded text-decorator-none lab-success"; break;
        case "Private": defaultStatus = "d-flex justify-content-center text-light rounded text-decorator-none lab-danger"; break;
        case "Family": defaultStatus = "d-flex justify-content-center text-light rounded text-decorator-none lab-primary"; break;
        case "Friend": defaultStatus = "d-flex justify-content-center text-light rounded text-decorator-none lab-warning"; break;
    }

    const img = `https://randomuser.me/api/portraits/${Obj.Gender}/${Obj.Image}.jpg`

    return(
        <div className="unit">
              <div className="field name">
                <div className="check">
                  <input id="cb2" name="cb1" type="checkbox" />
                  <label htmlFor="cb2"></label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>                 
                </div>
                <div className="d-flex align-items-center">

                  <img src={img} alt="image" className="avatar mr-2" /> 
                  <div className="d-flex flex-column w-100">
                    {Obj.Name}
                    <a className={defaultStatus} onClick={onChangeStatus}>{Obj.Status}</a>
                  </div>
                </div>
              </div>
              <div className="field phone">
              {Obj.Phone}
              </div>
              <div className="field email">
                {Obj.Email}
              </div>
              <div className="field email">
                <a className="text-danger" onClick={Remove}><i className="fas fa-trash-alt"></i></a>
                <Link to="/editcontact">
                  <a className="text-success ml-3" onClick={onGetCurrentContact}><i className="fas fa-edit"></i></a>      
                </Link>     
              </div>
            </div>
    )
}

export default ContactItem;
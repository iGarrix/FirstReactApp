
const StatusBlock = ({Status}) => {
    if (Status == "Friend") {
        return (
          <a className="d-flex justify-content-center text-light rounded text-decorator-none lab-warning">{Status}</a>
        )
    }
    else if (Status == "Work") {
      return (
        <a className="d-flex justify-content-center text-light rounded text-decorator-none lab-success">{Status}</a>
      )
    }
    else if (Status == "Family") {
      return (
        <a className="d-flex justify-content-center text-light rounded text-decorator-none lab-primary">{Status}</a>
      )
    }
    else {
      return (
        <a className="d-flex justify-content-center text-light rounded text-decorator-none lab-danger">{Status}</a>
      )
    }
}

const ContactItem = ({Obj}) => {
    return(
        <div className="unit">
              <div className="field name">
                <div className="check">
                  <input id="cb2" name="cb1" type="checkbox" />
                  <label htmlFor="cb2"></label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>                 
                </div>
                <div className="d-flex align-items-center">

                  <img src={Obj.Image} alt="image" className="avatar mr-2" /> 
                  <div className="d-flex flex-column w-100">
                    {Obj.Name}
                    <StatusBlock Status={Obj.Status}/>
                  </div>
                </div>
              </div>
              <div className="field phone">
              {Obj.Phone}
              </div>
              <div className="field email">
                {Obj.Email}
              </div>
            </div>
    )
}

export default ContactItem;
import { Component } from "react";
import ContactItem from "./contact-item";

import Loader from "react-loader-spinner";

class ContactList extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(i => {this.setState({loading: false})}, 500);
    }

    render() {
        let {List, onChangeStatus, Remove, onGetCurrentContact, SearchValue} = this.props;
        const item = List.map(item => 
            {
                if (item.Name.toLowerCase().indexOf(SearchValue.toLowerCase()) > -1) {          
                    return (
                        <ContactItem key={item.Id} Obj={item} onChangeStatus={() => onChangeStatus(item.Id)}
                        Remove={() => Remove(item.Id)}
                        onGetCurrentContact={() => onGetCurrentContact(item.Id)} />
                    )
                }
            });
        if (this.state.loading) {
            return (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                />
              );
        }
        return (
            <section>
                {item.length > 0 ? item : <h3 className="text-center">Contact list is empty.</h3>}
            </section>
        )
    }
}

export default ContactList;
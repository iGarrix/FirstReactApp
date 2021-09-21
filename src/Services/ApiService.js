class ContactListService {
    URL = "https://react-09-default-rtdb.firebaseio.com/contacts.json";


    async fetchContactList() {
        const List = await fetch(this.URL)
            .then(responce => {
                return responce.json();
            }).then(data => {
                if (data == null) {
                    return {
                        List: []
                    }

                } else {
                    return {
                        List: data
                    }
                }
            })
            .catch(err => console.log(err))
        return List;
    }

    updateDatabse = (List) => {
        fetch(this.URL,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(List)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }
}

const apiService = new ContactListService();
export default apiService;
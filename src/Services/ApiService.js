

class ApiDb {

    URL = "https://react-68461-default-rtdb.firebaseio.com/list.json";

    async fetchList () {
        const List = await fetch(this.URL)
        .then(resp => 
          {
              return resp.json();
          }).then(data => 
            {
                if(data == null) {
                  return  {
                    List: []
                  }
                }
                else {
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

export default ApiDb;
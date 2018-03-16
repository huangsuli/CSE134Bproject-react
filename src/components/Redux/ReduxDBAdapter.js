class reduxDB {

    constructor() {
        this.id = -1;
        this.users = [];
        this.isConnected = false;
        this.requests = [];

        let doctorMock = {
            id: 0,
            isDoctor: true,
            First: "Mark",
            Last: "Young",
            title: "Family Medicine",
            Email: "my1977@email.com",
            Password: "654321",
            City: "San Diego",
            State: "CA",
            Birthday:
            {
                Day: 1,
                Month: 1,
                Year: 1977,
                ToString() {return this.Day + "/" + this.Month + "/" + this.Year}
            },                
            Gender: "Male",
            fullName() {return this.First + " " + this.Last},
            getLocation() {return this.City + ", " +this.State}
        };

        let clientMock = {
            id: 1,
            isDoctor: false,
            First: "Ben",
            Last: "Chafik",
            title: "",
            Email: "achafik@ucsd.edu",
            Password: "123456",
            City: "San Diego",
            State: "CA",
            Birthday:
            {
                Day: 1,
                Month: 5,
                Year: 1994,
                ToString() { return this.Day + "/" + this.Month + "/" + this.Year}
            },
            Gender: "Male",
            Session: "No session at the moment",
            fullName() {return (this.First + " " + this.Last)},
            getLocation() {return (this.City + ", " +this.State)}                
        };

        this.users.push(doctorMock);
        this.users.push(clientMock);
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getAllUsers() {
        return this.users;
    }

    getUser(id) {
        return this.users[id];
    }

    getConnectedUser() {
        return this.users[this.id];
    }

    getUserByEmail(email) {
        let i = 0;
        for(i = 0; i < this.users.length; i++) {
            console.log(this.users[i].Email);
            if(this.users[i].Email == email) {
                console.log("Looking for: " + email + " and found: " + this.users[i].Email);
                return this.users[i];
            }
        }
        return {};
    }

    addUser( newUser ) {
        this.users.push(newUser);
    }

    modifyUser( updatedUser ) {
        this.users[updatedUser.id] = updatedUser; 
    }

    getAllRequests() {
        return this.requests;
    }

    getRequest(id) {
        return this.requests[id];
    }

    addRequest( newRequest ) {
        this.requests.push(newRequest);
    }

    getIsConnected() {
        return this.isConnected;
    }

    setIsConnected( isConnected ) {
        this.isConnected = isConnected;
    }

    getLastIndex() {
        return this.users.length;
    }
}

let DB_Adapter = new reduxDB();

export default DB_Adapter;
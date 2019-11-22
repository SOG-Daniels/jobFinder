class User{
    constructor(userData)
    {
        this.userInfo = 
        [
            [
                userData[0],
                userData[1],
                userData[2],
                userData[3]
            ]
        ];

        this.workHistory = [
            [
                0,
                "Painting:",
                "I need help painting my room",
                "$40",
                "25 albert st."
            ]
        ];
        this.activeJobs =[
            [
                0,
                "Painting:",
                "I need help painting my room",
                "$40",
                "25 albert st."
            ]
        ];
        this.jobsTaken = [
            [
                0,
                "Painting:",
                "I need help painting my room",
                "$40",
                "25 albert st."
            ]
        ];
        
    }
    getInfo()// TEST FUNCTION
    {
        return this.userInfo;
    }
    getWorkHistory()
    {
        return this.workHistory;
    }
    getActiveJobs()
    {
        return this.activeJobs;
    }
    getJobsTaken(data)
    {
        return this.jobsTaken;
    }
    //add post
    addWorkHistory(data)
    {
       this.workHistory.push(data);
    }
    addActiveJobs(data)
    {
        this.activeJobs.push(data);
    }
    addJobsTaken(data)
    {
        this.jobsTaken.push(data);
    }
}

class System{
    constructor(sys)
    {
        if(sys == null)
        {
            this.user = null;
            //home page posts
            this.postData = [
                [
                    0,
                    "Painting:",
                    "I need help painting my room",
                    "$40",
                    "25 albert st."
                ],
                [
                    1,
                    "Painting:",
                    "I need help painting my room",
                    "$40",
                    "25 albert st."
                ],
                [
                    2,
                    "Painting:",
                    "I need help painting my room",
                    "$40",
                    "25 albert st."
                ]
            ];
    
            this.allUsers =       
            [
                [
                    0,
                    "Fehr Faber",
                    "FehrFaber@gmail.com",
                    "IloveHCI"
                ],
                [
                    1,
                    "Danielson Correa",
                    "danielson@gmail.com",
                    "IloveHCI"
                ]
            ];
        }
        else{
            this.user = sys.user;
            this.postData = sys.postData;
            this.allUsers = sys.allUsers;
        }
               
    }

    getNumberOfUsers()
    {
        return this.allUsers.length;
    }
    nameExist(name)
    {
        for (let index = 0; index < this.allUsers.length; index++) {
            let user = this.allUsers[index];
            if(user[2] == name)
            {
                return true;
            }
        }
        return false;
    }
    getPostAt(location)
    {
        if(this.postData[location] !== null)
        {
            return this.postData[location];
        }
        else{
            console.log("Could not get post at location"+ location.toString()+" :function[getPostAt]");
        }
    }
    //data must be an array of 5
    createPost(data)
    {
        if(data !== null)
        {
            this.postData.push(data);
            console.log("Post was created! :function[createPost->system]");
        }
        else
        {
            console.log("Post was not created! :function[createPost->system]");
        }
    }
    getUser(email,pass)//gets the user that is stored in the database
    {
        for (let index = 0; index < this.allUsers.length; index++) {
            let user = this.allUsers[index];
            if(user[2] == email && user[3] == pass)
            {
                return new User(user);
            }
        }
        return null;
    }

    getAllPosts()
    {
        return this.postData;
    }
    //must set user in the login page/ sets the datamember [user]
    setUser(email,pass)
    {
        let user = this.getUser(email,pass);
        if(user !== null)
        {
            this.user = user;
            console.log("User has been set: function[setUser->system]")
            return true;
        }
        else{
            console.log("Fail to set user: function[setUser->system]");
            return false;
        }
    }

    getUserWorkHistory()
    {
        if(this.user !== null)
        {
            return this.user.getWorkHistory();
        }
        else{
            console.log("User does not exist to return work history! :function[getUserWorkHistory->system]");
            return null;
        }
    }
    getUserActiveJobs()
    {
        if(this.user !== null)
        {
            return this.user.getActiveJobs();
        }
        else{
            console.log("User does not exist to return active jobs! :function[getUserActiveJobs->system]");
            return null;
        }
    }
    getUserJobsTaken()
    {
        if(this.user !== null)
        {
            return this.user.getJobsTaken();
        }
        else{
            console.log("User does not exist to return jobs taken! :function[getUserJobsTaken->system]");
            return null;
        }
    }

    addUserWorkHistory(data)
    {
        if(this.user !== null)
        {
            this.user.workHistory.push(data);
        }
        else{
            console.log("User does not exist to add work history! :function[addUserWorkHistory->system]");
            return null;
        }
    }
    addUserActiveJobs(data)
    {
        if(this.user !== null){
            this.user.activeJobs.push(data);
        }
        else{
            console.log("User does not exist to add active job! :function[addUserActiveJobs->system]");
            return null;
        }
    }
    addUserJobsTaken(data)
    {
        if(this.user !== null){
            this.user.jobsTaken.push(data);
        }
        else{
            console.log("User does not exist to add job taken! :function[getUserJobsTaken->system]");
            return null;
        }
    }
    addNewUser(user)
    {
        this.allUsers.push(user);
    }

}
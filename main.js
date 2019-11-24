class User{
    constructor(userData)
    {
        if(userData.activeJobs != null)
        {
            this.userInfo = userData.userInfo;
            this.workHistory = userData.workHistory;
            this.activeJobs = userData.activeJobs;
            this.jobsTaken = userData.jobsTaken;
        }
        else if(userData == null)
        {
            this.userInfo = [
                [
                    0,
                    "DefaultName",
                    "DefaultEmail",
                    "DefaultPassword"
                ]
            ];
            this.workHistory = [
                [
                    1,//post id
                    1,//user id
                    "Painting:",//title
                    "I need help painting my room",//description
                    40,//payment
                    "25 albert st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/10/2019",//AVIALABLE DATE

                ]
            ];
            this.activeJobs =[
                [
                    1,//post id
                    1,//user id
                    "Painting:",//title
                    "I need help painting my room",//description
                    40,//payment
                    "25 albert st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/10/2019",//AVIALABLE DATE

                ]
            ];
            this.jobsTaken = [
                [
                    1,//post id
                    1,//user id
                    "Painting:",//title
                    "I need help painting my room",//description
                    40,//payment
                    "25 albert st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/10/2019",//AVIALABLE DATE

                ]
            ];
        }else if(userData[2] != null){
            this.userInfo = [
                [
                    userData[0],//user id
                    userData[1],//user name
                    userData[2],//user email
                    userData[3]//user pass
                ]
            ];
            this.workHistory = [
                /*[
                    1,//post id
                    1,//user id
                    "Painting:",//title
                    "I need help painting my room",//description
                    40,//payment
                    "25 albert st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/10/2019",//AVIALABLE DATE

                ]*/
            ];
            this.activeJobs = [
               /* [
                    1,//post id
                    1,//user id
                    "Painting:",//title
                    "I need help painting my room",//description
                    40,//payment
                    "25 albert st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/10/2019",//AVIALABLE DATE

                ]*/
            ];
            this.jobsTaken = [
                /*[
                    1,//post id
                    1,//user id
                    "Painting:",//title
                    "I need help painting my room",//description
                    40,//payment
                    "25 albert st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/10/2019",//AVIALABLE DATE

                ]*/
            ];
            
        }
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
               /*  DEFAULT DATA[
                    0,//post id
                    1,//user id
                    "Painting:",//title
                    "I need help painting my room",//description
                    40,//payment
                    "25 albert st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/10/2019",//AVIALABLE DATE
                    
                ],
                [
                    1,//post id
                    0,//user id
                    "Driver:",//title
                    "I need help driving my taxi cars",//description
                    20,//payment
                    "22 Rose st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/10/2019",//AVIALABLE DATE
                    
                ],
                [
                    2,//post id
                    0,//user id
                    "Relocation:",//title
                    "I need help moving to my new house",//description
                    80,//payment
                    "25 Mary ave.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "26/10/2019",//AVIALABLE DATE
                    
                ],
                /*[
                    3,//post id
                    1,//user id
                    "Mechanic:",//title
                    "Looking for someone to fix my Muffler",//description
                    200,//payment
                    "2 pineapple st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/11/2019",//AVIALABLE DATE
                    
                ]*/
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
            this.notifications = [
            ];
                //posts the user applied for
            this.appliedJobs = [
                [
                    3,//post id
                    1,//user id
                    "Mechanic:",//title
                    "Looking for someone to fix my Muffler",//description
                    200,//payment
                    "2 pineapple st.",//location
                    3,//hours
                    "8:00",//avaialble time
                    "24/11/2019",//AVIALABLE DATE
                    
                ]
            ];
        }
        else{
            console.log(sys);
            this.user = sys.user;
            this.postData = sys.postData;
            this.allUsers = sys.allUsers;
            this.notifications = sys.notifications;
            this.appliedJobs = sys.appliedJobs;
        }
    }
    applied(data)
    {
        for (let index = 0; index < this.appliedJobs.length; index++) {
            if(JSON.stringify(data) == JSON.stringify(this.appliedJobs[index]))
            {
                return true;
            }
        }
        return false;
    }
    applyForJob(postId,postUserID,currentUserID)
    {
        let data = [currentUserID,postUserID,postId];
        this.notifications.push(data);
        let post = this.getPostAt(postId);
        data = [currentUserID,post];
        this.appliedJobs.push(data);
    }

    getUserNameById(id)
    {
        for (let index = 0; index < this.allUsers.length; index++) {
            let userInfo = this.allUsers[index];
            if(userInfo[0] == id)
            {
                return userInfo[1];
            }
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
        for (let index = 0; index < this.postData.length; index++) {
            if(this.postData[index][0] == location)
            {
                return this.postData[index];
            }
            
        }
        /*if(this.postData[location] !== null)
        {
            console.log("postData");
            console.log(this.postData);
            
        }
        else{
            console.log("Could not get post at location"+ location.toString()+" :function[getPostAt]");
        }*/
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
    findUser(email,pass)//gets the user that is stored in the database
    {
        console.log(email);
        console.log(pass);
        for (let index = 0; index < this.allUsers.length; index++) {
            console.log(this,this.allUsers[index]);
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
    getUser()
    {
        return this.user;
    }
    //must set user in the login page/ sets the datamember [user]
    setUser(user)
    {
        this.user = user;
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
            let posts= [];
            this.postData;
            for (let index = 0; index < this.postData.length; index++) {
                if(index != data[0])
                    posts.push(this.postData[index]);
                
            }
            this.postData = posts;
            console.log(this.postData);
            return this;

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
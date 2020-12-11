class User{
    constructor(userData)
    {
        if(userData.activeJobs != null)
        {
            this.userInfo = userData.userInfo;
            this.workHistory = userData.workHistory;
            this.activeJobs = userData.activeJobs;
            this.myVacancies = userData.myVacancies;
            this.myVacancyHistory = user.myVacancyHistory;
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
            this.workHistory = [// the users working history
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
            this.activeJobs =[//WORK THAT IS TAKEN
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

            this.myVacancies = [
            ];
            this.myVacancyHistory = [
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
            this.myVacancies = [
            ];
            this.myVacancyHistory = [
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
    //add post
    addWorkHistory(data)
    {
       this.workHistory.push(data);
    }
    addActiveJobs(data)
    {
        this.activeJobs.push(data);
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
                    "fehrfaber@gmail.com",
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
            ];
        }
        else{
            this.user = sys.user;
            this.postData = sys.postData;
            this.allUsers = sys.allUsers;
            this.notifications = sys.notifications;
            this.appliedJobs = sys.appliedJobs;
        }
    }
    getUserVacancies()
    {
        return this.user.myVacancies;
    }
    applied(data,userId)
    {
        for (let index = 0; index < this.appliedJobs.length; index++) {
            if(this.appliedJobs[index][1][0]== data[0] && this.appliedJobs[index][1][1] == data[1] && userId == this.appliedJobs[index][0])
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
    removePostAt(id)
    {
        let myPosts = [];
        for (let index = 0; index < this.postData.length; index++) {
            if(this.postData[index][0] != id)
            {
                myPosts.push(this.postData[index]);
            }         
        }

        this.postData = myPosts;
    }
    //data must be an array of 5
    createPost(data)
    {
        if(data !== null)
        {
            this.postData.push(data);
            this.user.myVacancies.push(data);
            console.log("Post was created! :function[createPost->system]");
        }
        else
        {
            console.log("Post was not created! :function[createPost->system]");
        }
    }
    findUser(email,pass)//gets the user that is stored in the database
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
    getUser()
    {
        return this.user;
    }
    //must set user in the login page/ sets the datamember [user]
    setUser(user)
    {
        let myPosts = [];
        for (let index = 0; index < this.postData.length; index++) {
            if(this.postData[index][1] == user.userInfo[0][0])
            {
                myPosts.push(this.postData[index]);
            }         
        }
        user.myVacancies = myPosts;
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
    addNewUser(user)
    {
        this.allUsers.push(user);
    }

}
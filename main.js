class User{
    constructor()
    {
        this.allUser = [
            [
                ["id",0],
                ["userName","Fehr"]
            ]
        ];
    }
    getUserData(id)
    {
        if(this.allUser[id] !== null)
        {
            return this.allUser[id];
        }
        else{
            console.log("user does not exist :function[getUserData]");
        }
    }
}

class System{
    constructor()
    {
        this.data = [
            [
                ["Job","Painting:"],
                ["Job Description:", "I need help painting my room"],
                ["Payment:","$40"],
                ["Location:","25 albert st."]
            ],
            [
                ["Job","Painting:"],
                ["Job Description:", "I need help painting my room"],
                ["Payment:","$40"],
                ["Location:","25 albert st."]
            ],
            [
                ["Job","Painting:"],
                ["Job Description:", "I need help painting my room"],
                ["Payment:","$40"],
                ["Location:","25 albert st."]
            ]
        ];
    }
    getPostAt(location)
    {
        if(this.data[location] !== null)
        {
            return this.data[location];
        }
        else{
            console.log("Could not get post at location"+ location.toString()+" :function[getPostAt]");
        }
    }
    createPost(data)
    {
        //data must be multi dimentional array
        this.data.push(data);
    }
}
# clothing-bin


# Overview

Clothing BIN website supports independent fashion designers to sell their products. The app makes the whole process easy by helping users connect directly with makers to find something extraordinary

# Schema

SignUp/Signin Schema for User
```JSON
const user = new User({
      email,
      password,
    })
```
    
Product Schema
```JSON
const Product = new Schema(
    {
        title: { type: String, required: true },
        image_url: { type: String, required: true },
        price: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true },
)
```

# Figma 
https://www.figma.com/file/rs4Rkcs1TrpsW87tyjn4Mr/Clothing-Bin?node-id=1%3A58

# Whimsical Diagram

![image](https://user-images.githubusercontent.com/84349667/126210996-d7639675-c9bc-4ded-872a-9a977c9a0904.png)

![image](https://user-images.githubusercontent.com/84349667/126211673-b4cfc1ae-6a4e-4f22-8ac0-074fd7111938.png)

![image](https://user-images.githubusercontent.com/84349667/126212030-6593bb41-f160-432a-939b-525ff641b80c.png)

![image](https://user-images.githubusercontent.com/84349667/126212765-e986bca1-7f45-4c77-859b-8eca655fdb70.png)

![image](https://user-images.githubusercontent.com/84349667/126213211-5c47083f-f9d5-4b15-907a-ea66d2e8239d.png)

![image](https://user-images.githubusercontent.com/84349667/126213395-0a80bba5-79e3-4b53-afd8-94fb3ed6ff7a.png)

![image](https://user-images.githubusercontent.com/84349667/126213997-c70a3c0d-3597-43df-9bbf-21699228f97d.png)



# MVP

1. Complete Auth functionality:
   - Complete authentication for signup
   - Complete authentication for signin
   - Complete restriction for users to perform CRUD
2. Complete Backend functionality: 
   - Setup MongoDB data base and complete CRUD operations
   - Complete the API deployment in Heroku 
3. Complete Frontend functionality:
   - Complete proper links to all pages
   - Render data on all pages
   - Allow user to add data on required pages 
   - Complete all components with basic css
   - Deploy in Netflify

# Post-MVP

1. Add more CSS styling
2. On signup page, add functionality to confirm password

## Project Schedule
|  Day  | Deliverable | Status |
|-------|-------------| -------|
|July 19| Design / Wireframes/ Timeframes | Pending
|July 19| Project Approval | Pending
|July 20| Work with Auth functionality | Not Started
|July 21| Work with Backend setup and functionality| Not Started
|July 22| Work with Frontend setup and functionality | Not Started
|July 26| MVP  | Not Started          
|July 28| Presentations/Project Submission | Not Started


## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --------- | :------: | :------------: | :-----------: | :---------: |
| Initial layout setup | H | 3hrs| 
| Auth functionality | H| 4hrs| 
| Auth functionality restrictions for user | H| 2hrs| 
| Backend setup | H| 3hrs| 
| CRUD operations | H | 3hrs|  
| Deploy in MongoDb | H | 1hrs|  
| Deploy API in Heroku | H | 2hrs|
| Frontend setup | H | 5hrs|
| Work on Links | H | 2hrs|
| Deploy in Netlify | M| 2hrs| 
| Debugging | H | 4hrs| 
| Render results | H | 4hrs| 
| Post MVP features | M | 4hrs|
| General Research | M | 3hrs|
| Add additional CSS look and feel to all components | M | 3hrs| 
| Total | H | 45hrs| 

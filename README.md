# clothing-bin


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

# Whimsical Diagram

![image](https://user-images.githubusercontent.com/84349667/126210996-d7639675-c9bc-4ded-872a-9a977c9a0904.png)

![image](https://user-images.githubusercontent.com/84349667/126211673-b4cfc1ae-6a4e-4f22-8ac0-074fd7111938.png)

![image](https://user-images.githubusercontent.com/84349667/126212030-6593bb41-f160-432a-939b-525ff641b80c.png)

![image](https://user-images.githubusercontent.com/84349667/126212765-e986bca1-7f45-4c77-859b-8eca655fdb70.png)

![image](https://user-images.githubusercontent.com/84349667/126213211-5c47083f-f9d5-4b15-907a-ea66d2e8239d.png)

![image](https://user-images.githubusercontent.com/84349667/126213395-0a80bba5-79e3-4b53-afd8-94fb3ed6ff7a.png)

![image](https://user-images.githubusercontent.com/84349667/126213997-c70a3c0d-3597-43df-9bbf-21699228f97d.png)



# Overview

Clothing BIN website supports independent fashion designers to sell their products. The app makes the whole process easy by helping users connect directly with makers to find something extraordinary

# MVP
# Post-MVP

# clothing-bin
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

# Whimsical Diagram

![image](https://user-images.githubusercontent.com/84349667/126210996-d7639675-c9bc-4ded-872a-9a977c9a0904.png)

# Overview
# MVP
# Post-MVP

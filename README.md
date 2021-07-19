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
# Overview
# MVP
# Post-MVP

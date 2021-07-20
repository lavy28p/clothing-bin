import db from '../db/connection.js'
import Product from '../models/product.js'

const insertData = async () => {
  //reset db
  await db.dropDatabase()

  const products = [
    {
      "name": "Satin Dress",
      "price": "$59.99",
      "imageURL": "https://i.imgur.com/0Kaphcb.jpg",
      "description": "Calf-length dress in softly draped satin. V-neck, short sleeves, and wrapover front. Seam at waist with pleats and narrow ties at one side. Lined."
    },
    {
      "name": "Fitted Denim Dress",
      "price": "$24.99",
      "imageURL": "https://i.imgur.com/KNq7COH.jpg",
      "description": "Short, fitted dress in stretch denim. Extra-narrow shoulder straps and a concealed zipper at one side."
    },
    {
      "name": "Linen-blend Kaftan Dress",
      "price": "$99.00",
      "imageURL": "https://i.imgur.com/DYtMkEe.jpg",
      "description": "Calf-length dress in woven, linen-blend fabric with embroidered sections. Mandarin collar, buttons at front, long raglan sleeves with wide cuffs, and pleats and a tie belt at waist. Slits at sides of hem. Unlined."
    },
    {
      "name": "Sleeveless Dress",
      "price": "$39.99",
      "imageURL": "https://i.imgur.com/sGh0HWf.jpg",
      "description": "Sleeveless, calf-length dress in jersey with a slit at back of hem. Unlined."
    },
    {
      "name": "Lyocell-blend Shirt Dress",
      "price": "$29.99",
      "imageURL": "https://i.imgur.com/xxtu1pj.jpg",
      "description": "Relaxed-fit, calf-length dress in an airy, woven lyocell blend. Low-cut V-neck and pleat at front. Gently dropped shoulders, long sleeves with covered buttons at cuffs, and rounded hem, slightly longer at back. Unlined."
    },
    {
      "name": "Voluminous Maxi Dress",
      "price": "$34.99",
      "imageURL": "https://i.imgur.com/Mxsa55B.jpg",
      "description": "Ankle-length dress in an airy, woven viscose blend. Adjustable, extra-narrow shoulder straps, square neckline, and a seam below bust. Cut-out section at back with covered elastic and a decorative drawstring with long, narrow ties. Voluminous, flared skirt. Lined."
    },
  ]

  await Product.insertMany(products)
  console.log("Created products!!")

  //close db connection
  db.close()
}

insertData()
let card=document.querySelector(".card")

let mobiles=[
    {
      "brand": "Apple",
      "model": "iPhone 14 Pro",
      "releaseYear": 2023,
      "price": 999,
      "features": ["5G", "OLED Display", "Triple Camera", "Face ID", "A15 Bionic Chip"],
      "images": 'assets/14 pro.webp'
    },
    {
      "brand": "Samsung",
      "model": "Galaxy S23 Ultra",
      "releaseYear": 2023,
      "price": 1199,
      "features": ["5G", "AMOLED Display", "Quad Camera", "Fingerprint Sensor", "Exynos 2200"],
      "images": ["assets/samsung.webp"]
    },
    {
      "brand": "Google",
      "model": "Pixel 7",
      "releaseYear": 2023,
      "price": 899,
      "features": ["5G", "OLED Display", "Dual Camera", "Face Unlock", "Google Tensor Chip"],
      "images": ["assets/pixel.webp"]
    },
    {
      "brand": "OnePlus",
      "model": "9 Pro",
      "releaseYear": 2023,
      "price": 799,
      "features": ["5G", "Fluid AMOLED Display", "Quad Camera", "Fingerprint Sensor", "Snapdragon 888"],
      "images": ["assets/ne plus.webp"]
    },
    {
      "brand": "Xiaomi",
      "model": "Mi 12",
      "releaseYear": 2023,
      "price": 699,
      "features": ["5G", "AMOLED Display", "Triple Camera", "Face Unlock", "Snapdragon 8 Gen 1"],
      "images": ["assets/mi.webp"]
    },
    {
      "brand": "Sony",
      "model": "Xperia 1 III",
      "releaseYear": 2023,
      "price": 1199,
      "features": ["5G", "OLED Display", "Triple Camera", "Fingerprint Sensor", "Snapdragon 888"],
      "images": ["assets/sony.webp"]
    },
    {
      "brand": "LG",
      "model": "Velvet 2 Pro",
      "releaseYear": 2023,
      "price": 699,
      "features": ["5G", "P-OLED Display", "Triple Camera", "Fingerprint Sensor", "Snapdragon 765G"],
      "images": ["assets/lg.webp"]
    },
    {
      "brand": "Huawei",
      "model": "P50 Pro",
      "releaseYear": 2023,
      "price": 899,
      "features": ["5G", "OLED Display", "Quad Camera", "Face Unlock", "Kirin 9000"],
      "images": ["assets/huawei.webp"]
    },
    {
      "brand": "Oppo",
      "model": "Find X5 Pro",
      "releaseYear": 2023,
      "price": 999,
      "features": ["5G", "AMOLED Display", "Quad Camera", "Fingerprint Sensor", "Snapdragon 888"],
      "images": ["assets/oppo.webp"]
    },
    {
      "brand": "Vivo",
      "model": "X70 Pro+",
      "releaseYear": 2023,
      "price": 1199,
      "features": ["5G", "AMOLED Display", "Quad Camera", "Face Unlock", "Snapdragon 888+"],
      "images": ["assets/vivo].webp"]
    },
    {
      "brand": "Nokia",
      "model": "X50",
      "releaseYear": 2023,
      "price": 599,
      "features": ["5G", "PureDisplay", "Triple Camera", "Fingerprint Sensor", "Snapdragon 765G"],
      "images": ["assets/nokia.webp"]
    },
    {
      "brand": "Motorola",
      "model": "Edge 40 Pro",
      "releaseYear": 2023,
      "price": 899,
      "features": ["5G", "OLED Display", "Triple Camera", "Fingerprint Sensor", "Snapdragon 888"],
      "images": ["assets/motto.webp"]
    },
    {
      "brand": "Asus",
      "model": "ROG Phone 6",
      "releaseYear": 2023,
      "price": 1099,
      "features": ["5G", "AMOLED Display", "Triple Camera", "Fingerprint Sensor", "Snapdragon 8 Gen 1"],
      "images": ["assets/asus.webp"]
    },
    {
      "brand": "Realme",
      "model": "GT 2 Pro",
      "releaseYear": 2023,
      "price": 699,
      "features": ["5G", "AMOLED Display", "Triple Camera", "Fingerprint Sensor", "Snapdragon 8 Gen 1"],
      "images": ["assets/realme.webp"]
    },
    {
      "brand": "ZTE",
      "model": "Axon 30 Ultra",
      "releaseYear": 2023,
      "price": 799,
      "features": ["5G", "AMOLED Display", "Quad Camera", "Fingerprint Sensor", "Snapdragon 888"],
      "images": ["assets/zte.webp"]
    },
    {
      "brand": "Lenovo",
      "model": "Legion Phone Duel 2",
      "releaseYear": 2023,
      "price": 899,
      "features": ["5G", "AMOLED Display", "Dual Camera", "Fingerprint Sensor", "Snapdragon 888"],
      "images": ["assets/lenovo.webp"]
    },
    {
      "brand": "Honor",
      "model": "Magic4 Pro",
      "releaseYear": 2023,
      "price": 999,
      "features": ["5G", "AMOLED Display", "Quad Camera", "Face Unlock", "Snapdragon 8 Gen 1"],
      "images": ["assets/h2.webp"]
    },
    {
      "brand": "Meizu",
      "model": "18 Pro",
      "releaseYear": 2023,
      "price": 799,
      "features": ["5G", "AMOLED Display", "Quad Camera", "Fingerprint Sensor", "Snapdragon 888"],
      "images": ["assets/meizu.webp"]
    },
    {
      "brand": "HTC",
      "model": "U21 Pro",
      "releaseYear": 2023,
      "price": 699,
      "features": ["5G", "IPS LCD Display", "Quad Camera", "Fingerprint Sensor", "Snapdragon 765G"],
      "images": ["assets/htc.webp"]
    },
    {
      "brand": "Alcatel",
      "model": "3L 2023",
      "releaseYear": 2023,
      "price": 199,
      "features": ["4G", "IPS LCD Display", "Triple Camera", "Fingerprint Sensor", "Mediatek Helio P22"],
      "images": ["assets/Alcatel.webp"]
    }
  ]
  

  for (keys in mobiles){
    card.innerHTML+=`
    
    <div class="card all_cards" style="width:25% ">
  <img src="${mobiles[keys].images}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">Brand : ${mobiles[keys].brand}</h3>
    <h5 class="card-text">Model : ${mobiles[keys].model}</h5>
    <h5 class="card-text">ReleaseYear : ${mobiles[keys].releaseYear}</h5>
    <h5 class="card-text">price : ${mobiles[keys].price}</h5>
    
    <a href="#" class="btn btn-primary button" onclick=" buynow()">Add To Cart</a>
  </div>
</div>`
  }


  function buynow(){
    Swal.fire({
        title: "Product is Added to Cart !",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    
  }
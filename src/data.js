const products=[
           { id:1,
            name:"Apple iPhone 17 Pro Max, 1TB",
            price:129999,
            rating:4.5,
            discount:"15% OFF",
            image:"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317417_0_7ISiBcc4Y.png?updatedAt=1757529273198",
            isBestSeller:true,
            brand:"Apple"
           },
           {
            id:2,
            name:"iPad Pro 13-Inch (M4): XDR Display, 512GB",
            price:89999,
            rating:4.9,
            discount:"35% OFF",
            image:"https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264226_fefcjf.png",
            isBestSeller:true,
            brand:"Apple"

           },
           {
            id:3,
             name:"Samsung S24 Ultra",
            price:119000,
            rating:4.0,
            discount:"10% OFF",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYbCaCkrS5ws1GfsRh3g3nIYNsA79gaN0hEiuTI-tgw&s=10",
            isBestSeller:true,
            brand:"Samsung"

           },
           {
  id: 4,
  name: "Samsung Galaxy S24 Ultra: 12GB RAM, 256GB",
  price: 109999,
  rating: 4.7,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
  isBestSeller: true,
  brand:"Samsung"
},
{
  id: 5,
  name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
  price: 29990,
  rating: 4.8,
  discount: "30% OFF",
  image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
  isBestSeller: true,
  brand:"Sony"
},
{
  id: 6,
  name: "Apple AirPods Pro 2nd Generation",
  price: 24900,
  rating: 4.7,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
  isBestSeller: true,
  brand:"Apple"
},
{
  id: 7,
  name: "Apple Watch Series 10 GPS 46mm",
  price: 46900,
  rating: 4.6,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26",
  isBestSeller: false,
  brand:"Apple"
},
{
  id: 8,
  name: "Dell Inspiron 15: Intel Core i5, 16GB RAM",
  price: 64990,
  rating: 4.4,
  discount: "28% OFF",
  image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
  isBestSeller: false,
  brand:"Dell"
},
{
  id: 9,
  name: "HP Pavilion 14: Intel Core i5, 16GB RAM, 512GB SSD",
  price: 61990,
  rating: 4.5,
  discount: "22% OFF",
  image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  isBestSeller: false,
  brand:"HP"
},
{
  id: 10,
  name: "Lenovo IdeaPad Slim 5: Ryzen 7, 16GB RAM",
  price: 57990,
  rating: 4.6,
  discount: "24% OFF",
  image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef",
  isBestSeller: true,
  brand:"Lenovo"
},
{
  id: 11,
  name: "ASUS ROG Gaming Laptop: RTX 4060, 16GB RAM",
  price: 119990,
  rating: 4.8,
  discount: "17% OFF",
  image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f",
  isBestSeller: true,
  brand:"Asus"
},
{
  id: 12,
  name: "Google Pixel 9 Pro: 256GB, 16GB RAM",
  price: 109999,
  rating: 4.7,
  discount: "12% OFF",
  image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  isBestSeller: true,
  brand:"Google"
},
{
  id: 13,
  name: "OnePlus 13: 16GB RAM, 512GB Storage",
  price: 69999,
  rating: 4.6,
  discount: "10% OFF",
  image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  isBestSeller: false,
  brand:"OnePlus"
},
{
  id: 14,
  name: "Samsung Galaxy Tab S10 Ultra: 512GB",
  price: 99999,
  rating: 4.7,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
  isBestSeller: true,
  brand:"Samsung"
},
{
  id: 15,
  name: "Amazon Kindle Paperwhite: 16GB",
  price: 14999,
  rating: 4.8,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1592496001020-d31bd830651f",
  isBestSeller: false,
  brand:"Amazon"
},
{
  id: 16,
  name: "Sony Bravia 55-Inch 4K Ultra HD Smart TV",
  price: 74990,
  rating: 4.6,
  discount: "32% OFF",
  image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
  isBestSeller: true,
  brand:"Sony"
},
{
  id: 17,
  name: "Samsung 55-Inch Crystal 4K Smart TV",
  price: 54990,
  rating: 4.5,
  discount: "35% OFF",
  image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
  isBestSeller: false,
  brand:"Samsung"
},
{
  id: 18,
  name: "LG 65-Inch OLED 4K Smart TV",
  price: 129990,
  rating: 4.8,
  discount: "27% OFF",
  image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
  isBestSeller: true,
  brand:"OLG"
},
{
  id: 19,
  name: "JBL Charge 5 Portable Bluetooth Speaker",
  price: 13999,
  rating: 4.7,
  discount: "25% OFF",
  image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
  isBestSeller: true,
  brand:"JBL"
},
{
  id: 20,
  name: "Bose SoundLink Flex Bluetooth Speaker",
  price: 14900,
  rating: 4.6,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
  isBestSeller: false,
  brand:"BOSCH"
},
{
  id: 21,
  name: "Logitech MX Master 3S Wireless Mouse",
  price: 8995,
  rating: 4.8,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  isBestSeller: true,
  brand:"LogiTech"
},
{
  id: 22,
  name: "Keychron K2 Mechanical Wireless Keyboard",
  price: 8999,
  rating: 4.7,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  isBestSeller: false,
  brand:"Keychron"
},
{
  id: 23,
  name: "Apple Magic Keyboard with Touch ID",
  price: 14900,
  rating: 4.6,
  discount: "12% OFF",
  image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  isBestSeller: true,
  brand:"Apple"
},
{
  id: 24,
  name: "WD 1TB Portable External SSD",
  price: 8990,
  rating: 4.5,
  discount: "30% OFF",
  image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
  isBestSeller: false,
  brand:"WD"
},
{
  id: 25,
  name: "Samsung 1TB Portable SSD T7",
  price: 9999,
  rating: 4.8,
  discount: "26% OFF",
  image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
  isBestSeller: true,
  brand:"Samsung"
},
{
  id: 26,
  name: "SanDisk 256GB Ultra microSD Card",
  price: 2499,
  rating: 4.5,
  discount: "40% OFF",
  image: "https://images.unsplash.com/photo-1562976540-1502c2145186",
  isBestSeller: false,
  brand:"SanDisk"
},
{
  id: 27,
  name: "Anker 737 Power Bank 24000mAh",
  price: 12999,
  rating: 4.7,
  discount: "22% OFF",
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlm-nkDOalQjG0wRtpNEmaj29UzNtBbiq-he2M4GOmCwfC6fSsnlSHFEOMD_Fo5DMVn1ovWKoTPSsCXmr1CeepQWz1QOZnom3W3CD5Ggfbth41zitWaKKdXnCDeHNEeq36YtLmDJ0&usqp=CAc",
  isBestSeller: true,
  brand:"Anker"
},
{
  id: 28,
  name: "Apple 20W USB-C Power Adapter",
  price: 1990,
  rating: 4.7,
  discount: "10% OFF",
  image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
  isBestSeller: false,
  brand:"Apple"
},
{
  id: 29,
  name: "Belkin 3-in-1 Wireless Charging Station",
  price: 12999,
  rating: 4.5,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
  isBestSeller: false,
  brand:"Belkin"
},
{
  id: 30,
  name: "DJI Mini 4 Pro Camera Drone",
  price: 89990,
  rating: 4.8,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
  isBestSeller: true,
  brand:"DJI"
},
{
  id: 31,
  name: "GoPro HERO13 Black Action Camera",
  price: 44990,
  rating: 4.7,
  discount: "18% OFF",
  image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352",
  isBestSeller: true,
  brand:"GoPro"
},
{
  id: 32,
  name: "Canon EOS R50 Mirrorless Camera",
  price: 68990,
  rating: 4.6,
  discount: "14% OFF",
  image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  isBestSeller: false,
  brand:"Canon"
},
{
  id: 33,
  name: "Fujifilm Instax Mini 12 Instant Camera",
  price: 7999,
  rating: 4.7,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  isBestSeller: true,
  brand:"Fujifilm"
},
{
  id: 34,
  name: "Apple Mac Mini M4: 16GB RAM, 256GB SSD",
  price: 59900,
  rating: 4.8,
  discount: "12% OFF",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  isBestSeller: true,
  brand:"Apple"
},
{
  id: 35,
  name: "Microsoft Surface Laptop 7: 16GB RAM, 512GB",
  price: 99990,
  rating: 4.6,
  discount: "20% OFF",
  image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  isBestSeller: false,
  brand:"Microsoft"
},
{
  id: 36,
  name: "Nothing Phone 3: 12GB RAM, 256GB Storage",
  price: 54999,
  rating: 4.5,
  discount: "15% OFF",
  image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  isBestSeller: false,
  brand:"Nothing"
},
{
  id: 37,
  name: "Apple iPhone 16 Pro: 256GB",
  price: 119900,
  rating: 4.9,
  discount: "8% OFF",
  image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
  isBestSeller: true,
  brand:"Apple"
},


]
export default products;

import Home from "./pages/Home"
export const products = [{
  id:1,
  category:"Smartphones",
  title:"Samsung Galaxy S24 Ultra",
  rating:4.5,
  price:2000,
  originalPrice:3000,
  description:["Packed with 50MP Camera","Super Amoled 4K Display","Sleek Body Design","16GB Ram"]
},
{
  id:2,
  category:"Smartphones",
  title:"Apple iPhone 16 Pro",
  rating:4.3,
  price:1500,
  originalPrice:2000,
  description:["Super Retina Display","HDR Camera with 4K Shooting","Full Metal Body Design","12GB Ram"]
},
{
  id:3,
  category:"Smartphones",
  title:"Oppo X113 Pro",
  rating:3.8,
  price:1700,
  originalPrice:2300,
  description:["High Resolution Crisp Display","Low Light Camera with Ultra HD Photos","Leather Body Design","Snapdragon 8X Chipset"]
},{
  id:4,
  category:"Laptops",
  title:"Dell Inspiron X15",
  rating:4.4,
  price:3000,
  originalPrice:4000,
  description:["Pre Installed Windows 11 Pro","Super Responsive Touch Display","Sleek Design with Thin Bezels","32GB Ram with NVIDIA RTX 4010"]
},
{
  id:5,
  category:"Laptops",
  title:"Apple Macbook M2",
  rating:4.8,
  price:4000,
  originalPrice:5000,
  description:["Latest Super Fast M2 Chip","4K 60fps Retina Display","Full Metal Body with thin bezels","Intel Core i9 with 16GB Ram"]
},
{
  id:6,
  category:"Laptops",
  title:"HP Slate T3",
  rating:3.7,
  price:1000,
  originalPrice:1500,
  description:["Pre Installed Windows 11 Home","Super HD 1080p Touch Display","Metal Design with HD Camera","12GB Ram with Intel Core i7 and RTX 4010"]
},
{
  id:7,
  category:"Headphones",
  title:"Apple Airpods Pro",
  rating:4.6,
  price:800,
  originalPrice:1000,
  description:["Crystal Clear Surround Sound ","Easy Connectivity","Long Battery Life with upto 26hrs playback.","Fast Charging with 100W charger"]
},
{
  id:8,
  category:"Headphones",
  title:"JBL J20 Headphones",
  rating:4.2,
  price:1500,
  originalPrice:1800,
  description:["Extra Bass for more advanced sound","Light Weight and Sleek Design","Dolby Atmos Sound","Available in beautiful colors."]
},
{
  id:9,
  category:"Headphones",
  title:"Beats A100",
  rating:4.9,
  price:2000,
  originalPrice:3000,
  description:["Super clear and smooth sound with focus on lows.","Easy to Pair and Carry","Upto 48hours of battery usage ","Available in many colors"]
},
{
  id:10,
  category:"Tablets",
  title:"Apple Ipad Pro",
  rating:3.4,
  price:2700,
  originalPrice:3000,
  description:["Super Responsive and clear Retina Display","Comes with Apple Pencil","Very Useful for Editing and Design Purposes","Thin and Metallic Body"]
},
{
  id:11,
  category:"Tablets",
  title:"Samsung Galaxy Tab Pro",
  rating:4.4,
  price:700,
  originalPrice:1000,
  description:["Amoled Full HD Display","Comes with latest Android","Very Useful for Entertainment and Study Purposes","Full Metallic Body Design"]
},
{
  id:12,
  category:"Tablets",
  title:"Oppo Tablet X23",
  rating:2.4,
  price:500,
  originalPrice:600,
  description:["Clean and colorful User Interface with many inbuilt features","Big and Colorful Display","Perfect for Games and Movies","Plastic Body"]
},
{
  id:13,
  category:"Smartwatches",
  title:"Apple Watch Ultra 2",
  rating:4.8,
  price:1800,
  originalPrice:2000,
  description:["Dust and Water Resistant","Comes with advanced features like Activity and Heart Rate Sensor","Very Strong Built with military grade toughness","Large and Retina Display"]
},
{
  id:14,
  category:"Smartwatches",
  title:"Pixel Watch 3",
  rating:3.9,
  price:2200,
  originalPrice:2300,
  description:["Minimal and Round Design","Most Accurate Heart Rate sensor","Dust and Water Resistant","With very colorful bands"]
},{
  id:15,
  category:"Smartwatches",
  title:"Samsung Galaxy Watch",
  rating:4.5,
  price:1700,
  originalPrice:2500,
  description:["Advanced AI Galaxy Features for Fitness Tracking","Comes with highly accurate sensors","Stylish and Sleek Design","Classy Leather Straps and Big clear display."]
},
]
export default function App(){
 
  

  return(
    <>
    <Home/>
    </>
  )

}
import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptios.css"
import { useLocation } from 'react-router-dom'


const NavOptios = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
    const [tvToggle,setTvToggle] = useState(false);
    const [laptopToggle,setLaptopToggle] = useState(false);
    const [fitnessToggle,setFitnessToggle] = useState(false);
    const [homeToggle,setHomeToggle] = useState(false);
    const [audioToggle,setAudioToggle] = useState(false);
    const [accessoriesToggle,setAccessoriesToggle] = useState(false);
    const location = useLocation();
  
    const path= window.location.href; 
    useEffect(() => {
      setMiPhoneToggle(false)
      setRedmiPhoneToggle(false)
      setTvToggle(false)
      setLaptopToggle(false)
     setFitnessToggle(false)
     setHomeToggle(false)
     setAudioToggle(false)
     setAccessoriesToggle(false)

      console.log(path)
     if(path === "http://localhost:3000/#miphones"){
         return   setMiPhoneToggle(true)
        }
      if(path === "http://localhost:3000/#redmiphones"){
         return   setRedmiPhoneToggle(true)
        }   
        if(path === "http://localhost:3000/#tv"){
         return   setTvToggle(true)
        }
        if(path === "http://localhost:3000/#laptops"){
         return   setLaptopToggle(true)
        }
        if(path === "http://localhost:3000/#lifestyle"){
         return  setFitnessToggle(true)
        }
        if(path === "http://localhost:3000/#home"){
         return  setHomeToggle(true)
        }
        if(path === "http://localhost:3000/#audio"){
         return  setAudioToggle(true)
        }
        
        if(path === "http://localhost:3000/#accessories"){
         return  setAccessoriesToggle(true)
        }
 
        
    }, [path, location])
  return (
    <div className="navOptions"> 

    {miPhoneToggle?   miPhones.map((item)=>(

         < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null }
    

    {redmiPhoneToggle?   redmiPhones.map((item)=>(

       < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
   )) : null }


    {tvToggle ?   tv.map((item)=>(

        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
   )) : null }

   {laptopToggle ?   laptop.map((item)=>(

      < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
   )) : null }



    {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

      < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
   )) : null }


       {homeToggle ?   home.map((item)=>(

           < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null }



    {audioToggle ?   audio.map((item)=>(

     < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
    )) : null }


    {accessoriesToggle ?   accessories.map((item)=>(

        < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
     )) : null }

</div>
    
  )
}

export default NavOptios
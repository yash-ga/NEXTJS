import { useEffect, useState } from "react"
import styles from  "../styles/Home.module.css"

 export function Home(){
   const [arr,setArr]=useState([])
   async function some(){
     const res=await fetch("https://itunes.apple.com/in/rss/topalbums/limit=25/json");
     const data=await res.json()
     console.log(data["feed"]["entry"][0]["id"].attributes["im:id"]);
     setArr     (data["feed"]["entry"])
    
   }
   useEffect(()=>{
    some()
   },[])
   console.log(arr);
  return(
    <div className={styles.main}>

{arr.map((e,i)=>{
  return(
    <div className={styles.each} >

    <div  key={i}>
      <h1>{e["im:artist"].label}</h1>
      <img className={styles.img} src={e["im:image"][2].label}/>
      <h3>{e.title.label}</h3>
      <h4>{e["im:releaseDate"].attributes.label}</h4>
    </div>
    </div>
  )
})}

  
        </div>
  )
}
export default Home
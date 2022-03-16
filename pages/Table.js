import { useEffect, useState } from "react"
// import styles from  "../styles/Home.module.css"
import styles from "../styles/Table.module.css"

  export function Table(){
   const [arr,setArr]=useState([])
   async function some(){
     const res=await fetch("https://itunes.apple.com/in/rss/topalbums/limit=25/json");
     const data=await res.json()
     console.log(data["feed"]["entry"]);
     setArr     (data["feed"]["entry"])
    
   }
   useEffect(()=>{
    some()
   },[])
   console.log(arr);
  return(
    <div >
            <h1 className={styles.heading}>TASK ON TABLE</h1>
    <table className={styles.table}>
        <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Image</th>
            <th className={styles.th}>Label</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Rights</th>

        </tr>

          {arr.map((e,i)=>{
            return(
              <tr key={i}>

            <td className={styles.td}>{e.category.attributes["im:id"]}</td>
            <td className={styles.th}><img className={styles.img} src={e["im:image"][2].label}/></td>
            <td className={styles.td}>{e.category.attributes.label}</td>
              <td className={styles.td}>{e["im:artist"].label}</td>
            <td className={styles.td}>{e["im:price"].attributes.amount}</td>
            <td className={styles.td}>{e.rights.label}</td>
            </tr>
            )
          })}
    </table>

  
        </div>
  )
}
export default Table
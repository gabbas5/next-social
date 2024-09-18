"use client"
import {useState} from "react"
import Link from "next/link"
import styles from "@/components/styles/mobileMenue.module.css"

const MobileMenu = () => {
    const[isOpen, setIsOpen]=useState(false)

    const links=[
        {
          title:"Home",
          href: "/"
         
    
      },
    {
       title:"Friends",
          href: "/"
    },
    {
       title:"Groups",
        href: "/"
    },
    {
       title:"Stories",
        href: "/"
    },
    {
       title:"Profile",
        href: "/"
    },

    ]
  return (
    <div className="md:hidden">

    <div className={styles.container} onClick={()=>(
        setIsOpen((prev)=>!prev)
    )}> 
       
       { isOpen ? <div className={styles.menueItem1}/> : <div className={styles.menue}/>}
       { isOpen ? <div className={styles.menueItem2}/> : <div className={styles.menue}/>}
       { isOpen ? <div className={styles.menueItem3}/> : <div className={styles.menue}/>}
              
        {isOpen && (<div className={styles.menuelink}> 
         {links.map((link)=>
       <Link className={styles.link} href={link.href} key={link.title}>{link.title}</Link>
    )}  
        </div>
    )}
    </div>
    
    </div>
   
  )
}

export default MobileMenu
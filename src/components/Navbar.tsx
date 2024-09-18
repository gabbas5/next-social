import styles from "@/components/styles/navbar.module.css"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs"
const Navbar = () => {
 
  return (
    <div className={styles.container}>
      {/* left side */}
      <div className="hidden lg:block w-[20%]" >
       <Link href="/" className={styles.logo}> G.Abbas Development</Link>
      </div>
         {/* ccenter */}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* Links */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2">
          <Image src="/home.png" alt="Homepage" width={16} height={16}
           />
           <span>Homepage</span>
          </Link>
          <Link href="/"  className="flex gap-2">
          <Image src="/home.png" alt="Homepage" width={16} height={16}
           />
           <span>Friends</span>
          </Link>
          <Link href="/"  className="flex gap-2">
          <Image src="/home.png" alt="Homepage" width={16} height={16}
           />
           <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* right side */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
       <ClerkLoading>
       <span className={styles.loader}></span>
       </ClerkLoading>
       <ClerkLoaded>
        <SignedIn>
          <div className="cursor-pointer">
        <Image src="/people.png" alt="" width={20} height={20} /></div>
        <div className="cursor-pointer">
        <Image src="/messages.png" alt="" width={20} height={20} /></div>
        <div className="cursor-pointer">
        <Image src="/notifications.png" alt="" width={20} height={20} /></div>
        <UserButton/>
        </SignedIn>
        <SignedOut>
          <div className=" flex items-center gap-2 text-sm">
            <Image src="/login.png" alt="" width={20} height={20} />
            <Link href="/sign-in">Login/Register</Link>
          </div>
        </SignedOut>
       </ClerkLoaded>
       <MobileMenu />
     </div>
    </div>

      )}
export default Navbar;
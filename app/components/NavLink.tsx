import Link from "next/link";

type Props ={
    category:String;
    isActive:boolean;
}

function NavLink({category,isActive}:Props) {
  return (
    <Link href={`/${category}`} className={`navLink ${isActive && 'underline decoration-blue-400 underline-offset-4 font-bold text-lg'}`}>
        {category}
    </Link>
  )
}

export default NavLink
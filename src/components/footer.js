import Link from 'next/link'

const links = [
 { to: '/#restaurant', label: 'Conoce nuestras sucursales' },
  { to: '/#about', label: 'Acerca de' },
  { to: '/#restaurant', label: 'Conoce nuestras sucursales' },
  { to: '/#testimonial', label: '¿Qué hablan de nosotros?' },
  { to: '/#contact', label: 'Contáctanos' },
]
const links2 = [
 { to: '/#restaurant', label: 'PLAYSTORE' },
  { to: '/#about', label: 'IOS' }
 
]

export default function Footer() {
  return (
    <footer className='grid grid-cols-1 divide-y divide-yellow-500  md:p-7 '>
        <div className='flex flex-col items-center justify-between md:flex-row p-8'>
            <h1 className='text-left text-4xl mb-8 md:mb-0'>
            Foodies
             </h1>
              <ul className="flex items-center justify-between md: space-x-4">
             <img src="footer/app-store.png" alt="AppStore Icon" />
          <img src="footer/play-store.png" alt="PlayStore Icon" />
        </ul>
        </div>
       <ul className="flex flex-col items-center md:flex-row space-x-6 p-2">
          {links.map(({ to, label }) => (
            <li key={`${to}${label}`}>
              <Link href={to} className="no-underline">
               <a>{label}</a> 
              </Link>
            </li>
          ))}
        </ul>
    </footer>
  )
}

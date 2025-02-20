import Link from 'next/link';


const Footer = () => {

   const currentYear = new Date().getFullYear();

   return (
      <footer className="py-8 border-t">
         <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between md:flex-row">
               <p className="text-sm text-muted-foreground">
                © {currentYear} Khant Lin Thein. All rights reserved.
               </p>

               <div className="flex mt-4 space-x-4 md:mt-0">
                  <Link href="https:/pornhub.com" target="_blank" rel="noopener noreferrer" className="transition-colors text-muted-foreground hover:text-foreground">GitHub</Link>
                  <Link href="https:/pornhub.com" target="_blank" rel="noopener noreferrer" className="transition-colors text-muted-foreground hover:text-foreground">LinkedIn</Link>
                  <Link href="https:/pornhub.com" target="_blank" rel="noopener noreferrer" className="transition-colors text-muted-foreground hover:text-foreground">Twitter</Link>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;
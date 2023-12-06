import ThemeToggle from '@/components/ThemeToggle'
import ImugyLogo from '@/components/ImugyLogo'


export const Header = () => {
    return (
        <header className='max-w-5xl mx-auto flex p-4 justify-between items-center'>
           <ImugyLogo />
           <ThemeToggle /> 
        </header>
    )
}

export default Header; 

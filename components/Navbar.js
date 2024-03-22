import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="flex flex-wrap justify-center w-full p-4">
            <div className="w-48 md:w-64 lg:w-1/4">
                <Image
                    src="/logo.jpeg"
                    alt="City driving school logo, a blue steering wheel."
                    layout='responsive'
                    width={100}
                    height={40}
                />
            </div>
        </nav>
    )
}

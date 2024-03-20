import Image from 'next/image'

export default function Navbar() {
    return (
        <>
            <div>
                <Image
                    src="/logo.jpeg"
                    alt="City driving school logo, a blue steering wheel."
                    width={200}
                    height={80}
                />
            </div>

        </>
    )
}

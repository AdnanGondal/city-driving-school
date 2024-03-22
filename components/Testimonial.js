export default function TestimonialCard({ name, text }) {
    return (
        <div className="m-2 flex-1 min-w-full sm:min-w-0 sm:w-2/5 lg:w-1/4 px-2 py-4">
            <div className="px-4 py-2 bg-white rounded-xl shadow-md overflow-hidden text-center font-semibold space-y-2">
                <div className="overflow-hidden hover:overflow-auto max-h-48 text-gray-500 text-xs md:text-sm">
                    <p>"{text}"</p>
                </div>
                <h3 className="text-md md:text-base">- {name}</h3>
            </div>
        </div>
    )
}
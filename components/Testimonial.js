export default function TestimonialCard({ name, text }) {
    return (
        <div className="w-96 h-54 px-8 py-6 bg-white rounded-xl shadow-md text-center font-semibold">
            <div className="h-36 overflow-y-auto">
                <p className="text-sm text-gray-700">{text}</p>
            </div>
            <p className="text-md text-red-500 mt-4">{name}</p>
        </div>
    );
}

import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faQuoteLeft)

export default function TestimonialCard({ name, text, icon }) {
    return (
        <div className="w-96 h-96 px-8 py-6 bg-white rounded-xl shadow-md text-center border border-gray-200 flex flex-col justify-center items-center">
            <div className="mb-4">
                <FontAwesomeIcon className="text-xl " icon={faQuoteLeft} />
            </div>
            <div className="h-64  flex flex-col items-center">
                <p className="text-gray-600 overflow-y-auto">{text}</p>
                <p className="text-xl text-red-500 font-semibold mt-4 ">{name}</p>
            </div>
        </div>
    );
}

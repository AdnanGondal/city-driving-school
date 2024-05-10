import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faWhatsapp)

export default function FloatingWhatsapp() {
    return (
        <div className="fixed bottom-8 right-8 z-10">
            <a href="https://wa.me/447879391886" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 bg-white rounded-full border border-gray-100 shadow-lg">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-3xl" />
            </a>
        </div>
    )
}

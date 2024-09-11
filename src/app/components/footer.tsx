import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">AURA</h2>
          </div>
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">CONTACTO</h3>
            <p className="mb-1">123-456-7890</p>
            <p className="mb-2">info@aura.com</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/aura_mexico/">
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
              </a>
              <a href="https://github.com/AuraMexico">
                <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">DIRECCION</h3>
            <p className="mb-1">123 calle,</p>
            <p>Ciudad, Estado, Codigo postal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

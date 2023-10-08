import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Follow Us:</p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/eclub.vt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaInstagram className='text-4xl' />
            </a>
            <a
              href="https://www.linkedin.com/company/vteclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaLinkedin className='text-4xl' />
            </a>
          </div>
        </div>
        <div className="mt-10"></div>
        {/* <div>
          <a
            href="[Insert Discord Link]"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white p-4 rounded-full font-semibold hover:bg-purple-600 transition duration-300"
          >
            <FaDiscord className="inline-block mr-2 text-xl" />
            Join Discord
          </a>
        </div> */}
        <div className="mb-10"></div>
      </div>
    </div>
  );
};

export default Footer;

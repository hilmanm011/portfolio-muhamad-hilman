import { AiOutlineDownload } from 'react-icons/ai';

const DownloadSection = () => {
return (
    <div className="flex items-center space-x-2">
    <a
        href="/assets/pdf/Resume-Muhamad-Hilman-Fullstack-Developer.pdf"
        download
        className="flex items-center space-x-2"
    >
        <AiOutlineDownload 
        className="cursor-pointer text-gray-600" 
        size={24} // Adjust the size as needed
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
        Download Resume PDF
        </p>
    </a>
    </div>
);
};

export default DownloadSection;

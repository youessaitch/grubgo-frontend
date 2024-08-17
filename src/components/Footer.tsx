const Footer = () => {
  return (
    <div className="bg-red py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Grubgo
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>© 2024 Grubgo. All rights reserved.</span>
          {/* <a
            href="https://www.linkedin.com/in/ayush-kr-iitkgp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Contact</span>
          </a> */}
        </span>
      </div>
    </div>
  );
};

export default Footer;

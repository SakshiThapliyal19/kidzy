const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg font-trap font-medium">© 2025 Kidzy. All Rights Reserved.</p>
        <p className="text-lg font-trap">
          Contact: <a href="mailto:support@kidzy.com" className="text-indigo-600 hover:underline">support@kidzy.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

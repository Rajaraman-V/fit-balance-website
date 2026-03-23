import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-8 bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="FitBalance" className="h-8 w-8 object-contain" />
        <span className="font-heading font-bold">FitBalance</span>
      </div>
      <p className="text-sm text-secondary-foreground/60">
        © {new Date().getFullYear()} FitBalance. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

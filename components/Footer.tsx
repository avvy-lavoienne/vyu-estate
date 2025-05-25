import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Vyu-Estate", href: "/about" },
      { name: "Our Mission", href: "/about#mission" },
      { name: "Our Vision", href: "/about#vision" },
      { name: "Core Values", href: "/about#values" },
      { name: "Leadership Team", href: "/about#team" },
    ],
  },
  {
    title: "Projects",
    links: [
      { name: "Residential Communities", href: "/properties" },
      { name: "Luxury Residences", href: "/properties#luxury" },
      { name: "Affordable Housing", href: "/properties#affordable" },
      { name: "Sustainable Developments", href: "/properties#sustainable" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Master Planning", href: "/services#planning" },
      { name: "Architectural Design", href: "/services#design" },
      { name: "Construction Management", href: "/services#construction" },
      { name: "Property Development", href: "/services#development" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Customer Service", href: "/contact#support" },
      { name: "Project Inquiries", href: "/contact#inquiries" },
      { name: "Partnership", href: "/contact#partnership" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-foreground">Vyu-Estate</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">Building Homes, Shaping Futures</p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@vyuapp.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+62 838-2137-3804</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="leading-relaxed">
                  Perum Griya Mutiara Rancabango Blok C.40
                  <br />
                  Desa Rancabango, Kec. Tarogong Kaler
                  <br />
                  Kab. Garut, Jawa Barat 44151
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-foreground font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <span className="text-muted-foreground text-sm">©2024 Vyu-Estate. All Rights Reserved.</span>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

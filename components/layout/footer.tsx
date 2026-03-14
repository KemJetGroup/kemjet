import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Logo from "@/components/layout/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] border-t border-[#2A2A2A] text-white py-16">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Logo />
            {/* <p className="text-[#DBDBDB] text-[14px] font-inter leading-relaxed">
              Building A.I powering next-generation therapeutics.
            </p> */}
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-white font-inter font-semibold text-[14px] uppercase mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#DBDBDB] hover:text-[#19FB9B] transition-colors text-[14px] font-inter"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-[#DBDBDB] hover:text-[#19FB9B] transition-colors text-[14px] font-inter"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#DBDBDB] hover:text-[#19FB9B] transition-colors text-[14px] font-inter"
                >
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h4 className="text-white font-inter font-semibold text-[14px] uppercase mb-4">
              Community
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DBDBDB] hover:text-[#1FCFF1] transition-colors text-[14px] font-inter"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DBDBDB] hover:text-[#FFD512] transition-colors text-[14px] font-inter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DBDBDB] hover:text-[#1FCFF1] transition-colors text-[14px] font-inter"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-inter font-semibold text-[14px] uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#DBDBDB] hover:text-[#19FB9B] transition-colors text-[14px] font-inter"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[#DBDBDB] hover:text-[#19FB9B] transition-colors text-[14px] font-inter"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-[#898989] text-[12px] font-inter mb-4 lg:mb-0">
            © {currentYear} Kemjet. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DBDBDB] hover:text-[#1FCFF1] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DBDBDB] hover:text-[#FFD512] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DBDBDB] hover:text-[#1FCFF1] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

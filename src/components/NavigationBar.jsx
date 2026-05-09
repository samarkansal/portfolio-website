/* eslint-disable react/prop-types */
import React from "react";

const links = [
  { href: "#",          label: "Home",       icon: "fa-home",         section: "" },
  { href: "#about",     label: "About",      icon: "fa-address-card", section: "about" },
  { href: "#experience",label: "Experience", icon: "fa-briefcase",    section: "experience" },
  { href: "#projects",  label: "Projects",   icon: "fa-user-tie",     section: "projects" },
  { href: "#skills",    label: "Skills",     icon: "fa-code",         section: "skills" },
  { href: "#education", label: "Education",  icon: "fa-graduation-cap", section: "education" },
  { href: "#contact",   label: "Contact",    icon: "fa-envelope",     section: "contact" },
];

const NavigationBar = ({ isOpen, activeSection }) => {
  return (
    <div className={`navigation-bar ${isOpen ? "open" : ""}`}>
      <ul>
        {links.map(({ href, label, icon, section }) => (
          <li key={href}>
            <a href={href} className={activeSection === section ? "nav-active" : ""}>
              {label} &nbsp; <i className={`fas ${icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;

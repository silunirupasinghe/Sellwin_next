"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products" },
  { label: "About Us", href: "/About-Us" },
  { label: "Factory", href: "/factory" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", mt: 2 }}>
      <Image src="/assets/LOGO.jpg" alt="Sellwin Logo" width={120} height={60} />
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link
              href={item.href}
              style={{
                width: "100%",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{ textAlign: "center", py: 1 }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#fff", color: "#000", boxShadow: 2 }}
      >
        <Toolbar>
          {/* Logo */}
          <Link href="/">
            <Image src="/assets/LOGO.jpg" alt="Sellwin Logo" width={120} height={60} />
          </Link>

          {/* Desktop Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  margin: "0 16px",
                  textDecoration: "none",
                  color: "#333",
                  fontSize: "1rem",
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Box>
  );
}
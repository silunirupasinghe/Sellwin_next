"use client";

import React from "react";
import { Box, Typography, Grid, IconButton, Stack, Divider, Link as MuiLink } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", mt: 8, pt: 8, pb: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Logo + Description */}
        <Grid item xs={12} md={4} textAlign="center">
          <NextLink href="/" passHref>
            <Image src="/logo1.jpg" alt="Sellwin Logo" width={120} height={120} style={{ borderRadius: "50%" }} />
          </NextLink>
          <Typography variant="body2" sx={{ mt: 2, maxWidth: 300, mx: "auto" }}>
            Sellwin Holdings (Pvt) Ltd — Trusted leaders in sales & distribution of premium canned fish across Sri Lanka.
          </Typography>
        </Grid>

        {/* Menu Links */}
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Menu
          </Typography>
          <Stack spacing={1} alignItems="center">
            <MuiLink component={NextLink} href="/" color="inherit" underline="hover">Home</MuiLink>
            <MuiLink component={NextLink} href="/products" color="inherit" underline="hover">Products</MuiLink>
            <MuiLink component={NextLink} href="/about" color="inherit" underline="hover">About Us</MuiLink>
            <MuiLink component={NextLink} href="/factory" color="inherit" underline="hover">Factory</MuiLink>
            <MuiLink component={NextLink} href="/contact" color="inherit" underline="hover">Contact Us</MuiLink>
          </Stack>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact
          </Typography>
          <Stack spacing={1} alignItems="center">
            <Typography variant="body2">
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} /> 071-1497-951
            </Typography>
            <Typography variant="body2">
              <EmailIcon fontSize="small" sx={{ mr: 1 }} /> info@sellwin.lk
            </Typography>
            <Typography variant="body2">
              <LocationOnIcon fontSize="small" sx={{ mr: 1 }} /> 8th mile post, Habarana
            </Typography>
          </Stack>

          {/* Social Icons */}
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />

      {/* Bottom Bar */}
      <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
        © {new Date().getFullYear()} Sellwin Holdings (Pvt) Ltd. All rights reserved.
      </Typography>
    </Box>
  );
}

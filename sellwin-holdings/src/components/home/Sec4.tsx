"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardMedia, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

const certificates = [
  { img: "/certificates/iso9001.jpg", name: "ISO 9001" },
  { img: "/certificates/quality.jpg", name: "Quality Assurance" },
  { img: "/certificates/haccp.jpg", name: "HACCP Certified" },
];

export default function CertificatesAndSocial() {
  return (
    <Box sx={{ py: 10, px: 3 }}>
      {/* Certificates */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        Our Certificates
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 300,
                mx: "auto",
                borderRadius: 3,
                boxShadow: 2,
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={cert.img}
                alt={cert.name}
              />
              <Typography
                variant="subtitle1"
                sx={{ py: 1, fontWeight: "bold" }}
              >
                {cert.name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Get Connected */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Get Connected
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <IconButton
            href="https://www.facebook.com/yourpage"
            target="_blank"
            sx={{
              backgroundColor: "#1877f2",
              color: "#fff",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

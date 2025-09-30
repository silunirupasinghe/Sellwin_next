"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

const certifications = [
  { name: "ISO 9001", img: "/assets/certificates/iso9001.png" },
  { name: "HACCP Certified", img: "/assets/certificates/haccp.png" },
  { name: "Quality Assurance", img: "/assets/certificates/quality.png" },
];

export default function Certifications() {
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: "#f9fafb" }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        Our Certifications
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: "700px", mx: "auto", mb: 6 }}
      >
        We adhere to the highest international quality standards in food
        processing, packaging, and distribution. Our certifications stand as a
        testament to our commitment to quality, safety, and sustainability.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: 3,
                boxShadow: 2,
                p: 2,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={cert.img}
                alt={cert.name}
                sx={{ objectFit: "contain", mx: "auto", py: 2, width: "70%" }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                {cert.name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

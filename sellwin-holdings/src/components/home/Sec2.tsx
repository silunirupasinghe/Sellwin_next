"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const products = [
  {
    name: "Champ - Jack Mackerel",
    desc: "Premium quality jack mackerel, rich in taste.",
    img: "/products/champ.jpg",
  },
  {
    name: "Southern Fresh - Jack Mackerel",
    desc: "Freshly packed jack mackerel for every occasion.",
    img: "/products/southern-fresh.jpg",
  },
  {
    name: "Pico - Tuna",
    desc: "Tuna canned with care for freshness and nutrition.",
    img: "/products/pico-tuna.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: "#f9fafb" }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        Featured Products
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, mx: "auto", borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

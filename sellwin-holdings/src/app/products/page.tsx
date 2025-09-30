"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
} from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import Sec3 from "../../components/products/Sec3";
import Sec4 from "../../components/products/Sec4";

// Images from /public folder
const products = [
  {
    name: "Champ Jack Mackerel",
    desc: "Our best-selling Champ Jack Mackerel, made from the highest quality jack mackerel fish for exceptional taste.",
    price: "MRP: Rs.690.00 / 425g",
    img: "/assets/champ.jpg",
  },
  {
    name: "Pico Mackerel",
    desc: "High-quality Pico Mackerel, made from rich and nutritious mackerel fish for your favorite recipes.",
    price: "MRP: Rs.690.00 / 425g",
    img: "/assets/pico.jpg",
  },
  {
    name: "Pico Tuna",
    desc: "Top-quality Pico Tuna, made from delicious and nutritious tuna fish for various dishes.",
    price: "MRP: Rs.690.00 / 425g",
    img: "/assets/tuna.jpg",
  },
  {
    name: "Southern Fresh Jack Mackerel",
    desc: "Premium Southern Fresh Jack Mackerel for a rich and satisfying flavor.",
    price: "MRP: Rs.690.00 / 425g",
    img: "/assets/sfBlue.jpg",
  },
  {
    name: "Sea Fresh Tuna",
    desc: "Premium Sea Fresh Tuna, made from sustainably sourced tuna fish.",
    price: "MRP: Rs.690.00 / 425g",
    img: "/assets/seafresh.jpg",
  },
];

const customers = [
  { name: "PNS", img: "/assets/company/pns.png" },
  { name: "Taj", img: "/assets/company/taj.jpg" },
  { name: "Caravan Fresh", img: "/assets/company/caravanfresh.png" },
  { name: "Monarch Imperial", img: "/assets/company/monarchimperial.png" },
  { name: "Little Lion", img: "/assets/company/littlelion.png" },
  { name: "Galadari", img: "/assets/company/galadari.jpg" },
  { name: "Grand Monarch", img: "/assets/company/grandmonarch.png" },
  { name: "Raffles", img: "/assets/company/raffles.jpg" },
];

export default function ProductsPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ mt: 12 }}>
      {/* Banner */}
      <Box sx={{ bgcolor: "#00509E", color: "white", py: 8, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">
          DISTRIBUTION
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}
        >
          Our comprehensive distribution services ensure that your products
          reach their destination efficiently and on time. With secure
          warehousing, precise inventory management, and optimized supply chain
          solutions, we offer reliable logistics that enhance your business
          operations.
        </Typography>
      </Box>

      {/* Intro Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h5"
          align="center"
          color="primary"
          fontWeight="light"
        >
          EFFICIENT & RELIABLE DISTRIBUTION
        </Typography>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ my: 2 }}
        >
          Discover Our Product Range
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          fontWeight="bold"
          sx={{ mt: 6, mb: 2 }}
        >
          Premium Canned Fish Products
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "900px", mb: 4 }}>
          We take pride in providing top-quality canned fish products that meet
          the highest standards of freshness, taste, and nutritional value. Our
          commitment to excellence and sustainability ensures that every can of
          fish we produce is not only delicious but also environmentally
          responsible.
        </Typography>

        {/* Why Choose Us Bullet Points */}
        <Box component="ul" sx={{ pl: 3, lineHeight: 1.8 }}>
          <li>
            <b>Superior Quality:</b> Sourced from the best fisheries, ensuring
            only the freshest products.
          </li>
          <li>
            <b>Nutritional Excellence:</b> Rich in omega-3, protein, and
            vitamins for a healthy lifestyle.
          </li>
          <li>
            <b>Sustainable Sourcing:</b> Committed to sustainable fishing
            practices that protect marine life.
          </li>
          <li>
            <b>Variety & Convenience:</b> Perfect for quick meals, snacks, and
            gourmet recipes.
          </li>
        </Box>
      </Container>

      {/* Products Grid */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product, idx) => (
            <Grid size={{md:4, sm:6}} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="220"
                    image={product.img}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" align="center">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                      sx={{ mt: 1 }}
                    >
                      {product.desc}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      align="center"
                      sx={{ mt: 1, fontWeight: "bold" }}
                    >
                      {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Customers Slider */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color="primary"
          sx={{ mb: 4 }}
        >
          Our Primary Customers
        </Typography>
        <Slider {...sliderSettings}>
          {customers.map((c, idx) => (
            <Box key={idx} sx={{ px: 3, textAlign: "center" }}>
              <Image
                src={c.img}
                alt={c.name}
                width={200}
                height={120}
                style={{
                  objectFit: "contain",
                  margin: "0 auto",
                  filter: "grayscale(40%)",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Container>
      <Sec3/>
      <Sec4/>
    </Box>
  );
}

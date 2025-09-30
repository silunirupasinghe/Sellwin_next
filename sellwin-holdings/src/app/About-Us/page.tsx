"use client";

import React from "react";
import { Box, Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import Image from "next/image";

// Images from public folder
const aboutImg = "/assets/aboutUs/aboutUs.jpg";
const nalinPerera = "/assets/aboutUs/nalinp.jpeg";
const nalinAmarasinghe = "/assets/aboutUs/nalina.jpeg";

export default function AboutUs() {
  return (
    <Box sx={{ mt: 12 }}>
      {/* Banner */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 8, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">
          ABOUT US
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "800px", mx: "auto", mt: 3, lineHeight: 1.6 }}
        >
          Welcome to Sellwin Holdings (Pvt) Ltd, the leading distributor of
          canned fish across the island. With a robust network of dealers spread
          throughout the region, we proudly cater to both retail and wholesale
          customers, ensuring that our premium products reach every corner of
          the market.
        </Typography>
      </Box>

      {/* Mission & Vision */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ bgcolor: "primary.main", color: "white", p: 4, borderRadius: 3 }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                MISSION
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Our mission at Sellwin Holdings (Pvt) Ltd is to deliver premium
                canned fish products through meticulous selection of top-quality
                ingredients and fresh fish, ensuring excellence in every offering.
                Trusted by consumers and businesses alike, we lead the industry
                with our unwavering commitment to quality and customer
                satisfaction.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ bgcolor: "primary.main", color: "white", p: 4, borderRadius: 3 }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                VISION
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                To be the leading provider of high-quality canned fish, committed
                to excellence, sustainability, and customer satisfaction. We
                strive to continuously innovate and expand our reach, ensuring
                that our nutritious, delicious, and premium products are
                accessible to everyone, everywhere.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Network & Quality */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          OUR NETWORK
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, lineHeight: 1.7 }}>
          Our extensive dealer network enables us to maintain a strong
          presence island-wide. Whether you are a retailer looking to stock
          your shelves with top-tier products or a wholesaler seeking reliable
          supply solutions, Sellwin Holdings (Pvt) Ltd is your go-to partner.
          We ensure prompt and efficient distribution to meet the diverse
          needs of our clientele.
        </Typography>

        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          QUALITY YOU CAN TRUST
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          Quality is the cornerstone of our business. From the sourcing of
          fresh raw fish to the final packaging, every step of our process is
          guided by stringent quality control measures. This dedication to
          quality assurance ensures that every can of fish you purchase from
          us is packed with flavor, nutrition, and the promise of excellence.
        </Typography>
      </Container>

      {/* Values Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          OUR VALUES
        </Typography>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Image
            src={aboutImg}
            alt="Our Values"
            width={900}
            height={400}
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
        </Box>
      </Container>

      {/* Our Story */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          OUR STORY
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
          Sellwin Holdings (Pvt) Ltd was established with a clear vision: to
          become the leading provider of high-quality canned fish products in
          Sri Lanka. From the outset, we focused on building a strong foundation
          rooted in quality, innovation, and customer trust. Over the years, we
          have grown into a trusted name in the food industry, catering to both
          retail and wholesale markets across the island.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          At Sellwin Holdings, every can of fish represents our promise to
          deliver excellence. By leveraging advanced processes and maintaining a
          customer-centric approach, we have established ourselves as a reliable
          partner in the food distribution sector. Our story is one of progress,
          resilience, and an unwavering commitment to providing premium products
          that nourish and satisfy families, businesses, and communities.
        </Typography>
      </Container>

      {/* Leadership Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          OUR LEADERSHIP
        </Typography>
        <Grid container spacing={6} sx={{ mt: 4 }}>
          {/* Nalin Perera */}
          <Grid item xs={12} md={6} textAlign="center">
            <Avatar
              src={nalinAmarasinghe}
              alt="Nalin Amarasinghe"
              sx={{ width: 180, height: 180, mx: "auto", mb: 2 }}
            />
            <Typography variant="body1" fontStyle="italic">
              "Our vision is rooted in fostering trust, reliability, and
              quality. Every decision we make is guided by our commitment to
              building lasting relationships with our customers and partners."
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
              Nalin Amarasinghe <br />
              Director – Founder
            </Typography>
          </Grid>

          {/* Nalin Perera */}
          <Grid item xs={12} md={6} textAlign="center">
            <Avatar
              src={nalinPerera}
              alt="Nalin Perera"
              sx={{ width: 180, height: 180, mx: "auto", mb: 2 }}
            />
            <Typography variant="body1" fontStyle="italic">
              "Innovation and progress are at the heart of everything we do. Our
              aim is to continuously raise the bar, not just in the products and
              services we provide, but also in the way we conduct our business."
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
              Nalin Perera <br />
              Director – Founder
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

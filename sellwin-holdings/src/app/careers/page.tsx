"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";

// Public folder image
const careerSales = "/assets/careers/careersSales.jpg";

export default function Careers() {
  return (
    <Box sx={{ mt: 12 }}>
      {/* Banner Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 8,
          px: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          CAREERS
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "800px", mx: "auto", mt: 3, lineHeight: 1.7 }}
        >
          Our people are our greatest strength, and at Sellwin Holdings, we are
          committed to creating an environment where every individual can learn,
          grow, and thrive. Life at Sellwin is about more than just work—it’s
          about fostering innovation, encouraging leadership, and inspiring
          collaboration across all levels of the organization.
        </Typography>
      </Box>

      {/* Join Our Team Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="subtitle1"
          align="center"
          color="primary"
          fontWeight="light"
        >
          TOGETHER, WE CREATE QUALITY THAT INSPIRES.
        </Typography>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mt: 2 }}
        >
          Join Our Team
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "900px", mx: "auto", mt: 3, mb: 4, lineHeight: 1.7 }}
          align="justify"
        >
          Be part of a company that not only values your unique skills but also
          invests in your personal and professional growth. At Sellwin Holdings,
          we believe in creating an environment where your potential is
          nurtured, your achievements are celebrated, and your contributions
          drive meaningful impact.
        </Typography>
        <Box sx={{ borderBottom: "1px solid #ccc", maxWidth: "70%", mx: "auto" }} />
      </Container>

      {/* Life at Sellwin Section */}
      <Grid container spacing={0} alignItems="center">
        {/* Left Text */}
        <Grid item xs={12} md={6} sx={{ p: 6 }}>
          <Typography variant="h4" color="primary" fontWeight="bold">
            Life at Sellwin
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.7 }}>
            At Sellwin Holdings, we ensure our team grows with passion,
            innovation, and collaboration. Be part of a culture that drives
            success and empowers people to make a difference.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 4, bgcolor: "primary.main", fontWeight: "bold" }}
          >
            Find out more
          </Button>
        </Grid>
        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <Image
            src={careerSales}
            alt="Life at Sellwin"
            width={900}
            height={600}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>

      {/* Why Join Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          Why Join Sellwin Holdings?
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7 }} align="justify">
          At Sellwin Holdings, we believe in building careers, not just filling
          positions. As a leader in the canned fish manufacturing industry, we
          are dedicated to providing an inclusive, collaborative, and empowering
          workplace where everyone can thrive. Whether you're a seasoned
          professional or just starting out, Sellwin Holdings offers endless
          opportunities to learn, grow, and succeed.
        </Typography>
      </Container>

      {/* How to Apply Section */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          How to Apply
        </Typography>
        <Typography variant="body1" align="justify" sx={{ lineHeight: 1.7 }}>
          If you're ready to make a difference and be a part of our success
          story, we'd love to hear from you! Email your CV to{" "}
          <a href="mailto:careers@sellwinholdings.com" style={{ color: "#00509E", fontWeight: "bold" }}>
            careers@sellwinholdings.com
          </a>{" "}
          or check out our current openings below.
        </Typography>
      </Container>

      {/* Explore Opportunities Section */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          Explore Opportunities
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We are always looking for talented individuals who share our passion
          for quality and excellence. Here are some of the areas you can
          contribute to:
        </Typography>
        <List sx={{ pl: 2 }}>
          {["Production & Manufacturing", "Sales & Marketing", "Finance & Administration", "Quality Assurance"].map(
            (role, index) => (
              <ListItem key={index} sx={{ pl: 0 }}>
                <ListItemText
                  primaryTypographyProps={{ fontWeight: "bold", fontSize: "1rem" }}
                  primary={role}
                />
              </ListItem>
            )
          )}
        </List>
      </Container>

      {/* Join Us Today Section */}
      <Container sx={{ py: 6, mb: 6 }}>
        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          Join Us Today!
        </Typography>
        <Typography variant="body1" align="justify" sx={{ lineHeight: 1.7 }}>
          Be a part of a company that values its employees and their
          contributions. Together, we can make a lasting impact.
        </Typography>
      </Container>
    </Box>
  );
}

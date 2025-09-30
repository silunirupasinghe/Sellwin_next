"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: 10, md: 16 },
        pb: { xs: 8, md: 12 },
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Gradient (Top) */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: { xs: -120, sm: -200 },
          left: "50%",
          transform: "translateX(-50%) rotate(30deg)",
          width: { xs: "36rem", sm: "72rem" },
          aspectRatio: "1155/678",
          background: "linear-gradient(to top right, #00509E, #65cdac)",
          opacity: 0.3,
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: -1,
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />

      {/* Hero Content */}
      <Box sx={{ maxWidth: "700px", mx: "auto", mt: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
          }}
        >
          Trusted Leaders in <br /> Sales & Distribution
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "text.secondary",
          }}
        >
          At Sellwin Holdings, we are committed to delivering{" "}
          <strong>high-quality products</strong> and{" "}
          <strong>exceptional services</strong> in manufacturing and
          distribution. Experience the best with us.
        </Typography>

        {/* CTA Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 5 }}
        >
          <Button
            component={Link}
            href="/products"
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#00509E",
              "&:hover": { backgroundColor: "#1976d2" },
            }}
          >
            Explore Our Products
          </Button>
          <Button
            component={Link}
            href="/about"
            variant="text"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "text.primary",
              "&:hover": { color: "#00509E" },
            }}
          >
            Learn More →
          </Button>
        </Stack>
      </Box>

      {/* Background Gradient (Bottom) */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "calc(100% - 13rem)",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "36rem", sm: "72rem" },
          aspectRatio: "1155/678",
          background: "linear-gradient(to top right, #00509E, #FFD700)",
          opacity: 0.3,
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: -1,
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </Box>
  );
}

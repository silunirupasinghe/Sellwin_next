"use client";

import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function CTABanner() {
  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(90deg, #00509E, #007bb2)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Ready to Partner with Sellwin Holdings?
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "700px", mx: "auto", mb: 4 }}>
        Join our growing network of trusted distributors and retailers across
        Sri Lanka. Together, we can deliver quality and excellence to every
        customer.
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "#00509E",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#f1f1f1" },
          }}
        >
          Contact Us
        </Button>
        <Button
          component={Link}
          href="/about"
          variant="outlined"
          sx={{
            borderColor: "white",
            color: "white",
            fontWeight: "bold",
            "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
          }}
        >
          Learn More
        </Button>
      </Stack>
    </Box>
  );
}

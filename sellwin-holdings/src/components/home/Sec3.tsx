"use client";

import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const features = [
  {
    title: "Unmatched Quality",
    desc: "We use only the best quality ingredients in our products.",
    icon: <VerifiedIcon fontSize="large" color="primary" />,
  },
  {
    title: "Wide Reach",
    desc: "Our dealer network spans the entire island.",
    icon: <PublicIcon fontSize="large" color="primary" />,
  },
  {
    title: "Customer Focused",
    desc: "We cater to both retail and wholesale customers.",
    icon: <PeopleIcon fontSize="large" color="primary" />,
  },
  {
    title: "Industry Leader",
    desc: "As the leading distributor in the field, our reputation speaks for itself.",
    icon: <LeaderboardIcon fontSize="large" color="primary" />,
  },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: 10, px: 3 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        Why Choose Us?
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                height: "100%",
              }}
            >
              {feature.icon}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {feature.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

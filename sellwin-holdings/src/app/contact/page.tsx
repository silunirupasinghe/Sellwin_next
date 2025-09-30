"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Box sx={{ mt: 12 }}>
      {/* Title Section */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color="primary"
        >
          HAVE SOME QUESTIONS, ISSUES OR COMMENTS?
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mt: 2, maxWidth: "800px", mx: "auto", lineHeight: 1.7 }}
        >
          At Sellwin Holdings (Pvt) Ltd, we value open communication and are
          always here to assist you with your needs. Whether you have questions
          about our products, need support, or want to discuss a potential
          partnership, we are ready to help.
        </Typography>
      </Container>

      {/* Background Gradient (Top) */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: -100, md: -200 },
          left: "50%",
          transform: "translateX(-50%) rotate(30deg)",
          width: { xs: "36rem", md: "72rem" },
          aspectRatio: "1155/678",
          background: "linear-gradient(to top right, #00509E, #65cdac)",
          opacity: 0.3,
          filter: "blur(120px)",
          zIndex: -1,
        }}
      />

      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary"
                align="center"
                gutterBottom
              >
                Contact Sales
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                You can also reach us by filling the contact form below. Please
                provide as much information as possible so we can assist you promptly.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Company" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email" type="email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Phone Number" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <FormControlLabel
                control={
                  <Switch
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" color="text.secondary">
                    By selecting this, you agree to our{" "}
                    <a href="#" style={{ color: "#00509E", fontWeight: "bold" }}>
                      privacy policy
                    </a>
                    .
                  </Typography>
                }
                sx={{ mt: 3 }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: "1rem",
                  backgroundColor: "#00509E",
                  "&:hover": { backgroundColor: "#003f7f" },
                }}
              >
                Let's Talk
              </Button>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary"
                gutterBottom
                align="center"
              >
                Get In Touch
              </Typography>
              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <PhoneIcon sx={{ mr: 1, color: "primary.main" }} /> 071-1497-951
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <EmailIcon sx={{ mr: 1, color: "primary.main" }} /> info@sellwin.lk
                </Typography>
                <Typography variant="body1">
                  <LocationOnIcon sx={{ mr: 1, color: "primary.main" }} />
                  8th mile post <br /> Habarana
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Background Gradient (Bottom) */}
      <Box
        sx={{
          position: "absolute",
          top: "calc(100% - 13rem)",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "36rem", md: "72rem" },
          aspectRatio: "1155/678",
          background: "linear-gradient(to top right, #00509E, #FFD700)",
          opacity: 0.3,
          filter: "blur(120px)",
          zIndex: -1,
        }}
      />
    </Box>
  );
}

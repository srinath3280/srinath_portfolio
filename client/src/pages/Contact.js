import React, { useRef, useState } from "react";
import { Box, Typography, TextField, Button, Divider, IconButton, Dialog } from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();
    const form = useRef();
    const [openPopup, setOpenPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const socialLinks = [
        { icon: <WhatsAppIcon />, url: "https://wa.me/+919642031606" },
        { icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/lingadahalli-srinath-215475232/" },
    ];

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const name = formData.get("from_name")?.trim();
        const email = formData.get("from_email")?.trim();
        const mobile = formData.get("from_mobile")?.trim();
        const message = formData.get("message")?.trim();

        // Required field validation
        if (!name || !email || !mobile || !message) {
            alert("Please fill all mandatory fields.");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Mobile validation (Indian mobile numbers)
        const mobileRegex = /^[6-9]\d{9}$/;

        if (!mobileRegex.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        setIsSubmitting(true);

        emailjs
            .sendForm(
                "service_hpo3esy",
                "template_inq2jkb",
                form.current,
                "e70SHpBXhK2elvQum"
            )
            .then(() => {
                form.current.reset();
                setIsSubmitting(false);
                setOpenPopup(true);
            })
            .catch((error) => {
                setIsSubmitting(false);
                console.error(error);
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                px: { xs: 2, sm: 4 },
            }}
        >
            {/* Animated geometric shapes */}
            <motion.div
                animate={{ rotate: 360, x: [0, 30, -30, 0], y: [0, 30, -30, 0] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                style={{
                    position: "absolute",
                    width: "10vw",
                    height: "10vw",
                    minWidth: 80,
                    minHeight: 80,
                    borderRadius: 20,
                    background: "#1976d2",
                    opacity: 0.15,
                    top: "5%",
                    left: "10%",
                }}
            />
            <motion.div
                animate={{ rotate: -360, x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                style={{
                    position: "absolute",
                    width: "12vw",
                    height: "12vw",
                    minWidth: 100,
                    minHeight: 100,
                    borderRadius: 30,
                    background: "#ff4081",
                    opacity: 0.15,
                    bottom: "5%",
                    right: "10%",
                }}
            />
            <motion.div
                animate={{ rotate: 360, x: [0, 25, -25, 0], y: [0, -20, 20, 0] }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                style={{
                    position: "absolute",
                    width: "7vw",
                    height: "7vw",
                    minWidth: 60,
                    minHeight: 60,
                    borderRadius: "50%",
                    background: "#00bfa5",
                    opacity: 0.12,
                    top: "50%",
                    left: "70%",
                }}
            />

            {/* Center Form */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Box
                    component="form"
                    ref={form}
                    onSubmit={sendEmail}
                    sx={{
                        width: { xs: "95%", sm: 400, md: 400 },
                        p: { xs: 3, sm: 3, md: 3 },
                        borderRadius: 3,
                        bgcolor: "rgba(255,255,255,0.9)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                        display: "flex",
                        flexDirection: "column",
                        gap: { xs: 1, sm: 1, md: 1 },
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                            background: "linear-gradient(90deg, #1976d2, #ff4081)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Get In Touch
                    </Typography>

                    <TextField
                        name="from_name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#ccc" } } }}
                    />
                    <TextField
                        name="from_email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#ccc" } } }}
                    />
                    <TextField
                        name="from_mobile"
                        label="Mobile"
                        variant="outlined"
                        fullWidth
                        required
                        inputProps={{
                            maxLength: 10,
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, "");
                        }}
                        sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#ccc" } } }}
                    />
                    <TextField
                        name="message"
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        required
                        sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#ccc" } } }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            py: { xs: 1, sm: 1.5 },
                            fontWeight: "bold",
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            background: "linear-gradient(90deg, #1976d2, #ff4081)",
                            "&:hover": { transform: "scale(1.05)", bgcolor: "#ff4081" },
                            transition: "all 0.3s ease",
                        }}
                        disabled={isSubmitting}
                    >
                        {
                            isSubmitting ? "Sending Message..." : "Send Message"
                        }
                    </Button>

                    <Divider sx={{ mt: 1, mb: 1, borderColor: "#ccc" }} />

                    {/* Social Media Icons */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "row", sm: "row" },
                            justifyContent: "center",
                            alignItems: "center",
                            gap: { xs: 1, sm: 2 },
                        }}
                    >
                        {socialLinks.map((item, idx) => (
                            <IconButton
                                key={idx}
                                color="primary"
                                onClick={() => window.open(item.url, "_blank")}
                                sx={{
                                    color: "#0f1f3d",
                                    "&:hover": { color: "#1976d2", transform: "scale(1.2)" },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {React.cloneElement(item.icon, { sx: { fontSize: { xs: 30, sm: 40 } } })}
                            </IconButton>
                        ))}
                    </Box>
                </Box>
            </motion.div>

            {/* Thank You Dialog */}
            <Dialog
                open={openPopup}
                onClose={() => setOpenPopup(false)}
                PaperProps={{
                    sx: {
                        p: { xs: 2, sm: 4 },
                        textAlign: "center",
                        borderRadius: 3,
                        width: { xs: "80%", sm: 400 },
                        maxWidth: "90vw",
                        backdropFilter: "blur(10px)",
                    },
                }}
            >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, type: "spring", stiffness: 120 }}>
                    <img
                        src="/thankyou.gif"
                        alt="Thank You"
                        style={{
                            width: "100%",
                            maxWidth: 180,
                            margin: "0 auto",
                            borderRadius: 12,
                        }}
                    />

                    <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 120, delay: 0.3 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                mt: 3,
                                fontWeight: "bold",
                                textAlign: "center",
                                fontSize: { xs: "1.3rem", sm: "1.8rem" },
                                background: "linear-gradient(90deg, #1976d2, #ff4081, #00bfa5)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Thank you for reaching out!
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                textAlign: "center",
                                mt: 1,
                                color: "#555",
                                fontStyle: "italic",
                                fontSize: { xs: "0.85rem", sm: "1rem" },
                            }}
                        >
                            I'll get back to you as soon as possible.
                        </Typography>
                    </motion.div>

                    <Button
                        onClick={() => setOpenPopup(false)}
                        sx={{
                            mt: 4,
                            px: 4,
                            py: 1.5,
                            fontWeight: "bold",
                            borderRadius: 5,
                            background: "linear-gradient(90deg, #1976d2, #ff4081)",
                            color: "#fff",
                            fontSize: { xs: "0.85rem", sm: "1rem" },
                            "&:hover": { background: "linear-gradient(90deg, #ff4081, #1976d2)", transform: "scale(1.05)" },
                            transition: "all 0.3s ease",
                        }}
                    >
                        Close
                    </Button>
                </motion.div>
            </Dialog>
        </Box>
    );
}

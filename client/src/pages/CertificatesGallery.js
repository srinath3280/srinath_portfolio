import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Box, Grid, Typography, Card, CardActionArea } from "@mui/material";

const certificates = [
    { title: "CSS", file: "/files/css_certificate.pdf", image: "/images/css.png" },
    { title: "JavaScript", file: "/files/javascript_basic_certificate.pdf", image: "/images/js.avif" },
    { title: "React JS", file: "/files/react_basic_certificate.pdf", image: "/images/reactjs.png" },
    { title: "Frontend Developer", file: "/files/frontend_developer_react_certificate.pdf", image: "/images/frontend.jpeg" },
    { title: "Rest API", file: "/files/rest_api_intermediate_certificate.pdf", image: "/images/restapi.png" },
];

function TiltCard({ children }) {
    // small reusable tilt wrapper using mouse position
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateY = useTransform(x, [-50, 50], [8, -8]);
    const rotateX = useTransform(y, [-50, 50], [-8, 8]);

    function handleMove(e) {
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width; // 0..1
        const py = (e.clientY - rect.top) / rect.height; // 0..1
        x.set((px - 0.5) * 100); // -50..50
        y.set((py - 0.5) * 100);
    }
    function handleLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            style={{ perspective: 1200 }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            <motion.div style={{ rotateY, rotateX, x: 0, y: 0, transformStyle: "preserve-3d" }}>
                {children}
            </motion.div>
        </motion.div>
    );
}

export default function CertificatesGalleryPremium() {
    return (
        <Box sx={{ py: 6, px: { xs: 2, sm: 4, md: 8 }, background: "#f3f6fb", minHeight: "100vh" }}>
            <Box component={motion.div} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
                    My Certificates
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {certificates.map((cert, idx) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                        <TiltCard>
                            <Card
                                component={motion.div}
                                initial={{ scale: 1, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                                whileHover={{ scale: 1.035, boxShadow: "0 20px 50px rgba(12,30,80,0.18)" }}
                                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                                sx={{
                                    width: "100%",
                                    aspectRatio: "1 / 1",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                }}
                            >
                                <CardActionArea
                                    component="a"
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ display: "block", width: "100%", height: "100%" }}
                                >
                                    {/* image area */}
                                    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                                        <Box
                                            component="img"
                                            src={cert.image}
                                            alt={cert.title}
                                            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                        />

                                        {/* overlay that fades in on hover */}
                                        <Box
                                            component={motion.div}
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.28 }}
                                            sx={{
                                                position: "absolute",
                                                inset: 0,
                                                background: "linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(2,6,23,0.48) 100%)",
                                                display: "flex",
                                                alignItems: "flex-end",
                                                justifyContent: "center",
                                                px: 2,
                                                pb: 3,
                                            }}
                                        >
                                            <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, textAlign: "center" }}>
                                                {cert.title}
                                            </Typography>
                                        </Box>

                                        {/* small title bar for non-hover (keeps cards readable even on mobile) */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                height: "22%",
                                                background: "rgba(255,255,255,0.95)",
                                                display: { xs: "flex", sm: "none" }, // show on small screens to keep title visible
                                                alignItems: "center",
                                                justifyContent: "center",
                                                px: 1,
                                            }}
                                        >
                                            <Typography variant="subtitle1" sx={{ color: "#111", fontWeight: 600 }}>
                                                {cert.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </TiltCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

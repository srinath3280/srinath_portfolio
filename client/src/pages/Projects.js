import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import warningAnimation from "../components/animations/warning.json";

const projects = [
    {
        title: "Laundry Service Management Platform",
        techStack:
            "React.js, JavaScript, Material UI, Node.js, Express.js, MySQL, JWT, bcryptjs, Razorpay, Google Maps",
        description: [
            "Developed a complete laundry service workflow, allowing customers to purchase membership plans, manage shopping carts, place service orders, and track order status in real time.",
            "Built an internal supervisor dashboard to manage customer orders, inventory, and store employees from a centralized interface.",
            "Designed and implemented secure RESTful APIs for authentication, order management, inventory operations, and user management using Node.js, Express.js, and MySQL.",
            "Implemented JWT authentication, role-based authorization, and password hashing using bcryptjs to secure application resources.",
            "Integrated Razorpay payment gateway and Google Maps services to provide secure payments and location-based functionality.",
            "Resolved frontend, backend, and API integration issues while optimizing application performance and database operations."
        ],
        github: "#",
        live: "#",
    },
    {
        title: "Language Learning Platform",
        techStack:
            "React.js, JavaScript, Material UI, Node.js, Express.js, MySQL, JWT, bcryptjs, Azure Text-to-Speech, Whisper Speech-to-Text, OTP Integration",
        description: [
            "Developed a structured learning flow where users navigate through subscribed classes, subjects, lessons, topics, and learning content.",
            "Built interactive language practice modules including Read, Type, Pick, and Arrange exercises to enhance the learning experience.",
            "Designed and developed secure RESTful APIs for authentication, lesson management, practice sessions, and user progress tracking.",
            "Integrated Azure Text-to-Speech, Whisper Speech-to-Text, and OTP verification services to enable AI-powered voice interactions and secure authentication.",
            "Implemented responsive React.js interfaces with reusable components to deliver a consistent user experience across devices.",
            "Troubleshot integration issues and optimized frontend-backend communication to improve application reliability and performance."
        ],
        github: "#",
        live: "https://7oe6bxpc78d5xe-80.proxy.runpod.net",
    },
    {
        title: "Property Listing Application",
        techStack: "Node.js, Express.js, MySQL, React.js, JavaScript",
        description: [
            "Developed the complete backend system for managing property listings, including CRUD operations and role-based access control.",
            "Implemented APIs for accessing all listed properties and managing property leads efficiently.",
            "Designed and optimized MySQL database schemas for properties, users, and leads.",
            "Built a responsive frontend tab to post new properties and view property details.",
            "Enabled admin functionalities for monitoring leads and property status.",
            "Ensured secure authentication and authorization for different user roles.",
        ],
        github: "#",
        live: "#",
    }
];

export default function Projects() {
    const location = useLocation();
    const projectName = location.state?.projectName;
    const projectRefs = useRef([]);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleLiveClick = (liveUrl) => {
        if (!liveUrl || liveUrl === "#") {
            setDialogOpen(true);
        } else {
            window.open(liveUrl, "_blank");
        }
    };

    useEffect(() => {
        if (projectName) {
            const index = projects.findIndex(p => p.title === projectName);
            if (index !== -1 && projectRefs.current[index]) {
                const element = projectRefs.current[index];
                const yOffset = -125;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    }, [projectName]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: "#f9f9f9",
                px: { xs: 2, sm: 3, md: 6 },
                py: { xs: 3, sm: 4, md: 2 },
            }}
        >
            <Box sx={{ maxWidth: "900px", width: "100%" }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        // mb: { xs: 3, md: 6 },
                        textAlign: "center",
                        fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                    }}
                >
                    Work Highlights
                </Typography>

                {projects?.map((project, index) => (
                    <motion.div
                        key={index}
                        ref={el => (projectRefs.current[index] = el)}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        style={{ marginBottom: "3rem" }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                mb: 1,
                                color: "#0f1f3d",
                                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                            }}
                        >
                            {project.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontStyle: "italic",
                                mb: 2,
                                fontSize: { xs: "0.9rem", sm: "1rem" },
                            }}
                        >
                            Tech Stack: {project.techStack}
                        </Typography>
                        <ul
                            style={{
                                paddingLeft: "1em",
                                marginBottom: "1.5em",
                                fontSize: "0.95rem",
                            }}
                        >
                            {project.description.map((point, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        marginBottom: "0.6em",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                gap: 2,
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "#1976d2",
                                    color: "#0f1f3d",
                                    "&:hover": { bgcolor: "#1976d2", color: "#fff" },
                                }}
                                onClick={() => handleLiveClick(project.live)}
                            >
                                Live Demo
                            </Button>
                        </Box>
                    </motion.div>
                ))}

                {/* Dialog */}
                <Dialog
                    open={dialogOpen}
                    onClose={() => setDialogOpen(false)}
                    PaperComponent={motion.div} // Use motion for animation
                    PaperProps={{
                        initial: { scale: 0.8, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.8, opacity: 0 },
                        transition: { duration: 0.4, ease: "easeInOut" },
                        sx: {
                            borderRadius: 3,
                            p: 2,
                            minWidth: { xs: "280px", sm: "400px" },
                            bgcolor: "#f5f5f5",
                            boxShadow: 6,
                        },
                    }}
                >
                    <DialogContent>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                gap: 2,
                                py: 2,
                            }}
                        >
                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                style={{ width: 150, height: "100%" }}
                            >
                                <Lottie animationData={warningAnimation} loop={true} />
                            </motion.div>

                            {/* Text */}
                            <Typography variant="h6" fontWeight="bold">
                                Notice
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                No deployed URL is available for this project at the moment.
                            </Typography>
                        </Box>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                        <Button
                            variant="contained"
                            onClick={() => setDialogOpen(false)}
                            sx={{ bgcolor: "#1976d2", "&:hover": { bgcolor: "#155fa0" } }}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
}

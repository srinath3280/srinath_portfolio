import React from "react";
import { Box, Typography, Chip, List, ListItem } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Software Developer",
        company: "Vensyx Data Solutions Pvt. Ltd",
        duration: "June 2025 - July 2026",
        location: "Hyderabad, India (Remote)",
        role: "Developing scalable full-stack web applications using React.js, Node.js, Express.js, and MySQL",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Material-UI",
            "Node.js",
            "Express.js",
            "Python",
            "MySQL",
            "RESTful APIs"
        ],
        achievements: [
            "Developed end-to-end business modules across React.js frontend and Node.js backend",
            "Designed and implemented secure RESTful APIs for authentication, order management, and learning workflows",
            "Built reusable React components that improved code maintainability and accelerated feature development",
            "Implemented JWT authentication, role-based authorization, and password hashing using bcryptjs",
            "Integrated Azure Text-to-Speech, Whisper Speech-to-Text, OTP services, Razorpay, and Google Maps APIs",
            "Resolved frontend, backend, authentication, and API integration issues to improve application stability",
            "Developed responsive user interfaces focused on performance, usability, and cross-device compatibility",
            "Optimized database interactions and backend workflows for reliable application performance",
        ],
        responsibilities: [
            "Diagnosed and resolved frontend and backend issues by debugging API failures, database queries, authentication workflows, and third-party integrations, minimizing defects and improving overall system stability.",
            "Optimized MySQL queries, API workflows, and application logic to improve data retrieval, reduce processing time, and enhance the performance of business-critical features.",
            "Collaborated with cross-functional teams to analyze business requirements, troubleshoot production issues, implement enhancements, and deliver high-quality solutions within Agile development cycles.",
            " Demonstrated strong problem-solving skills by identifying root causes, implementing scalable solutions, and continuously improving application reliability, usability, and maintainability.",
            "Mentored junior developers through code reviews and pair debugging sessions, helping them adopt best practices and reduce recurring bugs."
        ],
        projects: [
            "Laundry Service Management Platform – Membership plans, shopping cart, live order tracking, inventory management, employee management, and supervisor dashboard",
        ],
        softSkills: [
            "Problem Solving",
            "Team Collaboration",
            "Adaptability",
            "Time Management",
        ],
    },
    {
        title: "Web Developer",
        company: "Vensyx Data Solutions Pvt. Ltd",
        duration: "March 2024 - May 2025",
        location: "Hyderabad, India (Remote)",
        role: "Developing scalable full-stack web applications using React.js, Node.js, Express.js, and MySQL",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Material-UI",
            "Node.js",
            "Express.js",
            "Python",
            "MySQL",
            "RESTful APIs"
        ],
        achievements: [
            "Developed end-to-end business modules across React.js frontend and Node.js backend",
            "Designed and implemented secure RESTful APIs for authentication, order management, and learning workflows",
            "Built reusable React components that improved code maintainability and accelerated feature development",
            "Implemented JWT authentication, role-based authorization, and password hashing using bcryptjs",
            "Integrated Azure Text-to-Speech, Whisper Speech-to-Text, OTP services, Razorpay, and Google Maps APIs",
            "Resolved frontend, backend, authentication, and API integration issues to improve application stability",
            "Developed responsive user interfaces focused on performance, usability, and cross-device compatibility",
            "Optimized database interactions and backend workflows for reliable application performance",
        ],
        responsibilities: [
            "Developed and maintained scalable full-stack web applications using React.js, Node.js, Express.js, and MySQL, delivering secure, responsive, and reliable business solutions for laundry management and language learning platforms.",
            "Designed and implemented end-to-end features including membership plans, shopping cart, order management, live order tracking, inventory management, employee management, and interactive language learning modules, ensuring seamless user experiences.",
            "Built and optimized RESTful APIs for order processing, learning modules, authentication, and user management, improving application performance and reducing API response times through efficient backend logic and database operations.",
            "Implemented secure authentication and authorization using JWT and bcryptjs, including password hashing, protected routes, and role-based access control to safeguard application resources.",
            "Integrated third-party services such as OTP verification, Azure Text-to-Speech (TTS), and Whisper Speech-to-Text (STT), resolving integration challenges and ensuring reliable communication between external services and the application."
        ],
        projects: [
            "Language Learning Platform – Subscription-based learning, lesson management, interactive practice sessions (Read, Type, Pick & Arrange), Azure TTS, and Whisper STT integration",
        ],
        softSkills: [
            "Problem Solving",
            "Team Collaboration",
            "Adaptability",
            "Time Management",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.6 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const getExperienceDuration = (duration) => {
    const [startStr, endStr] = duration.split(" - ");
    const startDate = new Date(startStr);

    const endDate = endStr === "Present" ? new Date() : new Date(endStr);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years < 0) return ""; // safety for invalid dates

    if (years === 0) return `${months} month${months > 1 ? "s" : ""}`;
    if (months === 0) return `${years} year${years > 1 ? "s" : ""}`;
    return `${years} year${years > 1 ? "s" : ""} ${months + 1} month${months > 1 ? "s" : ""}`;
};

export default function Experience() {
    return (
        <Box sx={{ minHeight: "100vh", py: 2, px: 3 }}>
            {/* Heading */}
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    mb: { xs: 3, md: 6 },
                    textAlign: "center",
                    fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                }}
            >
                Professional Experience
            </Typography>

            {experiences.map((exp, idx) => (
                <motion.div
                    key={idx}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ textAlign: "center" }}
                >
                    {/* Job Title */}
                    <motion.div variants={itemVariants}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0f1f3d" }}>
                            {exp.title}
                        </Typography>
                    </motion.div>

                    {/* Company + Duration */}
                    <motion.div variants={itemVariants}>
                        <Typography variant="subtitle1" color="#111111ff">
                            {exp.company}
                        </Typography>
                        <Typography variant="subtitle1" color="#111111ff">
                            {exp.duration} | ({getExperienceDuration(exp.duration)})
                        </Typography>
                    </motion.div>

                    {/* Location */}
                    <motion.div variants={itemVariants}>
                        <Typography variant="subtitle2" color="#111111ff" sx={{ mb: 2 }}>
                            {exp.location}
                        </Typography>
                    </motion.div>

                    {/* Role */}
                    <motion.div variants={itemVariants}>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            {exp.role}
                        </Typography>
                    </motion.div>

                    {/* Achievements */}
                    {/* <motion.div variants={itemVariants}>
                        <Typography variant="h6" sx={{ fontSize: "1.1rem", mb: 1, color: "#0f1f3d" }}>
                            Key Achievements
                        </Typography>
                        <List dense sx={{ display: "inline-block", textAlign: "left" }}>
                            {exp.achievements.map((ach, i) => (
                                <ListItem
                                    key={i}
                                    sx={{ display: "list-item", listStyleType: "disc" }}
                                >
                                    {ach}
                                </ListItem>
                            ))}
                        </List>
                    </motion.div> */}

                    {/* Responsibilities */}
                    <motion.div variants={itemVariants}>
                        <Typography variant="h6" sx={{ fontSize: "1.1rem", mt: 2, mb: 1, color: "#0f1f3d" }}>
                            Responsibilities
                        </Typography>
                        <List dense sx={{ display: "inline-block", textAlign: "left" }}>
                            {exp.responsibilities.map((res, i) => (
                                <ListItem
                                    key={i}
                                    sx={{ display: "list-item", listStyleType: "circle" }}
                                >
                                    {res}
                                </ListItem>
                            ))}
                        </List>
                    </motion.div>

                    {/* Projects */}
                    <motion.div variants={itemVariants}>
                        <Typography variant="h6" sx={{ fontSize: "1.1rem", mt: 2, mb: 1, color: "#0f1f3d" }}>
                            Project Highlights
                        </Typography>
                        <List dense sx={{ display: "inline-block", textAlign: "left" }}>
                            {exp.projects.map((proj, i) => (
                                <ListItem
                                    key={i}
                                    sx={{ display: "list-item", listStyleType: "square" }}
                                >
                                    {proj}
                                </ListItem>
                            ))}
                        </List>
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div variants={itemVariants}>
                        <Typography variant="h6" sx={{ fontSize: "1.1rem", mt: 2, mb: 1, color: "#0f1f3d" }}>
                            Soft Skills
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1 }}>
                            {exp.softSkills.map((skill, i) => (
                                <Chip key={i} label={skill} color="#0f1f3d" variant="outlined" />
                            ))}
                        </Box>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div variants={itemVariants}>
                        <Typography variant="h6" sx={{ fontSize: "1.1rem", mt: 2, mb: 1, color: "#0f1f3d" }}>
                            Technologies
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1 }}>
                            {exp.technologies.map((tech, i) => (
                                <Chip key={i} label={tech} color="#0f1f3d" variant="outlined" />
                            ))}
                        </Box>
                    </motion.div>
                </motion.div>
            ))}
        </Box>
    );
}

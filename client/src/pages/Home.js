import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, LinearProgress, TextField, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';


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


const experiences = [
    {
        title: 'Software Developer',
        company: 'Vensyx Data Solutions Pvt Ltd.',
        duration: 'June 2025 - July 2026',
        location: 'Hyderabad, India (Remote)',
        role: 'Developing scalable full-stack web applications using React.js, Node.js, Express.js, and MySQL',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Material UI', 'Node.js', 'Express.js', 'MySQL', 'RESTful APIs'],
        achievements: [
            "Developed end-to-end business modules across React.js frontend and Node.js backend",
            "Designed and implemented secure RESTful APIs for authentication, order management, and learning workflows",
            "Built reusable React components that improved code maintainability and accelerated feature development",
            "Implemented JWT authentication, role-based authorization, and password hashing using bcryptjs",
            "Integrated Azure Text-to-Speech, Whisper Speech-to-Text, OTP services, Razorpay, and Google Maps APIs",
            "Resolved frontend, backend, authentication, and API integration issues to improve application stability",
            "Developed responsive user interfaces focused on performance, usability, and cross-device compatibility",
            "Optimized database interactions and backend workflows for reliable application performance"
        ],
        responsibilities: [
            "Diagnosed and resolved frontend and backend issues by debugging API failures, database queries, authentication workflows, and third-party integrations, minimizing defects and improving overall system stability.",
            " Optimized MySQL queries, API workflows, and application logic to improve data retrieval, reduce processing time, and enhance the performance of business-critical features.",
            "Collaborated with cross-functional teams to analyze business requirements, troubleshoot production issues, implement enhancements, and deliver high-quality solutions within Agile development cycles.",
            "Demonstrated strong problem-solving skills by identifying root causes, implementing scalable solutions, and continuously improving application reliability, usability, and maintainability.",
            "Mentored junior developers through code reviews and pair debugging sessions, helping them adopt best practices and reduce recurring bugs.",
        ]
    },
    {
        title: 'Web Developer',
        company: 'Vensyx Data Solutions Pvt Ltd.',
        duration: 'March 2024 - May 2025',
        location: 'Hyderabad, India (Remote)',
        role: 'Developing scalable full-stack web applications using React.js, Node.js, Express.js, and MySQL',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Material UI', 'Node.js', 'Express.js', 'MySQL', 'RESTful APIs'],
        achievements: [
            "Developed end-to-end business modules across React.js frontend and Node.js backend",
            "Designed and implemented secure RESTful APIs for authentication, order management, and learning workflows",
            "Built reusable React components that improved code maintainability and accelerated feature development",
            "Implemented JWT authentication, role-based authorization, and password hashing using bcryptjs",
            "Integrated Azure Text-to-Speech, Whisper Speech-to-Text, OTP services, Razorpay, and Google Maps APIs",
            "Resolved frontend, backend, authentication, and API integration issues to improve application stability",
            "Developed responsive user interfaces focused on performance, usability, and cross-device compatibility",
            "Optimized database interactions and backend workflows for reliable application performance"
        ],
        responsibilities: [
            "Developed and maintained scalable full-stack web applications using React.js, Node.js, Express.js, and MySQL, delivering secure, responsive, and reliable business solutions for laundry management and language learning platforms.",
            "Designed and implemented end-to-end features including membership plans, shopping cart, order management, live order tracking, inventory management, employee management, and interactive language learning modules, ensuring seamless user experiences.",
            "Built and optimized RESTful APIs for order processing, learning modules, authentication, and user management, improving application performance and reducing API response times through efficient backend logic and database operations.",
            "Implemented secure authentication and authorization using JWT and bcryptjs, including password hashing, protected routes, and role-based access control to safeguard application resources.",
            "Integrated third-party services such as OTP verification, Azure Text-to-Speech (TTS), and Whisper Speech-to-Text (STT), resolving integration challenges and ensuring reliable communication between external services and the application."
        ]
    }
];


const skills = [
    {
        name: "HTML5",
        level: 95,
        category: "Frontend",
        description: "Semantic and accessible markup to build structured, responsive web pages.",
        technologies: ["Semantic Tags", "Forms & Validation", "Media Elements", "Responsive Layouts"]
    },
    {
        name: "CSS3",
        level: 95,
        category: "Frontend",
        description: "Responsive layouts and modern styling techniques with animations and transitions.",
        technologies: ["Flexbox", "CSS Grid", "Animations & Transitions", "Responsive Design"]
    },
    {
        name: "JavaScript",
        level: 85,
        category: "Programming",
        description: "Core logic, ES6+ features, DOM manipulation, and event handling for dynamic apps.",
        technologies: ["ES6+", "Async/Await", "DOM Manipulation", "Fetch API"]
    },
    {
        name: "React.js",
        level: 85,
        category: "Frontend Framework",
        description: "Building interactive, scalable, and component-based single-page applications.",
        technologies: ["Hooks", "Context API", "React Router", "State Management", "Material-UI",]
    },
    {
        name: "Node.js",
        level: 80,
        category: "Backend",
        description: "Server-side development with APIs, authentication, and real-time applications.",
        technologies: ["Express.js", "REST APIs", "JWT Auth", "File Uploads", "Error Handling", "Database Integration with MySQL", "Environment Variables with dotenv"]
    },
    {
        name: "MySQL",
        level: 50,
        category: "Database",
        description: "Creating tables and writing simple queries to manage data.",
        technologies: ["Creating Tables", "Inserting Data", "SELECT Queries", "WHERE Conditions", "Order By", "Group By", "Subqueries"]
    },
    {
        name: "Python",
        level: 50,
        category: "Programming",
        description: "Developing scripts and applications with a focus on automation and data processing.",
        technologies: ["Pandas", "NumPy", "Fast API"]
    }
];


const projects = [
    {
        name: 'Laundry Service Management Platform',
        desc: 'Built a full-stack laundry management platform with membership plans, order tracking, inventory management, secure authentication, and payment integration.'
    },
    {
        name: 'Language Learning Platform',
        desc: 'Developed a language learning platform with interactive practice sessions, secure authentication, RESTful APIs, Azure Text-to-Speech, and Whisper Speech-to-Text.'
    },
    {
        name: 'Property Listing Application',
        desc: 'Built a full-stack property listing platform with property management, secure authentication, role-based access, and responsive user interfaces.'
    }
];

const contactDetails = [
    { label: 'Name', value: 'Lingadahalli Srinath', icon: <PersonIcon sx={{ color: '#4dabf5' }} /> },
    { label: 'Mobile', value: '+91 9642031606', icon: <PhoneIcon sx={{ color: '#4dabf5' }} /> },
    { label: 'Email', value: 'lingadahallisrinath06@gmail.com', icon: <EmailIcon sx={{ color: '#4dabf5' }} /> },
    { label: 'WhatsApp', value: '+91 9642031606', icon: <WhatsAppIcon sx={{ color: '#4dabf5' }} /> },
];

export default function Home() {

    const navigatorate = useNavigate();

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const handleDownload = () => {

        const pdfUrl = '/files/Srinath_Lingadahalli_Resume.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Srinath_Lingadahalli_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box sx={{ width: '100%', fontFamily: "'Inter', sans-serif'", backgroundColor: '#0f1f3d', color: '#ffffff' }}>

            {/* ===== Hero Section ===== */}
            <Box
                sx={{
                    width: '100%',
                    minHeight: '90vh',
                    position: 'relative',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #0f1f3d 0%, #081426 100%)',
                }}
            >
                {/* Animated Particles */}
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        fullScreen: { enable: true, zIndex: -1 },
                        background: { color: { value: 'transparent' } },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: 'repulse' },
                                onClick: { enable: true, mode: 'push' },
                            },
                            modes: {
                                repulse: { distance: 120, duration: 0.4 },
                                push: { quantity: 4 },
                            },
                        },
                        particles: {
                            number: { value: 100 },
                            color: { value: ['#4dabf5', '#1e90ff', '#ffffff'] },
                            shape: { type: 'circle' },
                            opacity: { value: 0.3 },
                            size: { value: { min: 1, max: 4 } },
                            links: { enable: true, distance: 150, color: '#4dabf5', opacity: 0.1, width: 1 },
                            move: { enable: true, speed: 1.2, direction: 'none', outModes: 'out' },
                        },
                    }}
                />

                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ zIndex: 1 }}
                >
                    {/* Gradient Title */}
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            // background: 'linear-gradient(90deg, #4dabf5, #1e90ff)',
                            background: '#fff',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 2,
                        }}
                    >
                        Hi, I'm Srinath Lingadahalli
                    </Typography>

                    {/* Typewriter Effect */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#e0e0e0',
                            fontWeight: 500,
                            mb: 4,
                            minHeight: '2rem',
                        }}
                    >
                        <Typewriter
                            options={{
                                strings: ['Software Developer', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'React & Node.js Enthusiast'],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 40,
                            }}
                        />
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            px: 6,
                            py: 1.8,
                            fontWeight: 600,
                            fontSize: '1rem',
                            // backgroundColor: '#4dabf5',
                            backgroundColor: '#0f1f3d',
                            color: '#fff',
                            border: '1px solid #4dabf5',
                            boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
                            borderRadius: '30px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#1e90ff',
                                transform: 'scale(1.08)',
                                boxShadow: '0px 12px 24px rgba(0,0,0,0.3)',
                            },
                        }}
                        onClick={() => navigatorate('/projects')}
                    >
                        View Projects
                    </Button>
                </motion.div>
            </Box>

            {/* ===== About Me Section ===== */}
            <Box sx={{ py: 5, px: 2, maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f1f3d' }}>Professional Bio</Typography>
                <Typography variant="body1" sx={{ mt: 3, color: '#111111ff', lineHeight: { xs: 1.5, sm: 1.7 }, textAlign: { xs: "left", sm: "justify" }, fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" }, px: { xs: 1, sm: 3 }, }}>
                    Software Developer with 3 years of professional experience designing and developing enterprise frontend and backend solutions. Experienced in building scalable applications, improving system performance, and delivering reliable software through clean architecture, efficient problem-solving, and continuous learning.
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        mt: 4,
                        px: 5,
                        py: 1.5,
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: '#0f1f3d',
                        borderColor: '#4dabf5',
                        borderRadius: '30px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#4dabf5',
                            color: '#0f1f3d',
                            borderColor: '#4dabf5',
                            transform: 'scale(1.05)',
                        },
                    }}
                    onClick={() => handleDownload()}
                >
                    Download Resume
                </Button>
            </Box>

            {/* ===== Experience Section ===== */}
            <Box sx={{ py: 5, px: 2 }}>
                <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#0f1f3d' }}>Experience</Typography>
                <Grid container spacing={4} sx={{ mt: 5 }} justifyContent="center">
                    {experiences.map((exp, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }}>
                                <Card sx={{ p: 3, borderRadius: 3, backgroundColor: '#0f1f3d', border: '1px solid #4dabf5', boxShadow: '0 4px 15px rgba(255,255,255,0.1)' }}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>{exp.title}</Typography>
                                        <Typography variant="subtitle1" sx={{ color: '#e0e0e0', mb: 1 }}>{exp.company}</Typography>
                                        <Typography variant="subtitle1" sx={{ color: '#e0e0e0', mb: 1 }}>{exp.duration} | ({getExperienceDuration(exp.duration)})</Typography>
                                        {/* Achievements */}
                                        {/* {exp.achievements?.length > 0 && (
                                            <>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#4dabf5', mt: 2 }}>
                                                    Achievements
                                                </Typography>
                                                <ul style={{ paddingLeft: '1rem', color: '#e0e0e0' }}>
                                                    {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                                </ul>
                                            </>
                                        )} */}

                                        {/* Responsibilities */}
                                        {exp.responsibilities?.length > 0 && (
                                            <>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#4dabf5', mt: 2 }}>
                                                    Responsibilities
                                                </Typography>
                                                <ul style={{ paddingLeft: '1rem', color: '#e0e0e0' }}>
                                                    {exp.responsibilities.map((res, i) => <li key={i}>{res}</li>)}
                                                </ul>
                                            </>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ===== Skills Section ===== */}
            <Box sx={{ py: 5, px: 2, maxWidth: "1200px", mx: 'auto' }}>
                <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: '#0f1f3d' }}>Skills</Typography>
                <Grid container spacing={2} sx={{ mt: 5 }} justifyContent="center">
                    {skills.map((skill, idx) => (
                        <Grid item xs={12} sm={6} md={6} key={idx}>
                            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }}>
                                <Card
                                    sx={{
                                        p: { xs: 2, sm: 3 },
                                        borderRadius: 3,
                                        backgroundColor: "#0f1f3d",
                                        border: "1px solid #4dabf5",
                                        boxShadow: "0 4px 15px rgba(255,255,255,0.1)",
                                        width: { xs: "90%", sm: "90%", md: "500px" },
                                        minHeight: { xs: "auto", sm: "220px" },
                                        mx: "auto",
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#ffffff" }}>
                                        {skill.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: "#4dabf5", mb: 1 }}>
                                        {skill.category}
                                    </Typography>

                                    {/* Progress */}
                                    <Box sx={{ mt: 1 }}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={skill.level}
                                            sx={{
                                                height: 10,
                                                borderRadius: 5,
                                                backgroundColor: "#555",
                                                "& .MuiLinearProgress-bar": { backgroundColor: "#4dabf5" },
                                            }}
                                        />
                                        <Typography variant="body2" sx={{ mt: 1, color: "#e0e0e0" }}>
                                            {skill.level}%
                                        </Typography>
                                    </Box>

                                    {/* Description */}
                                    <Typography variant="body2" sx={{ mt: 2, color: "#e0e0e0" }}>
                                        {skill.description}
                                    </Typography>

                                    {/* Technologies */}
                                    <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                                        {skill.technologies?.map((tech, i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: 2,
                                                    fontSize: "0.75rem",
                                                    backgroundColor: "#1a2a4a",
                                                    color: "#4dabf5",
                                                }}
                                            >
                                                {tech}
                                            </Box>
                                        ))}
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ===== Projects Section ===== */}
            <Box sx={{ py: 3, px: 2 }}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontWeight: 700, color: '#0f1f3d' }}
                >
                    Projects
                </Typography>

                <Grid container spacing={2} sx={{ mt: 3, justifyContent: 'center' }}>
                    {projects.map((project, idx) => (
                        <Grid item key={idx}>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                            >
                                <Card
                                    sx={{
                                        p: { xs: 2, sm: 3 },
                                        borderRadius: 3,
                                        backgroundColor: '#0f1f3d',
                                        border: '1px solid #4dabf5',
                                        boxShadow: '0 4px 15px rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',

                                        // Responsive width/height
                                        width: { xs: "90%", sm: "320px", md: "320px", lg: "350px" },
                                        minHeight: { xs: "220px", sm: "220px", md: "200px", lg: "200px" },
                                        mx: "auto",
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="body" sx={{ fontWeight: 700, color: '#ffffff' }}>
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1, color: '#e0e0e0' }}>
                                            {project.desc}
                                        </Typography>
                                    </CardContent>

                                    <Box sx={{ textAlign: 'center' }}>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                px: 5,
                                                py: 1.5,
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                color: '#fff',
                                                borderColor: '#4dabf5',
                                                borderRadius: '30px',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#4dabf5',
                                                    color: '#0f1f3d',
                                                    borderColor: '#4dabf5',
                                                    transform: 'scale(1.05)',
                                                },
                                            }}
                                            onClick={() => navigatorate('/projects', { state: { projectName: project.name } })}
                                        >
                                            View Project
                                        </Button>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ===== Contact Section ===== */}
            <Box sx={{ py: 5, px: 2, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f1f3d' }}>
                    Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: '#111111ff' }}>
                    Reach out through any of the following
                </Typography>

                <Grid container spacing={4} sx={{ mt: 5, justifyContent: 'center' }}>
                    {contactDetails.map((contact, idx) => (
                        <Grid item xs={12} sm={6} md={3} key={idx}>
                            <Paper
                                sx={{
                                    p: { xs: 2, sm: 3, md: 4 },
                                    borderRadius: 3,
                                    backgroundColor: '#1a2a45',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    color: '#ffffff',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                    // width: { xs: "100%", sm: "250px", md: "200px" },
                                    // minHeight: { xs: "140px", sm: "120px", md: "100px" },
                                    width: {
                                        xs: '200px', // mobile
                                        sm: '220px', // tablet
                                        md: '200px', // laptop/desktop
                                        lg: '200px',
                                    },
                                    height: {
                                        xs: '120px',
                                        sm: '150px',
                                        md: '100px',
                                        lg: '100px',
                                    },
                                    mx: "auto",
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'translateY(-5px)' },
                                }}
                            >
                                <Box sx={{ mb: 2 }}>{contact.icon}</Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                    {contact.label}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#cfd8dc', textAlign: 'center' }}>
                                    {contact.value}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Box>
    );
}

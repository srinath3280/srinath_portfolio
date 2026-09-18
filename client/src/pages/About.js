import React, { useCallback, useState } from 'react';
import { Box, Typography, Avatar, Button, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Typewriter from 'typewriter-effect';

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

export default function About() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const handleDownload = () => {

        const pdfUrl = '/files/Srinath_Lingadahalli_Software_Developer_Resume.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Srinath_Lingadahalli_Software_Developer_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                px: 2,
                py: 2,
                textAlign: 'center',
                backgroundColor: 'transparent'
            }}
        >
            {/* Subtle Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: false }, resize: true },
                    },
                    particles: {
                        color: { value: ['#4dabf5', '#1e90ff', '#ffffff'] },
                        links: { enable: true, distance: 150, color: '#4dabf5', opacity: 0.1, width: 1 },
                        collisions: { enable: false },
                        move: { enable: true, speed: 0.2, direction: 'none', outModes: 'out' },
                        number: { density: { enable: true, area: 800 }, value: 40 },
                        opacity: { value: 0.05 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 2 } }
                    },
                    detectRetina: true
                }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />

            {/* Avatar */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ zIndex: 1, cursor: 'pointer' }}
                onClick={handleOpen}
            >
                <Box
                    component="img"
                    src="/profile.JPG"
                    alt="Profile"
                    sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        mb: 3,
                        objectFit: 'cover',
                    }}
                />
            </motion.div>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xl"
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }
                }}
            >
                {/* Close Button */}
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        color: '#fff',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                        zIndex: 10
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Fullscreen Image */}
                <Box
                    component="img"
                    src="/profile.JPG"
                    alt="Profile Fullscreen"
                    sx={{
                        maxHeight: '90vh',
                        maxWidth: '90vw',
                        borderRadius: 2,
                        objectFit: 'contain',
                    }}
                />
            </Dialog>


            {/* Heading */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ zIndex: 1 }}
            >
                <Typography variant="h4" gutterBottom>
                    Professional Bio
                </Typography>
            </motion.div>

            {/* Typewriter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                style={{ zIndex: 1, marginBottom: 20 }}
            >
                <Typography variant="h6">
                    <Typewriter
                        options={{
                            strings: ['Software Developer', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'React & Node.js Enthusiast'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30
                        }}
                    />
                </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{ zIndex: 1, maxWidth: 700 }}
            >
                <Typography variant="body1" align="center" sx={{ lineHeight: 1.8, mb: 3, textAlign: 'justify' }}>
                    Software Developer with 3 years of experience designing and developing scalable web applications using <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Python</strong>, and <strong>MySQL</strong>. Experienced in building responsive user interfaces, developing secure RESTful APIs, implementing JWT-based authentication, and integrating third-party services.
                </Typography>

                <Typography variant="body1" align="center" sx={{ lineHeight: 1.8, mb: 3, textAlign: 'justify' }}>
                    I enjoy building end-to-end web solutions that solve real business problems, from customer-facing applications to internal management systems. I focus on writing clean, maintainable code, optimizing application performance, and delivering reliable, user-centric experiences through effective collaboration and continuous learning.
                </Typography>
            </motion.div>

            {/* Resume Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                style={{ zIndex: 1 }}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{ px: 4, py: 1.5 }}
                    onClick={() => handleDownload()}
                >
                    Download Resume
                </Button>
            </motion.div>
        </Box>
    );
}

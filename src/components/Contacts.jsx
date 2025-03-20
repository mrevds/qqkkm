import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Footer from './Footer';

const Contacts = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg,rgb(255, 255, 255),rgb(255, 255, 255))',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    padding: { xs: '20px', md: '40px' },
                    borderRadius: '15px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '800px',
                    width: '80%',
                    textAlign: 'center',
                    border: '1px solid #e0e0e0',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    mt: 4,
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#333', mb: 4, fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                    Контактная информация
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '20px',
                                background: '#fff',
                                borderRadius: '10px',
                                border: '1px solid #e0e0e0',
                                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
                                    borderRadius: '50%',
                                    padding: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 2,
                                }}
                            >
                                <FaMapMarkerAlt size={30} color="#fff" />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, color: '#333' }}>
                                Адрес
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#666' }}>
                                Ул. А.Шамуратова 102Б
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '20px',
                                background: '#fff',
                                borderRadius: '10px',
                                border: '1px solid #e0e0e0',
                                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    background: 'linear-gradient(135deg, #2575fc, #6a11cb)',
                                    borderRadius: '50%',
                                    padding: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 2,
                                }}
                            >
                                <FaPhoneAlt size={30} color="#fff" />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, color: '#333' }}>
                                Телефон
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#666' }}>
                                +998 61 222 12 46
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#666' }}>
                                +998 99 956 77 96
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '20px',
                                background: '#fff',
                                borderRadius: '10px',
                                border: '1px solid #e0e0e0',
                                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    background: 'linear-gradient(135deg, #ff6f61, #ffa500)',
                                    borderRadius: '50%',
                                    padding: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 2,
                                }}
                            >
                                <FaEnvelope size={30} color="#fff" />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, color: '#333' }}>
                                Telegram
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#666' }}>
                                <a href="https://t.me/kassa4">@kassa4</a>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Footer />
        </Box>
    );
};

export default Contacts;
import React, { useState } from "react";
import { Box, Typography, Grid, Table, TableBody, TableCell, TableRow, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import Footer from "./Footer";

import mercury1 from "../assets/mercury/merc1.png";
import mercury2 from "../assets/mercury/merc2.png";
import mercury3 from "../assets/mercury/merc3.png";
import mercury4 from "../assets/mercury/merc4.png";

const images = [mercury1, mercury2, mercury3, mercury4];

const ProductWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  margin: "auto",
  paddingTop: "20px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "300px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  border: "1px solid #e0e0e0",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "200px",
    marginBottom: "20px",
  },
}));

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  transition: "opacity 0.3s ease",
});

const ThumbnailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px",
  [theme.breakpoints.down("sm")]: {
    gap: "5px",
  },
}));

const Thumbnail = styled("img")(({ isActive, theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "8px",
  border: isActive ? "2px solid #1976d2" : "1px solid #e0e0e0",
  cursor: "pointer",
  opacity: isActive ? 1 : 0.7,
  transition: "opacity 0.3s ease, transform 0.3s ease",
  "&:hover": {
    opacity: 1,
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
  },
}));

const FeaturesCard = styled(Box)(({ theme }) => ({
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  border: "1px solid #e0e0e0",
  textAlign: "left",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "15px",
  },
}));

const MercuryProduct = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ProductWrapper>

      <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: "bold", marginBottom: 2, color: "#333" }}>
        Онлайн-касса Mercury 115F UZ
      </Typography>


      <Typography variant="body1" sx={{ color: "#666", marginBottom: "20px", fontSize: isMobile ? "0.9rem" : "1rem" }}>
        Компактная и надежная касса для малого бизнеса, соответствующая требованиям законодательства.
      </Typography>

      <Grid container spacing={3} sx={{ marginBottom: "30px" }}>

        <Grid item xs={12} md={4}>
          <ImageContainer>
            <StyledImage src={images[currentImageIndex]} alt="Mercury 115F UZ" />
          </ImageContainer>
          <ThumbnailContainer>
            {images.map((img, index) => (
              <Thumbnail
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                isActive={index === currentImageIndex}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </ThumbnailContainer>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FeaturesCard>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", marginBottom: 1, fontSize: isMobile ? "1rem" : "1.25rem" }}>
                  🚀 Высокая скорость печати
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>
                  До 12 строк в секунду – быстрая печать чеков.
                </Typography>
              </FeaturesCard>
            </Grid>
            <Grid item xs={12}>
              <FeaturesCard>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", marginBottom: 1, fontSize: isMobile ? "1rem" : "1.25rem" }}>
                  🔋 Автономная работа
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>
                  Аккумулятор до 10 часов без подзарядки – идеально для мобильных точек.
                </Typography>
              </FeaturesCard>
            </Grid>
            <Grid item xs={12}>
              <FeaturesCard>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", marginBottom: 1, fontSize: isMobile ? "1rem" : "1.25rem" }}>
                  📡 Гибкие подключения
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>
                  Поддержка Wi-Fi и Bluetooth для удобной интеграции.
                </Typography>
              </FeaturesCard>
            </Grid>
            <Grid item xs={12}>
              <FeaturesCard>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", marginBottom: 1, fontSize: isMobile ? "1rem" : "1.25rem" }}>
                  🏷 Компактный дизайн
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>
                  Легкий и компактный, идеально подходит для небольших пространств.
                </Typography>
              </FeaturesCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "40px", overflowX: "auto" }}>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          📊 Характеристики
        </Typography>
        <Table sx={{ minWidth: 300, backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #e0e0e0", overflow: "hidden" }}>
          <TableBody>
            <TableRow sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}>
              <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Дисплей</TableCell>
              <TableCell sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>10-разрядный ЖК-индикатор</TableCell>
            </TableRow>
           
            <TableRow sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}>
              <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Размеры</TableCell>
              <TableCell sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>200×200×80 мм</TableCell>
            </TableRow>
            <TableRow sx={{ "&:nth-of-type(even)": { backgroundColor: "#fff" } }}>
              <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Вес</TableCell>
              <TableCell sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>1.5 кг</TableCell>
            </TableRow>
            <TableRow sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}>
              <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Рабочая температура</TableCell>
              <TableCell sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>-10°C до +40°C</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Footer />
    </ProductWrapper>
  );
};

export default MercuryProduct;
import React, { useState } from "react";
import { Box, Typography, Grid, Table, TableBody, TableCell, TableRow, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

// Импорт изображений кассы
import orion1 from "../assets/orion/orion1.png";
import orion2 from "../assets/orion/orion2.png";
import orion3 from "../assets/orion/orion3.png";
import orion4 from "../assets/orion/orion4.png";
import Footer from "./Footer.jsx";

const images = [orion1, orion2, orion3, orion4];

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
    width: "100%", // На мобилках фотка занимает всю ширину
    height: "200px", // Уменьшаем высоту
    marginBottom: "20px", // Добавляем отступ снизу
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
    gap: "5px", // Уменьшаем отступы между миниатюрами на мобильных устройствах
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
    width: "40px", // Уменьшаем размер миниатюр на мобильных устройствах
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

const OrionProduct = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)"); // Определяем, является ли устройство мобильным

  return (
    <ProductWrapper>
      {/* Заголовок */}
      <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: "bold", marginBottom: 2, color: "#333" }}>
        Онлайн-касса Orion 100FUZ
      </Typography>

      {/* Краткое описание */}
      <Typography variant="body1" sx={{ color: "#666", marginBottom: "20px", fontSize: isMobile ? "0.9rem" : "1rem" }}>
        Надежная и функциональная касса для бизнеса, соответствующая требованиям законодательства.
      </Typography>

      {/* Основной контент: фотка и карточки */}
      <Grid container spacing={3} sx={{ marginBottom: "30px" }}>
        {/* Фотка слева */}
        <Grid item xs={12} md={4}>
          <ImageContainer>
            <StyledImage src={images[currentImageIndex]} alt="Orion 100FUZ" />
          </ImageContainer>
          {/* Миниатюры изображений */}
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

        {/* Карточки справа */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FeaturesCard>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", marginBottom: 1, fontSize: isMobile ? "1rem" : "1.25rem" }}>
                  🚀 Высокая скорость печати
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>
                  До 14 строк в секунду – быстрее обслуживание клиентов.
                </Typography>
              </FeaturesCard>
            </Grid>
            <Grid item xs={12}>
              <FeaturesCard>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", marginBottom: 1, fontSize: isMobile ? "1rem" : "1.25rem" }}>
                  🔋 Автономная работа
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>
                  Аккумулятор до 8 часов без подзарядки – удобно для мобильных точек.
                </Typography>
              </FeaturesCard>
            </Grid>
            <Grid item xs={12}>
              <FeaturesCard>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", marginBottom: 1, fontSize: isMobile ? "1rem" : "1.25rem" }}>
                  📡 Гибкие подключения
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>
                  Поддержка Wi-Fi, Bluetooth и 2G/3G для отправки данных.
                </Typography>
              </FeaturesCard>
            </Grid>
            <Grid item xs={12}>
              <FeaturesCard>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", marginBottom: 1, fontSize: isMobile ? "1rem" : "1.25rem" }}>
                  🏷 Большая база товаров
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>
                  До 20 000 наименований товаров в памяти.
                </Typography>
              </FeaturesCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Таблица с характеристиками */}
      <Box sx={{ marginTop: "40px", overflowX: "auto" }}>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          📊 Характеристики
        </Typography>
        <Table sx={{ minWidth: 300, backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #e0e0e0", overflow: "hidden" }}>
          <TableBody>
            <TableRow sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}>
              <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Дисплей</TableCell>
              <TableCell sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>12-разрядный ЖК-индикатор</TableCell>
            </TableRow>
            <TableRow sx={{ "&:nth-of-type(even)": { backgroundColor: "#fff" } }}>
              <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Память</TableCell>
              <TableCell sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Фискальная, хранение до 6 лет</TableCell>
            </TableRow>
            <TableRow sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}>
              <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Размеры</TableCell>
              <TableCell sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>240×256×80 мм</TableCell>
            </TableRow>
            <TableRow sx={{ "&:nth-of-type(even)": { backgroundColor: "#fff" } }}>
              <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Вес</TableCell>
              <TableCell sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>1.8 кг</TableCell>
            </TableRow>
            <TableRow sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}>
              <TableCell sx={{ fontWeight: "bold", color: "#333", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>Рабочая температура</TableCell>
              <TableCell sx={{ color: "#666", fontSize: isMobile ? "0.8rem" : "0.875rem" }}>-20°C до +40°C</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Footer />
    </ProductWrapper>
  );
};

export default OrionProduct;
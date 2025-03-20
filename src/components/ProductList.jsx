import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Импорт навигации
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaArrowRight } from "react-icons/fa";
import product1 from "../assets/orion/orion1.png";
import product2 from "../assets/orion/orion2.png";
import product3 from "../assets/orion/orion3.png";
import product4 from "../assets/orion/orion4.png";
import product5 from "../assets/mercury/merc1.png";
import product6 from "../assets/mercury/merc2.png";
import product7 from "../assets/mercury/merc3.png";
import product8 from "../assets/mercury/merc4.png";

const Wrapper = styled(Box)({
  maxWidth: 1200,
  margin: "auto",
  textAlign: "center",
  padding: "20px 16px",
});

const Title = styled(Typography)({
  fontSize: "28px",
  fontWeight: "bold",
  color: "#2c3e50",
  marginBottom: "20px",
  marginTop: "60px",
});

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "16px",
});

const StyledCard = styled(Card)({
    width: "calc(50% - 16px)", // 2 карточки в ряд
    maxWidth: 480,
    minWidth: 300,
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.02)",
    },
    "@media (max-width: 768px)": {
        width: "100%", // Full width on mobile
        height: "100vw", // Height equal to width to make it square
    },
});

const ImageContainer = styled(Box)({
    position: "relative",
    width: "100%",
    height: 440,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
  });

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain", // Гарантия, что любые фото впишутся без обрезки
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const NavigationDot = styled(Box)(({ active }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: active ? "#1976d2" : "#bdbdbd",
  margin: "0 4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
}));

const ActionButton = styled(Button)({
   
    backgroundColor: "#ff9800",
    color: "#ffffff",
    borderRadius: 25,
    padding: "8px 20px",
    marginTop: "200px",
    "&:hover": {
      backgroundColor: "#e68900",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
  });

const OverlayContainer = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.4)", // затемнение
    color: "#fff", // белый цвет текста
    padding: "16px",
    transition: "opacity 0.3s ease-in-out",
  });

  const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(timer);
    }, [product.images.length]);
  
    return (
      <StyledCard elevation={3}>
        <ImageContainer>
          <StyledImage src={product.images[currentImageIndex]} alt={product.title} />
          
          {/* Затемненный блок с текстом и кнопкой */}
          <OverlayContainer>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {product.title}
            </Typography>
            {/* <Typography variant="body2" sx={{ mb: 1.5 }}>
              {product.description}
            </Typography> */}
            <ActionButton variant="contained" onClick={() => navigate(product.link)}>
              Подробнее
            </ActionButton>
          </OverlayContainer>
        </ImageContainer>
      </StyledCard>
    );
  };
  

const ProductGrid = () => {
  const products = [
    {
      title: "Онлайн-касса",
      description: "Онлайн-касса",
      price: "от 25 000 руб.",
      images: [product1, product2, product3, product4],
      link: "/orion100fuz", // Ссылка на товар
    },
    {
      title: "Онлайн-касса",
      description: "Онлайн-касса",
      price: "от 32 000 руб.",
      images: [product5, product6, product7,product8],
      link: "/mercury115fuz", // Ссылка на товар
    },
  ];

  return (
    <Wrapper>
      <Title>Кассовые аппараты и терминалы</Title>
      <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
        Продажа и настройка онлайн-касс для бизнеса.
      </Typography>
      <Container>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default ProductGrid;

import { useEffect, useState } from "react";
import "./TestimonialCarousel.css";

const testimonials = [
  { name: "Алексей", text: "Отличный сервис! Всё работает идеально." },
  { name: "Марина", text: "Быстро, удобно и качественно. Спасибо!" },
  { name: "Игорь", text: "Рекомендую всем, кто ценит удобство." },
  { name: "Светлана", text: "Лучшее, что я пробовала за последнее время!" },
  { name: "Дмитрий", text: "Очень удобный интерфейс, все понятно." },
  { name: "Елена", text: "Буду пользоваться еще, всё супер!" },
];

export default function TestimonialCarousel() {
  const [position, setPosition] = useState(0);
  const visibleCards = 3; // Сколько карточек видно одновременно

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % (testimonials.length - (visibleCards - 1)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${position * (100 / visibleCards)}%)` }}
      >
        {testimonials.map((t, index) => (
          <div key={index} className="carousel-item">
            <p className="name">{t.name}</p>
            <p className="text">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

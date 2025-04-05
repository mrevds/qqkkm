import React from "react";
import { motion } from "framer-motion";
import "./Features.css";

const steps = [
  {
    id: 1,
    title: "Интуитивный интерфейс",
    text: "Наши кассовые аппараты просты в использовании и не требуют долгого обучения.",
    extra: "⏩ 35% ускорение обработки заказов",
    icon: "💡",
  },
  {
    id: 2,
    title: "Надёжность и скорость",
    text: "Высокая производительность и отказоустойчивость в любых условиях.",
    extra: "📉 50% снижение времени на бухгалтерию",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Поддержка 24/7",
    text: "Мы всегда на связи и готовы помочь вам в любое время суток.",
    extra: "🛠️ 24/7 техническая поддержка",
    icon: "🤝",
  },
  {
    id: 4,
    title: "Доступная цена",
    text: "Лучшие цены на рынке и выгодные условия для вашего бизнеса.",
    extra: "🏢 400+ бизнесов по Каракалпакстану уже используют наши аппараты",
    icon: "🎯",
  },
  {
    "id": 5,
    "title": "Максимальная точность и контроль",
    "text": "Наши аппараты вмещаеют до 20 000 товаров, соответствует всем требованиям ГНК и гарантирует безупречный учет.",
    "extra": "🔍 Ежедневная автоматическая проверка баз, строгий контроль ИКПУ,штрих-кодов и полная прозрачность в нашем ПО.",
    "icon": "🛡️"
  },
  {
    "id": 6,
    "title": "Полный контроль в ваших руках",
    "text": "Управляйте базой товаров легко и удобно через нашу систему MRCONTROL в личном кабинете.",
    "extra": "📱 Полный доступ 24/7: редактируйте, обновляйте и проверяйте данные в реальном времени.",
    "icon": "⚙️"
  }


];

const Features = () => {
  return (
    <div className="features-container">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="feature-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <div className="feature-content">
            <motion.div
              className="feature-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {step.icon}
            </motion.div>
            <div>
              <h3 className="feature-title">{step.title}</h3>
              <p className="feature-text">{step.text}</p>
              <p className="feature-extra">{step.extra}</p>
            </div>
          </div>
          <motion.span
            className="feature-step"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            {`${step.id}`}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;

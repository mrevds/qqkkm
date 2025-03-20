// Statistics.js
import React from "react";
import "./Statistics.css";

const statisticsData = [
  { number: "35%", text: "Ускорение обработки заказов" },
  { number: "50%", text: "Снижение времени на бухгалтерию" },
  { number: "400+", text: "Бизнесов уже используют наши аппараты" },
  { number: "24/7", text: "Техническая поддержка в любое время" }
];

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics-container">
        <div className="statistics-header">
          <h2 className="statistics-title">🚀 Почему выбирают нас?</h2>
          <p className="statistics-description">
            Наши кассовые аппараты помогают бизнесу работать <b>быстрее, удобнее и эффективнее</b>. Давайте взглянем на <b>реальные цифры</b>:
          </p>
        </div>
        <div className="stats-row">
          {statisticsData.map((stat, index) => (
            <div className="stat-card" key={index}>
              <span className="stat-number">{stat.number}</span>
              <p className="stat-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

import React, { useState } from 'react';
import './HelpPage.css';
import Footer from './Footer';

const HelpPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату только через банковский перевод на наш расчетный счет. Реквизиты для оплаты будут предоставлены после оформления заказа.',
    },
    {
      question: 'Можно ли вернуть товар?',
      answer: 'Возврат товара невозможен.',
    },
    {
      question: 'Какая гарантия на товар?',
      answer: 'Мы предоставляем гарантию на товар сроком 1.5 года с момента покупки.',
    },
    {
      question: 'Как связаться со службой поддержки?',
      answer: 'Вы можете связаться с нашей службой поддержки по телефонам: +998612221246 или +998999567796. Также вы можете написать нам на электронную почту support@example.com.',
    },
    {
      question: 'Какие документы нужны для покупки?',
      answer: 'Для оформления заказа вам потребуются: кадастровый номер, печать организации, удостоверение личности и другие документы, которые уточнит наш менеджер.',
    },
  ];

  const handleQuestionClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="help-page">
      <div className="help-container">
        <h1>Помощь</h1>
        <div className="faq">
          {questions.map((item, index) => (
            <div
              className={`question ${activeQuestion === index ? 'active' : ''}`}
              key={index}
              onClick={() => handleQuestionClick(index)}
            >
              <div className="question-title">
                {item.question}
                <span className="arrow">&#9660;</span>
              </div>
              <div className="answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;
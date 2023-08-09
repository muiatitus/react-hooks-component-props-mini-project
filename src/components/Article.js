import React from "react";

function Article({ title, date, preview, minutes }) {
  const coffeeCup = "☕️";
  const bentoBox = "🍱";
  const emojis = minutes < 30 ? coffeeCup : bentoBox;
  const emojiCount = Math.ceil(minutes / (minutes < 30 ? 5 : 10));

  const renderEmojis = () => {
    return Array.from({ length: emojiCount }, (_, index) => (
      <span key={index}>{emojis}</span>
    ));
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>
        {renderEmojis()} {minutes} min read
      </p>
    </article>
  );
}

export default Article;

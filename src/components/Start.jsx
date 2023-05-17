import React, { useState } from "react";

export default function Start(props) {
  //при каждом изменении формы сохраняем в объект введенные значения
  function handleChange(event) {
    const { name, value } = event.target;
    props.setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
   //форма для выбора категории и всех настроек
  return (
    <div className="start">
      <h1 className="start-title">Quizzical</h1>
      <form onSubmit={props.handleStart} className="form">
        <div className="form__body">
          <div className="form__number">
            <label htmlFor="countQues">Number of question</label>
            <input
              className="number"
              type={"number"}
              step="1"
              min="1"
              max="50"
              value={props.formData.countQues}
              id="countQues"
              name="countQues"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="difficult">Select Difficulty</label>
            <select
              value={props.formData.difficult}
              onChange={handleChange}
              name="difficult"
            >
              <option value="">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label htmlFor="type">Select Type</label>
            <select
              value={props.formData.type}
              onChange={handleChange}
              name="type"
            >
              <option value="">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
          </div>
          <div>
            <label htmlFor="category">Select Category</label>
            <select
              value={props.formData.category}
              onChange={handleChange}
              name="category"
            >
              <option value="">Any Category</option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals & Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science & Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">Entertainment: Japanese Anime & Manga</option>
              <option value="32">Entertainment: Cartoon & Animations</option>
            </select>
          </div>
        </div>
        <button type="submit" className="start-btn">
          Start quiz
        </button>
      </form>
    </div>
  );
}

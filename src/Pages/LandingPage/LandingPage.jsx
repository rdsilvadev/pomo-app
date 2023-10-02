import React from 'react';
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import "./landingPage.css";
import "../TasksPage/home.css";
import { useTheme } from "../../Context/theme-context";
const LandingPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div
          className={`landing-section-one ${
            theme === "dark" ? "pomodoro-dark-theme txt-white" : ""
          }`}
        >
          <div className="pomodoro-description">
            <h1>
              Achieve productivity with simple, charming, insightful time
              tracking
            </h1>
            <p>
              Life is crazy enough, simplify your productivity journey and start
              turning to-dos into have-dones in 25-minutes. The new focus
              booster is the tool you need to inspire success every day.
            </p>
            <div className="btns-align">
              <button
                className="pomodoro-btn"
                onClick={() => navigate("/tasks")}
              >
                Let's Try Out!
              </button>
            </div>
          </div>
          {theme === "light" ? (
            <img src="/pomodoro-img-1.jpg" className="light-theme-img" />
          ) : (
            <img src="/dark-bg-1.jpg" className="light-theme-img" alt="" />
          )}
        </div>
        <div
          className={`landing-section-two ${
            theme === "dark" ? "pomodoro-dark-theme txt-white" : ""
          }`}
        >
          {theme === "light" ? (
            <img src="/pomodoro-img-2.png" className="light-theme-img" alt="" />
          ) : (
            <img src="/dark-bg-2.jpg" className="light-theme-img" alt="" />
          )}

          <div className="pomodoro-description">
            <h1>Balance your goals</h1>
            <p>
              Spend time working toward all your goals; work, life, fitness and
              more. Focus booster makes you accountable and provides insight
              into how much time you actually dedicate to your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { LandingPage };

import { useState } from "react";

export default function BirthdayCard() {
  const [showAlert, setShowAlert] = useState(false);

  const handleWish = () => {
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="page">
        <div className="polaroid">
          <div className="tape"></div>
          <img
            src="https://i.pinimg.com/736x/ea/5f/2d/ea5f2da555e789300dccbe98bf37378e.jpg"
            alt="Aniversário"
            className="avatar"
          />
          <div className="caption">Hoje é meu aniversário!</div>
          <button onClick={handleWish}>🎈 Me deseje feliz aniversário!</button>
        </div>

        {showAlert && (
          <div className="modal-overlay" onClick={closeAlert}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
              role="alertdialog"
              aria-modal="true"
            >
              <p>💖 Muito obrigada! Você fez meu dia mais feliz! 🎂✨</p>
              <a
                href="https://discord.com/users/1014642801343987792"
                target="_blank"
                rel="noopener noreferrer"
                className="discord-link"
              >
                💬 Me chamar no Discord
              </a>
            </div>
          </div>
        )}

        <footer className="footer">
          feito por <span className="just-soraka">just soraka</span> 💖
        </footer>
      </div>

      <style jsx>{`
        .page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          min-width: 100vw;
          overflow: hidden;
          background: linear-gradient(135deg, #fdf0f0, #ffe4e1, #f8bbd0, #f48fb1);
          background-size: 400% 400%;
          animation: gradientShift 10s ease infinite;
          font-family: "Comic Sans MS", cursive, sans-serif;
          position: relative;
          flex-direction: column;
          padding-bottom: 60px; /* espaço pro footer */
        }

        .polaroid {
          position: relative;
          background: white;
          padding: 10px 10px 30px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          width: 300px;
          text-align: center;
          border: 2px solid #ffd6e7;
          border-radius: 10px;
          transform: rotate(-3deg);
          animation: dropIn 1s ease forwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 1;
          margin-bottom: 20px;
        }

        .polaroid:hover {
          transform: rotate(0deg) scale(1.05);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
        }

        .avatar {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 5px;
        }

        .caption {
          margin-top: 15px;
          font-size: 1.2rem;
          color: #ff6f91;
          font-weight: bold;
        }

        button {
          margin-top: 15px;
          background: #ffb6c1;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s ease, transform 0.2s ease;
          box-shadow: 0 5px 10px rgba(255, 182, 193, 0.4);
        }

        button:hover {
          background: #ff6f91;
          transform: scale(1.1);
        }

        .tape {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 20px;
          background: rgba(255, 192, 203, 0.7);
          border-radius: 4px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        @keyframes dropIn {
          0% {
            opacity: 0;
            transform: translateY(-50px) rotate(-10deg) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: rotate(-3deg) scale(1);
          }
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.25);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease forwards;
        }

        .modal {
          background: #fff0f6;
          padding: 25px 30px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(255, 105, 135, 0.5);
          max-width: 320px;
          text-align: center;
          font-size: 1.2rem;
          color: #ff4d6d;
          font-weight: 600;
          animation: popIn 0.3s ease forwards;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal p {
          margin: 0;
          line-height: 1.4;
        }

        .discord-link {
          background: #ff6f91;
          color: white;
          padding: 10px 18px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 5px 10px rgba(255, 111, 145, 0.7);
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .discord-link:hover {
          background: #ff4d6d;
          transform: scale(1.05);
        }

        /* Footer fofo e meigo */
        .footer {
          position: fixed;
          bottom: 15px;
          width: 100%;
          text-align: center;
          font-family: "Comic Sans MS", cursive, sans-serif;
          font-size: 1rem;
          color: #ff6f91;
          user-select: none;
          pointer-events: none;
          opacity: 0.9;
          z-index: 2000;
          text-shadow: 1px 1px 3px rgba(255, 182, 193, 0.7);
          background: rgba(255, 255, 255, 0.6);
          padding: 6px 12px;
          border-radius: 12px;
          width: max-content;
          margin: 0 auto;
          box-shadow: 0 2px 8px rgba(255, 182, 193, 0.4);
          pointer-events: none;
        }

        .just-soraka {
          font-weight: 700;
          font-style: italic;
          color: #ff4d6d;
          font-size: 1.1rem;
          margin-left: 5px;
          pointer-events: auto;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Global styles para html e body */}
      <style global jsx>{`
        html,
        body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden; /* Remove barras de rolagem do body */
          font-family: "Comic Sans MS", cursive, sans-serif;
        }
      `}</style>
    </>
  );
}

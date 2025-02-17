/* styles.css */
body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(45deg, #2c3e50, #3498db);
    font-family: Arial, sans-serif;
}

.slider {
    width: 350px;
    height: 150px;
    overflow: hidden;
    position: relative;
}

.slide {
    display: flex;
    align-items: center;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    transition: transform 0.5s ease-in-out;
}

.circle {
    width: 50px;
    height: 50px;
    background: rgba(173, 216, 230, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    margin-right: 15px;
}

.content h2 {
    margin: 0;
    font-size: 18px;
}

.content p {
    margin: 5px 0 0;
    font-size: 14px;
    color: gray;
}

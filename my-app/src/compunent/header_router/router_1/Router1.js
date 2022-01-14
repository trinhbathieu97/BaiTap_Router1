import React from "react";
import "../router_1/Router1.css";
import { Link } from "react-router-dom";
import logoVn from "../../imgApp/co-nhat.webp";
import BNlogo from "../../imgApp/VN.png";

const Router1 = () => {
  return (
    <div>
      <div className="header_router1">
        <div className="header_router1_color"></div>

        <div id="NavBar">
          <div>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 705.38 356.84"
              width="112"
              height="84"
            >
              <path
                className="cls-1"
                fill="#00daff"
                d="M647,254.16V220.48H613.33V207.76c0-7.61,4.36-12,12-12H647V162.1h12.72c7.61,0,12,4.37,12,12v21.71h33.68v24.69H671.7v33.68Z"
              ></path>
              <path
                className="cls-1"
                fill="#00daff"
                d="M306.52,313.68h24.8q-5.44,20.83-20.83,31.75-15.37,11.42-38.69,11.41-28.28,0-44.14-18.35-15.87-17.87-15.88-51.09,0-31.74,15.38-49.6Q243,219.44,271.3,219.44q29.77,0,46.14,17.86,15.87,18.36,15.87,51.09v5.46a8.5,8.5,0,0,1-.5,3.47H247q.5,15.38,7.44,22.81,6.45,8,19.35,7.94a28.12,28.12,0,0,0,14.38-3.47,7,7,0,0,0,2.73-1.74c.83-.82,1.73-1.74,2.72-2.73q.51-1.49,3.73-4C299.5,314.51,302.55,313.68,306.52,313.68ZM247,275h50.6q-1-13.39-7-19.84-6.45-6.94-18.35-6.95-10.92,0-17.86,6.95T247,275Z"
              ></path>
              <path
                className="cls-1"
                fill="#00daff"
                d="M422.28,348.9a61.13,61.13,0,0,1-22.07,6.7,199.06,199.06,0,0,1-20.59,1.24q-17.85,0-31.24-9.68t-13.4-32q0-20.84,12.16-29.76t31-11.9a29.53,29.53,0,0,0,6-.74,79.11,79.11,0,0,1,7.94-1.24q21.81-3,21.82-12.9,0-7.44-7.69-9.67A51,51,0,0,0,392,246.73a36.23,36.23,0,0,0-12.41,2,13.48,13.48,0,0,0-7.93,7.44H338.46a38.18,38.18,0,0,1,13.88-25.29q13.4-11.42,38.19-11.42,27.78,0,41.67,9.43,14.39,9.93,14.38,27.78v45.13q0,19.85-7.19,31T422.28,348.9Zm-7.94-61q-6.94,3.48-19.34,6.45l-11.41,2.48q-8.93,2.49-12.89,6.45a20.18,20.18,0,0,0-3.48,10.91q0,7.44,4.47,11.91,4.46,4,12.89,4,13.89,0,21.83-7.93t7.93-21.83Z"
              ></path>
              <path
                className="cls-1"
                fill="#00daff"
                d="M544.11,313.68h24.8q-5.46,20.83-20.84,31.75-15.37,11.42-38.68,11.41-28.27,0-44.15-18.35-15.87-17.87-15.87-51.09,0-31.74,15.38-49.6,15.87-18.36,44.14-18.36,29.76,0,46.13,17.86a68.12,68.12,0,0,1,12.9,25.3H533.2a28.73,28.73,0,0,0-5-7.44q-6.43-6.94-18.35-6.95-10.9,0-17.85,6.95-8.92,9.91-8.93,32.73T492,320.13q6.44,8,19.34,7.94a28.1,28.1,0,0,0,14.38-3.47,6.83,6.83,0,0,0,2.73-1.74l2.73-2.73a21.85,21.85,0,0,1,4-4Q538.15,313.68,544.11,313.68Z"
              ></path>
              <path
                className="cls-1"
                fill="#00daff"
                d="M629.09,356.44a256.45,256.45,0,0,1-35.46-.5q-19.11-1.49-19.1-24.3V185.82h17.86a15.69,15.69,0,0,1,11.41,5,16.25,16.25,0,0,1,5,11.9V225h20.34v6.94a16,16,0,0,1-5,12.16,16.69,16.69,0,0,1-11.9,4.71h-3.48v73.41q0,8.43,9.93,8.43h10.41Z"
              ></path>
              <path
                className="cls-1"
                fill="#00daff"
                d="M215.46,356.84a33.29,33.29,0,0,0-.67-5.11c-2.88-9.5-10.08-13.87-19.23-15.66-1.82-.34-2.3-.89-2.38-2.64-.43-10.19-4.2-19.05-11.86-25.79-4.43-3.9-9.7-6.89-14.62-10.26-.69-.47-1.5-.82-2.64-1.45,2.39-1.14,4.39-2.05,6.36-3,14.68-7.32,27.19-17.1,35.23-31.75,9.62-17.53,7.82-37.37-4.74-52.89-8.39-10.36-19.34-17-31.6-21.78-1-.39-2.08-.82-3.16-1.24a5.41,5.41,0,0,1,.38-.74L168.1,183c15.65-14.31,24.8-31.57,24.2-53.28a6.46,6.46,0,0,1,1.43-3.53,20.48,20.48,0,0,0-1.56-25.9c-1.78-1.89-3.24-2.18-4.82-.24.76,2.73,1.65,5.26,2.13,7.87,1.54,8.36-2.15,14.72-9.3,16.14-5.12,1-9.53-.71-13.27-4.17-1.93-1.8-3.58-3.89-5.33-5.84-2.31.38-2.91,1.7-2.45,3.83,1.59,7.4,5.84,12.54,13,15,1.66.58,2.37,1.27,2.1,3-.79,5.12-1.2,10.31-2.34,15.33-2.51,11.15-7,21.36-15.47,29.4a5,5,0,0,1-3.46,1.13c-8.18-.55-16.33-1.31-24.5-1.92-2.35-.17-4.71,0-7.39,0,.6-1.08,1-1.84,1.46-2.6A53.19,53.19,0,0,0,129.47,158c.42-2.86-.09-6.39,1.43-8.41,1.64-2.19,5.11-3.09,7.87-4.29a4.66,4.66,0,0,1,3.35,0,10.17,10.17,0,0,0,13.74-13.35A10,10,0,0,0,144.73,126a10.22,10.22,0,0,0-8.11,10.26c0,1.05,0,2.64-.63,3.08a53.79,53.79,0,0,1-6.41,3.44,16,16,0,0,1-.63-1.52c-4.09-18.35-21.08-31.95-44.75-28.59-27.82,3.94-48.63,29.5-48.33,54.08,0,1.75-.73,2.3-2.32,2.51-4.06.55-8.11,1.34-12.17,1.8a3.48,3.48,0,0,1-2.69-1.24c-3-4.16-7.4-5.83-11.91-4.29A10.16,10.16,0,0,0,0,176a10,10,0,0,0,8,9.25c4.69,1,8.78-1.17,11.26-5.7a4.47,4.47,0,0,1,2.71-2c3.93-.81,7.93-1.27,11.86-2,2.12-.41,2.84.27,3.42,2.36,3.4,12.38,11.17,20.9,23.23,25.43.71.26,1.4.59,2.43,1-4.5,4.18-8.69,8.15-13,12-9.91,9-16.32,20.14-20,33a107.57,107.57,0,0,0-4.07,28.79,3.76,3.76,0,0,1-1.9,3.69,17.79,17.79,0,0,0-7.41,20.35c.67,2.36,1.86,2.94,4,2.2,1.43-9.3,5-13.7,11.38-14.23,3.53-.3,7,.08,10,2.15,4.73,3.24,5.69,8.36,6.41,13.41,3.11.57,3.22.5,4-2.16,2.43-8.26-1.09-17-8.61-21.82a4.83,4.83,0,0,1-2.11-3.22q-.3-13.64-.13-27.26a63.38,63.38,0,0,1,1-7.95h.72c.73,1.71,1.46,3.41,2.15,5.12,8.76,21.58,17.53,43.17,23.46,65.73A162.34,162.34,0,0,1,72,332c.46,3.17-.23,5.73-3.54,7.8a14.75,14.75,0,0,0-6.6,17h56.47a17.66,17.66,0,0,0-3.7-11.9c-3.22-4.26-7.74-6.44-12.72-8-.89-.26-2.09-1-2.31-1.75A128.25,128.25,0,0,1,94,305.86c-.1-1.82.61-2.41,2.3-2.33,4.72.2,9.48,0,14.15.59,14.66,1.74,28.14,6.56,39.55,16.19,6.79,5.72,12.08,12.66,13.55,21.54.81,4.91.16,10,.15,15ZM102.39,130.9c7.25.1,13.93,6.79,13.89,13.93,0,9.2-7.73,17.44-16.25,17.43-7.49,0-14.18-8.11-14.08-17C86,137,93.22,130.77,102.39,130.9ZM57.74,183.75c-9,0-15.63-6.68-15.6-15.56,0-10.28,9.47-20,19.32-20,8.35,0,16.37,8.62,16.3,17.46C77.66,175.22,68.18,183.8,57.74,183.75ZM161,260.22a48.46,48.46,0,0,1-21.6,12.9c-14,4.11-28.19,7.65-42.36,11.13-5.24,1.29-5.28.91-6.67-4.39-4.22-16.06-10.43-31.27-19.79-45.07-.88-1.29-1-2.26.2-3.22,2.94-2.44,5.69-5.19,8.9-7.22,15.58-9.83,32.51-14.86,51.06-13.49,9.88.72,19.11,3.48,26.89,9.94,6.83,5.67,10.46,12.95,10.69,20.72A25.13,25.13,0,0,1,161,260.22Z"
              ></path>
              <path
                className="cls-1"
                fill="#00daff"
                d="M66.93,54.11c-7.48-6.48-11.09-12.83-9.68-18.34,4-15.69,46.9-17.81,97.65-4.84C178.85,37.05,200.67,45.6,216.33,55c16.13,9.67,23.91,19.27,21.93,27h0c-2,7.75-13.42,12.43-32.2,13.19C187.8,96,164.55,93,140.61,86.86,107.7,78.45,80.73,66.06,66.93,54.11ZM227,65.85a86.11,86.11,0,0,0-12-8.51c-15.45-9.28-37-17.72-60.71-23.78-47.64-12.17-90.84-10.85-94.35,2.88-1.14,4.46,2,9.79,8.47,15.37C81.71,63.38,109.13,76,141.28,84.23,165,90.29,188,93.22,206,92.5c17.23-.69,28-4.75,29.68-11.15h0C236.73,77,233.64,71.63,227,65.85Z"
              ></path>
              <path
                className="cls-1"
                fill="#00daff"
                d="M110.71,115.08c-4.31-3.74-4.8-12.43-1.34-24.7,3.54-12.55,10.75-27.57,20.31-42.28S150,20.68,160.06,12.35c10.42-8.65,19-11.6,24-8.3,10.18,6.61,2.21,36.31-18.13,67.62s-44.24,50.65-54.41,44h0A7.47,7.47,0,0,1,110.71,115.08ZM183.17,6.74c-.18-.15-.36-.28-.55-.41-3.94-2.56-11.53.4-20.82,8.11C152,22.6,141.38,35.08,132,49.58s-16.51,29.24-20,41.53c-3.28,11.63-2.9,19.76,1.05,22.33h0c7.66,5,29.84-11.22,50.65-43.25C184,39,190,12.65,183.17,6.74Z"
              ></path>
              <path
                className="cls-1"
                fill="#00daff"
                d="M161.26,111.52c-10.44-9-22.15-25.06-31.28-42-8.31-15.45-14.32-31-16.93-43.7-2.7-13.24-1.34-22.07,3.84-24.86,11.55-6.21,34.49,19.89,50,48.71S191.52,112,180,118.19h0C175.23,120.75,168.55,117.84,161.26,111.52ZM134.05,9.78c-6.84-5.92-12.53-8.26-15.87-6.46-4,2.14-4.87,10.12-2.46,21.91,2.55,12.48,8.46,27.74,16.66,43,18.09,33.64,38.55,51.77,46.31,47.6h0c7.75-4.17,3.9-31.24-14.2-64.88C154.18,31.76,143.11,17.63,134.05,9.78Z"
              ></path>
              <circle
                className="cls-1"
                fill="#00daff"
                cx="145.85"
                cy="28.57"
                r="16.42"
              ></circle>
              <circle
                className="cls-1"
                fill="#00daff"
                cx="151.07"
                cy="87.16"
                r="12.72"
              ></circle>
              <circle
                className="cls-1"
                fill="#00daff"
                cx="126.62"
                cy="57.49"
                r="10.38"
              ></circle>
              <circle
                className="cls-1"
                fill="#00daff"
                cx="170.93"
                cy="60.72"
                r="7.88"
              ></circle>
              <circle
                className="cls-1"
                fill="#00daff"
                cx="179.84"
                cy="91.51"
                r="9.13"
              ></circle>
              <circle
                className="cls-1"
                fill="#00daff"
                cx="114.35"
                cy="26.22"
                r="9.72"
              ></circle>
            </svg>
          </div>
          <div className="Nav_text">
            <ul className="Nav_list">
              <li >
                <Link to="/" className="Home">ホーム</Link>
              </li>
              <li>会社情報</li>
              <li>サービス</li>
              <li className="hover">
                テクニカルスタック.
                <ul className="list_children--nav">
                  <li>
                    <Link to="/router-1">Reactのテクニカルスタック</Link>
                  </li>
                  <li>
                    <Link to="/router-2">React Nativeのテクニカルスタック</Link>
                  </li>
                </ul>
              </li>
              <li>当社のチーム</li>
              <li>プロジェクト</li>
              <li>お問い合わせ</li>
              <li>
                <img src={logoVn} alt="" />
              </li>
              <li>
                <img src={BNlogo} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="text_router1">
          <h1>Reactのテクニカルスタック</h1>
        </div>
      </div>
    </div>
  );
};

export default Router1;

import Link from 'next/link'

export default function Footer() {
  return (
<>
  <footer>
    <div className="footer__content">
      <div className="footer__left">
        <a
          aria-label="Credits"
          href="/twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <svg
              width="15"
              height="15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#fff"
                  d="M10.5,10.5H4.5L3.8,12H0.7l4.7-9h4.2l4.7,9h-3.1L10.5,10.5z M7.8,5.1H7.2L5.5,8.5h4L7.8,5.1z"
                />
              </g>
            </svg>
          </div>
        </a>
      </div>
      <div className="footer__center">
        <a
          className="link"
          href="/twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="link"
          href="/github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="link"
          href="/instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="footer__right">
        <a href="/github" target="_blank" rel="noopener noreferrer">
          <div className="vercel">
            <span className="atelier__title">
              Copyright <strong>©2021</strong>
            </span>
          </div>
        </a>
      </div>
    </div>
  </footer>
</>

  );
}

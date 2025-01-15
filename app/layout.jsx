import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <main >
          <div className="flex justify-center">
            <div>
              <nav>
                <ul>
                  <li>
                    <button>About</button>
                  </li>
                  <li>
                    <button>Proyects</button>
                  </li>
                  <li>
                    <button>Contacto</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div>{children}</div>
          </div>

          <div className="flex flex-col w-80 border-4 border-indigo-500/100">
            <aside className="flex-1 justify-items-center">
              <div>
                <figure>
                  {/* <img
                  src="./assets/images/my-avatar.png"
                  alt="Richard hanrick"
                  width="80"
                /> */}
                </figure>
                <div>
                  <h1>Alejo Montuori</h1>
                  <p>Software Developer</p>
                </div>
              </div>
              <div>
                <ul>
                  <li>
                    <div>
                      <span>Email Icon</span>
                    </div>
                    <div>
                      <p>Email</p>
                      <p>alejomontuori12@gmail.com</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>Phone Icon</span>
                    </div>
                    <div>
                      <p>Phone</p>
                      <p>+54 261-3601823</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>Age Icon</span>
                    </div>
                    <div>
                      <p>Age</p>
                      <p>25</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>Location Icon</span>
                    </div>
                    <div>
                      <p>Location</p>
                      <p>Mendoza, Argentina</p>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </body>
    </html>
  );
}

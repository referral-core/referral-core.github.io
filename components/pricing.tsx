"use client"

export default function Pricing() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative">
          <Background />
          <div className="grid grid-cols-1 gap-y-8 py-12 pb-20 md:py-20">
            <div className="text-center">
              <div className="mb-4 text-3xl font-extrabold md:text-4xl">
                Pricing
              </div>
              <div className="grid grid-cols-1 gap-y-1 text-lg text-slate-500">
                <div>
                  We keep it <span className="font-bold uppercase">simple</span>
                  .
                </div>
                <div>
                  We <span className="font-bold uppercase">do not</span> get
                  paid unless you do.
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-[200px] items-center justify-center rounded-3xl bg-slate-600 md:ml-auto">
              <div className="p-8 text-center text-white">
                <div className="flex items-center text-6xl font-extrabold">
                  10 <span className="text-2xl"> %</span>
                </div>
                <div className="text-slate-300">referral tips</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Background() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10 -mx-20 rounded-3xl bg-slate-100"
        aria-hidden="true"
      />
      {/* Sparkles */}
      <div className="absolute left-1/4 top-0 -mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50">
          <g fill="#FCD34D" fillRule="nonzero">
            <path d="M.71 13.283A22.888 22.888 0 0 0 12.205.206c.125-.345 2.162 11.236 9.026 13.47 0 0-8.305 3.98-10.272 11.862.008.11-.47-6.26-10.249-12.255ZM48 36.768a24 24 0 0 0 12.06-13.76c.13-.36 2.26 11.8 9.5 14.14 0 0-8.71 4.18-10.78 12.45-.03.11-.53-6.57-10.78-12.83Z" />
          </g>
        </svg>
      </div>
      {/* Scratches */}
      <div className="absolute bottom-0 -mb-5 ml-16">
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="93">
          <path
            fill="#CBD5E1"
            fillRule="nonzero"
            d="M6.1 52.499c-.11-.63.35-1.245 1.02-1.893.228-.213.871-.356.975-.19.21.302.364.68.498 1.028.07.225.362 3.821.516 5.021.13 1.162.177 2.35.143 3.56l-.409 7.36c-.026.437-.088.88-.186 1.328l-.08.336a24.24 24.24 0 0 0-.718 5.66c-.048.324-.013.632.104.899.294.421-.313 5.525-.526 6.232-.57 1.7-.999 3.354-1.469 5.073-.064.24-.01.475-.29.735-.629.601-.606 1.089-.718 1.61-.15.724-.345 1.452-.586 2.18-.21.386-.47.759-.773 1.11-.252.354-.99.325-1.061.225-.194-.28-.603.06-.926.156a1.382 1.382 0 0 1-.34.071 20.842 20.842 0 0 1-1.27-4.216L0 88.508c0-.086.002-.192.005-.311l.104-2.476.054-.948c.061-1.237.077-2.315.07-2.578.028-.354.123-.72.28-1.082.069-.18.17-4.84.263-5.038.064-.88.29-1.786.667-2.686l.148-.337c.098-.201.15-.407.153-.602.178-1.451.536-2.926.867-4.405l.161-.74c.213-.847.282-1.727.45-2.605.04-.163.097-.327.169-.49.078-.201.137-.403.177-.602.246-2.04.846-4.132 1.068-6.171.063-.469.841-2.793.863-3.321.01-.282.648-1.376.602-1.617Zm31.924-35.08c.095.363.198.72.256 1.101l-.001.094c-.029.65-.348 4.143-.386 5.36a31.612 31.612 0 0 1-.433 3.886l-.81 4.063a307.371 307.371 0 0 0-.772 4.025 13.61 13.61 0 0 1-.518 1.843c-.727 2.136-1.247 4.23-1.554 6.26-.102.355-.121.689-.057.983.165.457-.916 5.73-1.281 6.766l-.032.084c-.747 1.898-1.413 3.774-2.133 5.674l-.031.1-.052.2a1.141 1.141 0 0 1-.19.412l-.093.109c-.643.684-.7 1.196-.857 1.792-.225.794-.51 1.6-.85 2.414-.227.443-.52.886-.872 1.317-.265.362-.913.412-1.05.334l-.023-.022c-.17-.243-.53.046-.84.18l-.084.033a1.293 1.293 0 0 1-.343.1 20.203 20.203 0 0 1-.35-4.589l1.27-7.228a4.92 4.92 0 0 1 .436-1.208c.036-.094.28-1.393.52-2.707l.506-2.808c.171-.937.482-1.913.926-2.905l.197-.426c.118-.23.192-.455.218-.667.404-1.847 1.035-3.755 1.604-5.647.298-.97.483-1.91.73-2.865.058-.176.129-.355.211-.535.1-.228.184-.453.249-.675.487-2.236 1.383-4.583 1.873-6.815.126-.518 1.22-3.124 1.33-3.716.132-.414.843-1.518.93-1.887l.009-.068c.046-.696.57-1.517 1.38-2.16.263-.234.935-.405.967-.202ZM65.734.104l.132.52.124.563c.031.045-.017.343-.046.773-.028.431-.172 1.028-.28 1.643l-.316 1.985c-.082.53-.15.993-.186 1.31-.17 1.346-.522 2.746-.8 4.093l-2.298 8.566a14.95 14.95 0 0 1-.693 1.958c-.936 2.281-1.64 4.502-2.104 6.64-.13.377-.17.726-.123 1.03.18.486-1.597 6.443-1.94 7.242-.924 2.029-1.746 4.029-2.626 6.05-.118.286-.136.556-.436.877-.553.666-.904 1.34-1.004 1.932a26.08 26.08 0 0 1-1.043 2.573c-.264.464-.59.935-.972 1.4-.32.433-1.038.485-1.085.383-.121-.27-.523.068-.845.228l-.079.036a1.429 1.429 0 0 1-.335.113 22.879 22.879 0 0 1-.069-4.762l1.628-7.622c.104-.408.275-.838.51-1.278l.056-.209c.056-.229.148-.625.257-1.104l.781-3.425c.127-.542.226-.945.266-1.06l.01-.026c.407-1.163.586-2.25 1.406-3.556a2.38 2.38 0 0 0 .262-.706c.547-1.96 1.329-3.999 2.07-6.01.377-1.03.625-2.02.953-3.035a5.71 5.71 0 0 1 .266-.58c.124-.244.228-.485.312-.721.683-2.374 1.765-4.875 2.429-7.224.164-.55 1.55-3.365 1.719-3.997.101-.378 1.102-1.738 1.167-2.047.06-.364.282-.782.63-1.191.36-.436.803-.856 1.297-1.231.327-.23.992-.324 1.005-.13Z"
          />
        </svg>
      </div>
    </>
  )
}

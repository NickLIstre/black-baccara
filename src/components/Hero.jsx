 function Hero () {
  return (
    <div className = "flex flex-col items-center gap-6 mb-10">
        <h1 className="text-white text-4xl text-center">

          Black Baccara Productions
        </h1>
        <div className="w-48 h-48 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer petals */}
          <ellipse cx="100" cy="60" rx="25" ry="45" fill="#4a0010" transform="rotate(0 100 100)" />
          <ellipse cx="100" cy="60" rx="25" ry="45" fill="#4a0010" transform="rotate(45 100 100)" />
          <ellipse cx="100" cy="60" rx="25" ry="45" fill="#4a0010" transform="rotate(90 100 100)" />
          <ellipse cx="100" cy="60" rx="25" ry="45" fill="#4a0010" transform="rotate(135 100 100)" />
          <ellipse cx="100" cy="60" rx="25" ry="45" fill="#4a0010" transform="rotate(180 100 100)" />
          <ellipse cx="100" cy="60" rx="25" ry="45" fill="#4a0010" transform="rotate(225 100 100)" />
          <ellipse cx="100" cy="60" rx="25" ry="45" fill="#4a0010" transform="rotate(270 100 100)" />
          <ellipse cx="100" cy="60" rx="25" ry="45" fill="#4a0010" transform="rotate(315 100 100)" />
          {/* Middle petals */}
          <ellipse cx="100" cy="68" rx="18" ry="35" fill="#3a000c" transform="rotate(22 100 100)" />
          <ellipse cx="100" cy="68" rx="18" ry="35" fill="#3a000c" transform="rotate(67 100 100)" />
          <ellipse cx="100" cy="68" rx="18" ry="35" fill="#3a000c" transform="rotate(112 100 100)" />
          <ellipse cx="100" cy="68" rx="18" ry="35" fill="#3a000c" transform="rotate(157 100 100)" />
          <ellipse cx="100" cy="68" rx="18" ry="35" fill="#3a000c" transform="rotate(202 100 100)" />
          <ellipse cx="100" cy="68" rx="18" ry="35" fill="#3a000c" transform="rotate(247 100 100)" />
          <ellipse cx="100" cy="68" rx="18" ry="35" fill="#3a000c" transform="rotate(292 100 100)" />
          <ellipse cx="100" cy="68" rx="18" ry="35" fill="#3a000c" transform="rotate(337 100 100)" />
          {/* Inner petals */}
          <ellipse cx="100" cy="75" rx="12" ry="25" fill="#2a0008" transform="rotate(0 100 100)" />
          <ellipse cx="100" cy="75" rx="12" ry="25" fill="#2a0008" transform="rotate(60 100 100)" />
          <ellipse cx="100" cy="75" rx="12" ry="25" fill="#2a0008" transform="rotate(120 100 100)" />
          <ellipse cx="100" cy="75" rx="12" ry="25" fill="#2a0008" transform="rotate(180 100 100)" />
          <ellipse cx="100" cy="75" rx="12" ry="25" fill="#2a0008" transform="rotate(240 100 100)" />
          <ellipse cx="100" cy="75" rx="12" ry="25" fill="#2a0008" transform="rotate(300 100 100)" />
          {/* Center */}
          <circle cx="100" cy="100" r="15" fill="#1a0005" />
        </svg>
      </div>
    </div>
    )
}

export default Hero
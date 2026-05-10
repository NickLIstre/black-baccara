import { i } from "framer-motion/client"

function Vine({ totalHeight }) {
  return (
    <div
      className="absolute left-8 top-0"
      style={{ height: totalHeight }}
    >
      <svg
        width="40"
        height={totalHeight}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main vine stem */}
        <path
          d={`M 20 0 C 15 ${totalHeight * 0.25} 25 ${totalHeight * 0.5} 20 ${totalHeight}`}
          stroke="#2d5a1b"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Thorns - small diagonal lines off the vine */}
        {[0.1, 0.3, 0.5, 0.7, 0.9].map((position, i) => {
          const y = totalHeight * position
          const direction = i % 2 === 0 ? 1 : -1
          return (
            <line
              key={i}
              x1="20"
              y1={y}
              x2={20 + direction * 12}
              y2={y - 8}
              stroke="#2d5a1b"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )
        })}

        {/* Leaves - small ellipses along the vine */}
        {[0.2, 0.4, 0.6, 0.8].map((position, i) => {
          const y = totalHeight * position
          const direction = i % 2 === 0 ? 1 : -1
          return (
            <ellipse
              key={i}
              cx={20 + direction * 16}
              cy={y}
              rx="10"
              ry="6"
              fill="#2d5a1b"
              transform={`rotate(${direction * 30} ${20 + direction * 16} ${y})`}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default Vine
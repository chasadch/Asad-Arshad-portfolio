'use client'

const AnimatedCube = () => {
  return (
    <div className="absolute top-24 right-20 z-0">
      <div className="relative w-32 h-32 transform-gpu">
        {/* Main cube container with 3D perspective */}
        <div className="cube-container">
          {/* Individual cube faces with different gradients */}
          <div className="cube">
            {/* Front face */}
            <div className="cube-face cube-front"></div>
            {/* Back face */}
            <div className="cube-face cube-back"></div>
            {/* Right face */}
            <div className="cube-face cube-right"></div>
            {/* Left face */}
            <div className="cube-face cube-left"></div>
            {/* Top face */}
            <div className="cube-face cube-top"></div>
            {/* Bottom face */}
            <div className="cube-face cube-bottom"></div>
          </div>
        </div>
        
        {/* Additional cubes for the cluster effect */}
        <div className="cube-container absolute -top-11 -left-8">
          <div className="cube cube-small">
            <div className="cube-face cube-front-alt"></div>
            <div className="cube-face cube-back-alt"></div>
            <div className="cube-face cube-right-alt"></div>
            <div className="cube-face cube-left-alt"></div>
            <div className="cube-face cube-top-alt"></div>
            <div className="cube-face cube-bottom-alt"></div>
          </div>
        </div>
        
        <div className="cube-container absolute top-11 left-8">
          <div className="cube cube-small">
            <div className="cube-face cube-front-third"></div>
            <div className="cube-face cube-back-third"></div>
            <div className="cube-face cube-right-third"></div>
            <div className="cube-face cube-left-third"></div>
            <div className="cube-face cube-top-third"></div>
            <div className="cube-face cube-bottom-third"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedCube

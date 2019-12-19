import React from 'react'

export default function Image({ ratio, src }) {
    return (
        <div className="image-container">
        <div className="image-inner-container">
          <div
            className="ratio"
            style={{
              paddingTop: ratio * 100 + '%'
            }}
          >
            <div className="ratio-inner">
              <img src={src} />
            </div>
          </div>
        </div>
      </div>
    )
}

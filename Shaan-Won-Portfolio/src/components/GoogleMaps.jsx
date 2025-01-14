import React, { useEffect, useRef, useState } from "react";

const GoogleMapComponent = () => {
  const mapRef = useRef(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    if (window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco coordinates
        zoom: 10,
      });
    }
  }, []);

  return (
    <div className="container-fluid map-con">
      <div className="row map-row">
        <div className="col-md-12 col-sm-12 map-col">
          <div className="google-maps">
            <div className="map-wrap">
              {/* Overlay to disable interaction */}
              {!isInteractive && (
                <div
                  className="overlay-map"
                  onClick={() => setIsInteractive(true)}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    zIndex: 1,
                  }}
                />
              )}

              {/* Map container */}
              <div
                id="map"
                ref={mapRef}
                style={{ width: "100%", height: "600px", position: "relative" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapComponent;

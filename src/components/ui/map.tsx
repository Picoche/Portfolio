"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Replace with your Mapbox token
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

interface MapProps {
  center: [number, number];
  zoom?: number;
  markerColor?: string;
}

export function Map({ center, zoom = 13, markerColor = "#7C3AED" }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN || '';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: center,
      zoom: zoom,
      interactive: false, // Disable map interactions for a cleaner look
    });

    // Add marker
    marker.current = new mapboxgl.Marker({ color: markerColor })
      .setLngLat(center)
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [center, zoom, markerColor]);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-full rounded-2xl overflow-hidden bg-secondary/10 dark:bg-accent/10"
    />
  );
} 
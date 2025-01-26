'use client'

import React from 'react'
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  CircleMarker,
  Popup,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import geojsonData from '@/data/data.json'
import { Container } from '@/components/Container'

const Map = () => {
  // Function to style LineStrings and Polygons
  const style = (feature) => {
    if (feature.geometry.type === 'LineString') {
      return { color: 'blue', weight: 4, dashArray: '5, 5' } // Style for paths
    }
    if (feature.geometry.type === 'Polygon') {
      return { color: 'green', fillColor: 'lightgreen', fillOpacity: 0.5 } // Style for polygons
    }
    return {}
  }

  // Function to handle point features
  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 10, // Size of the point
      fillColor: 'red', // Fill color for points
      color: 'black', // Border color
      weight: 2, // Border width
      opacity: 1, // Border opacity
      fillOpacity: 0.8, // Fill transparency
    })
  }

  // Function to add popups to all features
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.Name) {
      layer.bindPopup(`<b>${feature.properties.Name}</b>`)
    }
  }

  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="lg:mx-0 lg:w-full lg:pr-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Peta Desa
          </h2>
        </div>
      </Container>
      <div className="relative mt-14">
        <Container className="relative">
          <MapContainer
            center={[-7.673, 110.247]} // Center of the map
            zoom={15.5} // Initial zoom level
            style={{ height: '80vh', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON
              data={geojsonData}
              style={style} // Apply styles to LineStrings and Polygons
              pointToLayer={pointToLayer} // Customize point markers
              onEachFeature={onEachFeature} // Bind popups
            />
          </MapContainer>
        </Container>
      </div>
    </section>
  )
}

export default Map

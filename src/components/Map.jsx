'use client'

import React, { useState } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import geojsonData from '@/data/data.json'
import { Container } from '@/components/Container'

const Map = () => {
  const [searchTerm, setSearchTerm] = useState('') // State to store the search input
  const [filteredData, setFilteredData] = useState(geojsonData) // State for filtered GeoJSON data

  // Function to style LineStrings and Polygons
  const style = (feature) => {
    if (feature.geometry.type === 'LineString') {
      return { color: 'blue', weight: 4, dashArray: '5, 5' }
    }
    if (feature.geometry.type === 'Polygon') {
      return { color: 'green', fillColor: 'lightgreen', fillOpacity: 0.5 }
    }
    return {}
  }

  // Function to handle point features
  const pointToLayer = (feature, latlng) => {
    const role = feature.properties?.role

    const marker = L.circleMarker(latlng, {
      radius: 10,
      fillColor: role ? 'blue' : 'red', // Blue for points with role, red otherwise
      color: 'black',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.8,
    })

    // Add a tooltip to the marker
    if (feature.properties && feature.properties.name) {
      marker.bindTooltip(
        `${feature.properties.name}${role ? ` (${role})` : ''}`,
        { sticky: true },
      ) // Tooltip shows name and role (if exists)
    }

    return marker
  }

  // Function to add tooltips and popups to all features
  const onEachFeature = (feature, layer) => {
    if (feature.geometry.type === 'Point' && feature.properties?.name) {
      layer.bindTooltip(feature.properties.name, { sticky: true }) // Bind tooltip only for points
    }
    // role
    if (feature.properties?.role) {
      layer.bindTooltip(
        `<b>${feature.properties.role}</b><br/>${feature.properties.name}`,
      ) // Popup for all features
    }
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  // Execute search on button click
  const handleSearch = () => {
    const filtered = {
      ...geojsonData,
      features: geojsonData.features.filter((feature) => {
        if (feature.geometry.type === 'Point') {
          // Filter Point features based on the search term in both 'name' and 'role'
          return (
            (feature.properties?.name &&
              feature.properties.name.toLowerCase().includes(searchTerm)) ||
            (feature.properties?.role &&
              feature.properties.role.toLowerCase().includes(searchTerm))
          )
        }
        // Always include Polygon and LineString features
        return (
          feature.geometry.type === 'Polygon' ||
          feature.geometry.type === 'LineString'
        )
      }),
    }
    setFilteredData(filtered)
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
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by name..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
            >
              Search
            </button>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="hidden sm:block">
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
                  key={JSON.stringify(filteredData)} // Ensure component re-renders
                  data={filteredData} // Use filtered data here
                  style={style} // Apply styles to LineStrings and Polygons
                  pointToLayer={pointToLayer} // Customize point markers
                  onEachFeature={onEachFeature} // Bind popups
                />
              </MapContainer>
            </div>
            <div className="block sm:hidden">
              <MapContainer
                center={[-7.673, 110.247]} // Center of the map
                zoom={15.4} // Initial zoom level
                style={{ height: '80vh', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <GeoJSON
                  key={JSON.stringify(filteredData)} // Ensure component re-renders
                  data={filteredData} // Use filtered data here
                  style={style} // Apply styles to LineStrings and Polygons
                  pointToLayer={pointToLayer} // Customize point markers
                  onEachFeature={onEachFeature} // Bind popups
                />
              </MapContainer>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Map

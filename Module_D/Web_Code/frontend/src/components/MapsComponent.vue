<template>
    <div>
      <div id="map"></div>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  import "leaflet/dist/leaflet.css";
  import markerIcon from 'leaflet/dist/images/marker-icon.png';
  import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
  import markerShadow from 'leaflet/dist/images/marker-shadow.png';
  
  export default {
    name: "MapComponent",
    data() {
      return {
        map: null,
        marker: null,
      };
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        this.map = L.map('map').setView([55.801567, 49.176300], 18);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
        this.setMarker(55.801567, 49.176300);
      },
      setMarker(latitude, longitude) {
        const defaultIcon = L.icon({
            iconUrl: markerIcon,
            iconRetinaUrl: markerIcon2x,
            shadowUrl: markerShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });
        this.map.setView([latitude, longitude], 18);
        if (this.marker) {
          this.map.removeLayer(this.marker);
        }
        this.marker = L.marker([latitude, longitude], { icon: defaultIcon }).addTo(this.map);
      }
    }
  };
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 500px;
  }

  @media only screen and (max-width: 900px) {
    #map {
      height: 300px;
    }
  }
  </style>
  
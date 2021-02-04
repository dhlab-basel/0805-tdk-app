import { Component, OnInit } from '@angular/core';
import {icon, marker, polyline, latLng, tileLayer, CRS, imageOverlay, LatLngBounds} from 'leaflet';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  bounds =  new LatLngBounds([-6 , -11], [6, 11]);
  imageOverlay = imageOverlay('../../assets/images/test.jpg', this.bounds);
  base = tileLayer('', {
    maxZoom: 2,
    detectRetina: true
  });
    sw = marker([ -2, 5], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });
  layersControl = {
    baseLayers: {
      Image: this.imageOverlay
    },
    overlays: {
      SW: this.sw,
  }};

  options = {
    maxBounds: this.bounds,
    layers: [this.imageOverlay, this.sw],
    zoom: 7,
    minZoom: 7,
    center: latLng([0, 0])
  };
  onClick(){
    console.log('clicked');
  }
  constructor() { }

  ngOnInit(): void {
    this.sw.bindTooltip('Das wäre dann der Text, gell', {permanent: false, opacity: 1, direction: 'top'});
    this.sw.on('click', () => {
      this.onClick();
    });
  }
}

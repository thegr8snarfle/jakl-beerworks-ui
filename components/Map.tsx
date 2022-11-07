import mapboxgl from 'mapbox-gl';
import {useEffect, useRef, useState} from 'react';
import {configService} from '../common/services/config.service';

const Map: React.FC = () => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-75.75308148779038);
  const [lat, setLat] = useState(39.4344680281966);

  useEffect(() => {
    if (map.current) {
      return;
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current ?? '',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 11,
      accessToken: configService.mapboxAPIKey
    });

    new mapboxgl.Marker({
      color: '#ea5e10',
      draggable: false
    })
    .setLngLat([lng, lat])
    .addTo(map.current);

  }, []);

  return (
    <div className="p-2 mt-2" style={{width: '100%', height: '275px'}}>
      <div ref={mapContainer} className="map-container" style={ { height: '100%', width: '100%'}}/>
    </div>
  )
}

export default Map;

import { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { 
  LocalizationSectionStyled, 
  LocationsContainer, 
  MapContainer, 
  LocationList, 
  LocationItem, 
  LocationInfo,
  SectionTitle,
  ScheduleInfo
} from './LocalizationSection.style';
import { locations } from '../../constants';


export default function LocalizationSection() {
  const [selectedMapUrl, setSelectedMapUrl] = useState(locations[0].mapsUrl);

  return (
    <LocalizationSectionStyled id='localizacao'  aria-label="Seção Localização professor">
      <SectionTitle>
        <h2>Locais e Horários de Aula</h2>
        <p>Encontre o professor nos melhores locais da cidade</p>
      </SectionTitle>
      
      <LocationsContainer>
        <LocationList>
          {locations.map((location) => (
            <LocationItem 
              key={location.id}
              onClick={() => setSelectedMapUrl(location.mapsUrl)}
              className={selectedMapUrl === location.mapsUrl ? 'active' : ''}
            >
              <span>0{location.id}</span>
              <LocationInfo>
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                
                <ScheduleInfo>
                  <div className="schedule-icon">
                    <FaClock />
                  </div>
                  <div className="schedule-details">
                    <span className="days">{location.schedule.days}</span>
                    <span className="hours">{location.schedule.hours}</span>
                  </div>
                </ScheduleInfo>
              </LocationInfo>
            </LocationItem>
          ))}
        </LocationList>

        <MapContainer>
          <iframe
            title="Localização das Aulas"
            src={selectedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </LocationsContainer>
    </LocalizationSectionStyled>
  )
}
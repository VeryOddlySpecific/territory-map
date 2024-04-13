import {
    createContext,
    useState,
    useRef
} from '@wordpress/element';

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
    const [mapState, setMapState] = useState(null);
    const mapRef = useRef();

    return (
        <MapContext.Provider value={{ 
            mapState, 
            setMapState, 
            mapContainer 
        }}>
            {children}
        </MapContext.Provider>
    );
}
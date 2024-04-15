import {
    createContext,
    useState,
    useRef
} from '@wordpress/element';

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
    const [mapState, setMapState] = useState(null);
    const [activeSelection, setActiveSelection] = useState([]);
    const mapRef = useRef();

    return (
        <MapContext.Provider value={{ 
            mapRef,
            mapState,
            setMapState,
            activeSelection,
            setActiveSelection
        }}>
            {children}
        </MapContext.Provider>
    );
}
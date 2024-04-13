import { MapProvider } from './MapContext';
import { Layout } from './Layout';

export const Map = () => {
    return (
        <MapProvider>
        <Layout />
        </MapProvider>
    );
};
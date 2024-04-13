import StateSelector from './components/StateSelector';
import Legend from './components/Legend';
import DataPanel from './components/DataPanel';
import MapPanel from './components/MapPanel';

const Layout = () => {

    return (
        <>
            <StateSelector />
            <Legend />
            <div class="map-data-container">
                <DataPanel />
                <MapPanel />
            </div>       
        </>
    )
}

export default Layout;
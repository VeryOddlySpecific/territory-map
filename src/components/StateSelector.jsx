import {
    Card,
    CardHeader,
    CardBody,
    ToggleControl,
    __experimentalHeading as Heading,
    __experimentalGrid as Grid
} from '@wordpress/components';

import { useContext } from '@wordpress/element';
import { MapContext } from '../MapContext';

// state info is passed in the object 'mapData' through the localize_script function in PHP
const StateData = mapData.states;

const RegionSelector = () => {

    return (
        <>
            <Card>
                <CardHeader>
                    <Heading>Region Selector</Heading>
                </CardHeader>
                <CardBody>
                    <Grid>
                        {StateData.map((state) => (
                            <ToggleControl
                                key={state.id}
                                label={state.name}
                                checked={state.selected}
                                onChange={(value) => {
                                    state.selected = value;
                                }}
                            />
                        ))}
                    </Grid>
                </CardBody>
            </Card>
        </>
    )
}

export default RegionSelector;
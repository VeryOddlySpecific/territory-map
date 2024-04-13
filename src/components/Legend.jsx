import {
    Card,
    CardHeader,
    CardBody,
    __experimentalHeading as Heading,
    __experimentalGrid as Grid,
    __experimentalText as Text
} from '@wordpress/components';

import { useContext } from '@wordpress/element';
import { MapContext } from '../MapContext';

// legend info is passed in the object 'mapData' through the localize_script function in PHP
const LegendData = mapData.legend;

const Legend = () => {
    
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading>Legend</Heading>
                </CardHeader>
                <CardBody>
                    <Grid>
                        {LegendData.map((legendItem) => (
                            <Text key={legendItem.id}>{legendItem.label}</Text>
                        ))}
                    </Grid>
                </CardBody>
            </Card>
        </>
    )
}

export default Legend;
import { 
    Card,
    CardHeader,
    CardBody,
    CardDivider,
    ButtonGroup,
    __experiementalHeading as Heading, 
} from "@wordpress/components"
import { useContext } from "@wordpress/components"

import MapContext from "../MapContext"


const DataPanel = () => {

    const { activeSelection } = useContext(MapContext);

    return (
        <Card>
            <CardHeader>
                <Heading level={3}>Data Panel</Heading>
            </CardHeader>
            <CardBody>
                <ButtonGroup></ButtonGroup>
                <CardDivider />
                <Heading level={4}>Data</Heading>
                <ul>
                    {activeSelection.map( selection => {
                        return (
                            <li>
                                <Heading level={5}>{selection.feature.properties.Name} County</Heading>
                            </li>
                        )
                    })}
                </ul>
            </CardBody>
        </Card>
    )
}

export default DataPanel
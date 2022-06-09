import gauntlet from '../images/gauntlet.png'
import ImageMapper from 'react-image-mapper';

function InfinityGauntlet() {

    const MAP = {
        name: "gauntlet",
        areas: [
            { name: "soul", shape: "circle", coords: [310,305,30],},
            { name: "reality", shape: "circle", coords: [382,290,40]},
            { name: "space", shape: "circle", coords: [490,290,40]},
            { name: "power", shape: "circle", coords: [570,295,37]},
            { name: "time", shape: "circle", coords: [680,550,35]},
            { name: "mind", shape: "circle", coords: [420,415,60]},
        ]
    }

    return (
        <div>
            <ImageMapper src={gauntlet} map={MAP}

            />
        </div>
    )
}

export default InfinityGauntlet;
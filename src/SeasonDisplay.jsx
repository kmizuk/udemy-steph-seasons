import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let`s hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it is chilly..",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if (month > 3 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";

    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]

    return (
        <React.Fragment>
            <div className={"center"}>Latitude:{props.lat}</div>
            <div className={`season-display ${season}`}>
                <br />
                <i className={`icon-left huge ${iconName} icon`} />
                <h1>{text}</h1>
                <i className={`icon-right huge ${iconName} icon`} />
                <br />
            </div>
        </React.Fragment>
    );
}

export default SeasonDisplay;
import React from 'react';

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
            <div>Latitude:{props.lat}</div>
            <br />
            <i className={`huge ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`huge ${iconName} icon`} />
            <br />
        </React.Fragment>
    );
}

export default SeasonDisplay;
// #region RadioStation
class RadioStation {
    constructor(frequency) {
        this.frequency = frequency;
    }

    getFrequency() {
        return this.frequency;
    }
}
// #endregion RadioStation

// #region StationList
class StationList {
    constructor() {
        this.stations = [];
    }

    addStation(station) {
        this.stations.push(station);
    }

    removeStation(toRemove) {
        const toRemoveFrequency = toRemove.getFrequency();
        this.stations = this.stations.filter((station) => {
            return station.getFrequency() !== toRemoveFrequency;
        });
    }
}
// #endregion StationList

// #region useStationList
const stationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));

stationList.stations.forEach((station) => console.log(station.getFrequency()));

stationList.removeStation(new RadioStation(89)); // 将移除 89 频道
// #endregion useStationList

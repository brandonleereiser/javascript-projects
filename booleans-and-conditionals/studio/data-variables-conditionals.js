// Initialize Variables below
let date = "Monday 2019-03-18";
let tie = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fueldMassKg + shuttleMassKg;
let maximumMaxLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff ="true";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount > 7) {
    console.log();
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus !== 'ready') {
    preparedForLiftOff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMaxLimit) {
    preparedForLiftOff = False;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelcius < minimumFuelTemp || fuelTempCelcius > maximumFuelTemp) {
    preparedForLiftOff = false;
}
// add logic below to verify the fuel level is at 100%
if(fuelLevel !== '100%') {
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if(weatherStatus !== 'clear') {
    preparedForLiftOff = false;
}
// Verify shuttle launch can proceed based on above conditions

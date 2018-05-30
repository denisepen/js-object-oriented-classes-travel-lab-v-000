
class Driver {
  constructor(name, day){
    this.name = name
    this.day = day
    this.startDate = new Date(day)
   }

   yearsExperienceFromBeginningOf(endDate){
     return endDate - this.startDate.getFullYear()
   }
  }

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    const horizontalTravelled = Math.abs(this.endingLocation.horizontal - this.beginningLocation.horizontal);
    const verticalTravelled = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

    return horizontalTravelled + verticalTravelled;
  }
}

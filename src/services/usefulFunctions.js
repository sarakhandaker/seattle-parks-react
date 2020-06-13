const distance=(lat1, lon1, lat2, lon2)=> {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * (180/Math.PI) * 60 * 1.1515
    return dist.toFixed(2)
}

const toTitleCase=str=> {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    )
}

export const usefulFunctions = {
    distance: distance,
    title: toTitleCase
  };
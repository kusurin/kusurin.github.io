function getTemperature() {
    var weather;
    $.ajax({
        async: false,
        type: 'GET',
        url: 'https://api.open-meteo.com/v1/dwd-icon',
        data: 'latitude=31.2222&longitude=121.4581&hourly=temperature_2m&forecast_days=1',
        dataType: 'JSON',
        error: function () {
            return null;
        },
        success: function (responseData) {
            weather = Array.from(responseData.hourly.temperature_2m).reduce((ante,post)=>{
                return ante + post;
            }) / responseData.hourly.temperature_2m.length;
        }
    });
    return weather;
}
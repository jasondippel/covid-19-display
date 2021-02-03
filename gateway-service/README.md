# gateway-service

This is the service that all requests will go through. This service will handle them and call other services as needed.

## Endpoints

#### GET `/geo/provinces`
* Returns a list of provinces (and territories) in Canada and geographic data about each

#### GET `/geo/provinces/:province_code
* Returns the geographic data for the specified province

#### GET `/geo/provinces/:province_code/regions`
* Returns a list of health regions in the specified province

#### GET `/geo/regions`
* Returns a list of health regions for all of Canada

#### GET `/covid/summary`
* Returns the latest COVID-19 data for all of Canada

#### GET `/covid/summary/split`
* Returns the latest COVID-19 data for all of Canada split by province

#### GET `/covid/summary/province/:province_code
* Returns the latest COVID-19 data for the specified province

#### GET `/covid/summary/region/:region_code
* Returns the latest COVID-19 data for the specified health region

## Gotchas

* If the `dev` script fails at first, just run it again
  * tldr; the script to execute the code fails if the `dist` folder is not there; Running the `dev` script will create the folder, so restarting it should fix the issue

## TODO

#### GET `/covid/summary/province/:province_code/split
* Returns the latest COVID-19 data for the specified province split by region

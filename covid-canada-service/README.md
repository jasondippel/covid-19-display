# covid-canada-service

This is the service that deals with getting the covid data for Canada.

## Endpoints

#### GET `/latest`
* Returns the latest COVID-19 data for all of Canada

#### GET `/provinces`
* Returns a list of provinces (and territories) in Canada and data about each

#### GET `/provinces/latest`
* Returns a list of records that includes the latest data for each province

#### GET `/provinces/:code/latest`
* Returns a record containing the latest stats for the specified province

#### GET `/provinces/:code/regions`
* Returns a list of health region records for the specified province

#### GET `/regions`
* Returns a list of health regions in Canada

#### GET `/regions/:hr_uid`
* Returns a single health region record for the specified Health Region UID (hr_uid)

#### GET `/regions/:hr_uid/latest`
* Returns a record containing the latest stats for the specified health region

## Gotchas

* If the `dev` script fails at first, just run it again
  * tldr; the script to execute the code fails if the `dist` folder is not there; Running the `dev` script will create the folder, so restarting it should fix the issue

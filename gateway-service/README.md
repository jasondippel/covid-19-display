# gateway-service

This is the service that all requests will go through. This service will then handle them and call other services as needed.

## Gotchas

* If the `dev` script fails at first, just run it again
  * tldr; the script to execute the code fails if the `dist` folder is not there; Running the `dev` script will create the folder, so restarting it should fix the issue

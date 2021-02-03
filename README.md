# covid-19-display
Display COVID-19 data for various regions within Canada.

## Requirements

* Docker
* Minikube
* Node.js
* Yarn

## Building the Applications

Both applications can be built and run the same way:
* If you just want to run the code and don't care about anything else, run `yarn dev`
* If you want to build the application image, run `yarn build-image`. To get the name of the image, look at the terminal where you ran the command. The last line will have the tag name for the image you just built.

## Incorporating Kubernetes via Minikube

### Getting Started with Minikube
It's simple to get minikube running once it's installed, just run `minikube start`

### Setting Up the Kubernetes Objects
> All instructions are relative to root director of repo

1. Build the images
```bash
$ cd covid-canada-service && yarn build-image && cd ../
$ cd gateway-service && yarn build-image && cd ../
```
2. Deploy the images to your account on docker hub (use your namespace and appropriate version numbers; will need to update *-deployment.yml files to match)
```bash
$ # tag the images created in step 1
$ docker tag covid-canada-node-app jasondippel/covid-canada-node-app:latest
$ docker tag covid-gateway-node-app jasondippel/covid-gateway-node-app:latest
$ # log in to docker with your docker id
$ docker login
$ # push the image to docker hub
$ docker push jasondippel/covid-canada-node-app:latest
$ docker push jasondippel/covid-gateway-node-app:latest
```
3. Create the deployments and services
```bash
$ kubectl create -f villains-deployment.yml
$ kubectl create -f heroes-deployment.yml
```
4. Expose external IP to covid-gateway-sevice (required since we're running in Minikube)
```bash
$ # minikube has a built-in command for doing this
$ minikube service --url covid-gateway-service
```
5. Should be able to curl heroes service now on url provided by command in step 4
```bash
$ # Your url is most likely different, this is just an example
$ curl http://127.0.0.1:52784/heroes
```

## Data Source

> Yes, this project could have gotten the data directly from the sources, but I wanted to play around with some Kubernetes stuff and this is my lazy way of getting data.

For this project, the data is retrived from the [COVID-19 Tracker Canada](https://api.covid19tracker.ca/docs/1.0/overview) project.

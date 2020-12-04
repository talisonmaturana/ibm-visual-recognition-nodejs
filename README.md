<h1 align="center" style="border-bottom: none;">🚀 Visual Recognition Sample Application</h1>
<h3 align="center">This Node.js/ReactJs app demonstrates some of the Visual Recognition service features.</h3>

The [Visual Recognition][visual_recognition_service] Service uses deep learning algorithms to analyze images for scenes, objects, faces, text, and other subjects that can give you insights into your visual content. You can organize image libraries, understand an individual image, and create custom classifiers for specific results that are tailored to your needs.

## Prerequisites

1. Sign up for an [IBM Cloud account](https://console.bluemix.net/registration/).
1. Download the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview).
1. Create an instance of the Visual Recognition service and get your credentials:
   - Go to the [Visual Recognition](https://console.bluemix.net/catalog/services/visual-recognition) page in the IBM Cloud Catalog.
   - Log in to your IBM Cloud account.
   - Click **Create**.
   - Click **Show** to view the service credentials.
   - Copy the `apikey` value.
   - Copy the `url` value.

## Configuring the application

1. In the application folder, copy the _.env.example_ file and create a file called _.env_

   ```
   cp .env.example .env
   ```

2. Open the _.env_ file and add the service credentials that you obtained in the previous step.

   Example _.env_ file that configures the `apikey` and `url` for a Visual Recognition service instance hosted in the US East region:

   ```
   VISUAL_RECOGNITION_IAM_APIKEY=0ch4_K-XR671S1Vkh6fr6yIXo2ZCAZEP8s7U_ZgsPqOq
   VISUAL_RECOGNITION_URL=https://gateway.watsonplatform.net/visual-recognition/api
   ```

## Running locally

1. Install the dependencies

   ```
   npm install
   ```

1. Run the application

   ```
   npm start
   ```

1. View the application in a browser at `localhost:3000`

## Open Source @ IBM

Find more open source projects on the [IBM Github Page](http://ibm.github.io/).

[service_url]: https://www.ibm.com/watson/services/visual-recognition/
[visual_recognition_service]: https://www.ibm.com/watson/services/visual-recognition/

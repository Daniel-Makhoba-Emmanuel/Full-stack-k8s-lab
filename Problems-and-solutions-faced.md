Welcome!, This readme was made for to track the problems I faced in the Lab. The lab is being made to resemble a production setup as closely as possible, but they're still things it falls short on. Hence, some of these problems will be induced to mimic events in prod setups.

## 1. Workload in Control Plane
The lab uses KIND(Kubernetes in Docker) to deploy k8s, and by default in a standard enviroment (contol plane and worker nodes), a taint is applied on the control plane to prevent workloads without the required tolerance from being deployed there (in cloud setups it's the same). However, since i only had one node and that was the control-plane this taint wasn't applied and workloads were being deployed into it.

### Solution
To solve this I made a config.yaml with a control plane and worker nodes. The old plane was deleted and this config.yaml deployed. The taint for the control-plane was then able to take effect and all workloads were deployed to the worker nodes.

## 2. Too many Logs to monitor
As the pod count kept on increasing, so had the difficulty when monitoring the logs in real time.

### Solution 
I found a tool called kubetail that allows uses a web dashboard to to display all the logs in my cluster in real-time. I can filter logs by time, pod, namespace and node. And i can also switch between local and remote clusters making it ideal for porduction. I gave a breakdown on this here https://x.com/DanielMakhoba_E/status/1929112097272557761

## 3. Nginx path hit and miss
When experimenting with sidecar containers (web server(nginx) + logger) and a seperate nginx-deployment. The the sidecar contianer port had a different path "/app.log" and the deployments path had a "/" and "/custom" path. When performing curls to the service, it would sometime show the result and, sometimes a forbidden or not found error.

![alt text](resources/problem-3-image.png)

### Solution
This highlighted how the service object works. It is not aware of which pods have a particular path rather it merely checks if they'ready and sends traffic , which can result in a miss or a hit. To solve i would use an ingress controller to enable path absed routing
# Changelog

All notable changes and planned additions to this Lab will be documented in this file.

## [Unreleased]

### Added
-   **Planning:** Implement HarshiCorp vault into Lab for secrets management.
  
-   **Planning:** Conduct performs test on pods

-   **Planning:** Migrate to GitOps friendly repo structure
   

### Changed
-   **Planning:** Migrate to `new-repo-branch` structure for Lab.

-   **Planning:** Change to sealed secrets for secret management
  

### Fix
-   **Planning:** Fix MongoDB in cluster deployment issue
  

## [26-06-2025] - Exposing Go API pods with ingress

### Added
- Added ingress resource for go pods(path based routing)
- Added seperate pipeline for hello backend
- Added hello backend manifests

### Changed
- Updated changelog
- Update hello backend and Go Api buid pipeline to filter changes in code related to the service


### Fixed
- Fixed pipeline running when code related to services where not affected

## [25-06-2025] - Exposing Go API pods with ingress

### Added
- Added ingress resource for go pods(host based routing)
- Added second service `hello-backend`

### Changed
- Updated changelog


### Fixed
- Fixed failed pipeline due to expired credentials


## [20-06-2025] - Ingress 

### Added
- Updated workloads in root `readme.md` 

### Changed
- Updated changelog
- Updated k8s version


### Fixed


## [19-06-2025] - Fixed Crashing Pods 

### Added
- Updated `problems-and-solutions-faced.md`
- Added ingress-controller using helm
- Added ingress namespace
- Add Kubetail and expose it in the observability namespace

### Changed
- Updated changelog
- Split and update Architecture diagrams


### Fixed
- Network Downtime somehow caused CoreDNS to be unable to reach the APIserver


## [18-06-2025] - Node-Exporter

### Added
- Added node-exporter daemonset to observability namespace

### Changed
- Updated changelog
- Updated architecture diagram


### Fixed
- Narrowed down issue to permission and network(my ISP downtime), still fixing


## [17-06-2025] - Staging Pods talking to Dev DB

### Added
- Added dedicated credentials YAMl for staging environment
- Perform audit on manifests to consolidate standard

### Changed
- Updated changelog


### Fixed
- Staging environment API pods we're calling the dev environment postgresql instance


## [16-06-2025] - Stateful Services (Not working, currently fixing configuration issue)

### Added
- MongoDB statefulset
- MongoDB headless-service
- MongoDB credentials
- MongoDB configMap

### Changed

  ### Fixed
- Fixed mismatch in credentials causing errors
- Removed redundant init containercausing pod to fail


## [15-06-2025] - Updated Root ReadME

### Added


### Changed
- Updated root readme to show current workloads

  
### Fixed


## [14-06-2025] - Stateful Services

### Added
- Added Redis stateful set
- Added Redis headless service


### Changed
- Updated architecture

  
### Fixed


## [13-06-2025] - Stateful Services

### Added
- Added mysql stateful set
- Added mysql headless service
- Added mysql secret
- Added go api credentials secrets to connect to cluster database
- Added postgres.go file to handle database connection


### Changed
- Updated architecture
- Removed db password secret and replaced
- Changed main.go to run database connection first

  
### Fixed


## [12-06-2025] - Stateful Services

### Added
- Added postgres stateful set
- Added postgres headless service
- Added postgres secret


### Changed
- Updated root ReadMe with instructions on navigating the repository
- Updated architecture

  
### Fixed
- Fixed "403 forbidden" error on nginx stateful pods with an init container


## [10-06-2025] - Statefulsets

### Added
- Added Nginx statefulset
- Added Nginx headless service for statefulset


### Changed
- Removed nodeport yaml as its no longer needed
- Adjusted architcture image to include persistent volumes icons

  
### Fixed


## [09-06-2025] - Termination Grace Periods

### Added


### Changed

  
### Fixed
-  Fixed pods taking too long to terminate by adding termination grace periods


## [07-06-2025] - Kube-daiagrams 

### Added
-  Added new tool kube-diagrams to generate architecture, saving more time 

-  Added Tools directory to show the tools being used in the lab

-  Added Tools docs for kubetail and kube-diagram

### Changed
-  Removed old Architecture diagram in lab
  
### Fixed
-  Fixed deviatinf namespaces (dev and staging)

### Removed
-  Hostpath manifests


## [02-06-2025] - Kubetail and nginx

### Added
-  Added the reason for kubetail usage to the problem and solutions markdown

- Added sidecar container pod

### Changed
- Changed nginx service to communicate with existing deployment and new sidecar container pod

- Removed basic pod.yaml
  
### Fixed


## [01-06-2025] - Observability and Probes

### Added
-   Added Observability namespace.
-   Created `/health` endpoint for liveness probe
-   Added Liveness probe for Go API pod
-   Created Readiness Probe for GO API pods probes.
-   Created `/ready` endpoint for readiness probe

### Changed
-   Modified go api deployment to include liveness probe
  
  
### Fixed

## [30-05-2025] - ChangeLog Initialization

### Added
-   Initial `CHANGELOG.md` created.

### Changed
-   Updated Deployment files to inject all environment variables from a ConfigMap into pods, instead of individual key-value pairs.
  
### Fixed
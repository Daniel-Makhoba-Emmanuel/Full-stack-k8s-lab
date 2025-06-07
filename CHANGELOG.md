# Changelog

All notable changes and planned additions to this Lab will be documented in this file.

## [Unreleased]

### Added
-   **Planning:** Implement HarshiCorp vault into Lab for secrets management.

-   **Planning:** Add Kubetail and expose it in the observability namespace
    

### Changed
-   **Planning:** Migrate to `new-repo-branch` structure for Lab.

-   **Planning:** Change to sealed secrets for secret management



### Fixed

## [07-06-2025] - Kube-daiagrams 

### Added
-  Added new tool kube-diagrams to generate architecture, saving more time 

-  Added Tools directory to show the tools being used in the lab

-  Added Tools docs for kubetail and kube-diagram

### Changed
-  Removed old Architecture diagram in lab
  
### Fixed
-  Fixed deviatinf namespaces (dev and staging)
-  

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
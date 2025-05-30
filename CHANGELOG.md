# Changelog

All notable changes and planned additions to this Lab will be documented in this file.

## [Unreleased]

### Added
-   **Planning:** Implement HarshiCorp vault into Lab for secrets management.

-   **Planning:** Create `/health`endpoint for GO API pod probes.

-   **Planning:** Create Liveness Probe for GO API pod .

-   **Planning:** Create Readiness Probe for GO API pods probes.

-   **Planning:** Create startup Probe for GO API pods probes.


### Changed
-   **Planning:** Migrate to `new-repo-branch` structure for Lab.

-   **Planning:** Change to sealed secrets fpr secret management



### Fixed


## [30-05-2025] - ChangeLog Initialization

### Added
-   Initial `CHANGELOG.md` created.

### Changed
-   Updated Deployment files to inject all environment variables from a ConfigMap into pods, instead of individual key-value pairs.
  
### Fixed
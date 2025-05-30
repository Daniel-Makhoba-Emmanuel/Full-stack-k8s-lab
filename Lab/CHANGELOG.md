# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
-   **Planning:** Implement a new `Ingress` example demonstrating NGINX Ingress Controller.
-   **Planning:** Add a section on `NetworkPolicies` for isolation between namespaces.
-   **Planning:** Introduce `Helm` for deploying a sample application (e.g., WordPress).
-   **Planning:** Update `README.md` with a detailed prerequisites list.
-   **Planning:** Research `KubeVirt` for running VMs in Kubernetes.

### Changed
-   **Planning:** Refactor existing `Deployment` YAMLs to use `resource limits` and `requests`.
-   **Planning:** Update all `kubectl` commands to use explicit API versions where applicable.

### Fixed
-   **Planning:** Address known issue where `port-forward` sometimes hangs. (Need to find a better solution or document workaround).

## [0.1.0] - 2025-05-30

### Added
-   Initial setup of Kubernetes lab.
-   Basic `Deployment` and `Service` examples.
-   `Pod` creation demonstration.
-   `Volume` mounts with `emptyDir` and `hostPath`.

### Changed
-   Switched from `kubectl run` to `kubectl apply -f` for better declarative management.

### Fixed
-   Corrected a typo in the `README.md` about `NodePort` range.

## [0.0.1] - 2025-05-25 (Initial commit/placeholder)
-   Project repository created.
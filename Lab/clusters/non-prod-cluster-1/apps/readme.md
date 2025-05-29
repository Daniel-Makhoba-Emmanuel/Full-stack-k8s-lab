Defines the applications to be deployed to this cluster.

Each file here is typically an Argo CD Application resource (or Flux Kustomization).

These applications will point to specific overlays in the `../apps/` directory.
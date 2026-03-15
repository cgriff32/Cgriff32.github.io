---
author: Griff
pubDatetime: 2026-03-13T15:00:00Z
title: "The Architecture of GriffNet: 20TB of Local Sovereignty"
postSlug: griffnet-infrastructure
featured: true
draft: false
tags:
  - homelab
  - zfs
  - infrastructure
  - docker
description: "A deep dive into the local server architecture powering my private cloud, media stack, and home automation."
---

Architecture is about managing trade-offs. For my local environment (GriffNet), the priority was clear: **Data Integrity and High Availability.**

### 💾 Storage: The ZFS Backbone
At the core sits a 24-disk ZFS pool named `media`. 
*   **The Choice:** RAID-Z2 for double parity, protecting against simultaneous disk failures during resilvering.
*   **The Metal:** 4x 300GB SAS drives managed by HP Hardware RAID mirrors for the OS, ensuring the control plane stays alive even if the data array hangs.
*   **Recent Learnings:** I recently resolved an I/O hang by clearing the pool and monitoring a 12-hour resilver. This is why we use ZFS; the system remained `ONLINE` throughout.

### 🐳 The Service Stack
Everything runs in Docker containers, proxied through **Traefik**.
*   **Media:** Plex + the 'Arr' suite for automated lifecycle management.
*   **Intelligence:** Local Ollama instance (11434) and Home Assistant for edge-local control of lights, presence, and hardware sensors.
*   **Persistence:** I use Syncthing to bridge this server with my primary mobile and desktop devices, creating a seamless sync between my Obsidian vault and my engineering lab.

### 🛡 The Philosophy
GriffNet is my "sandbox for the real world." It allows me to test safety-critical patterns in a low-stakes environment before applying them to client systems. 

**Architectural takeaway:** Always separate your OS from your storage array, and never trust a hardware RAID to do a software filesystem's job.

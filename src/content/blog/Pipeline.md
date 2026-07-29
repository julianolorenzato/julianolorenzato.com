---
title: Pipeline
tags:
  - graphics
  - vulkan
  - cmake
  - cpp
createdAt: 2026-02-25
draft: true
---

High Poly + UVs + Albedo Atlas Texture -> QEM (Based on relief metric, auto recalculating UVs) -> Bake new Texture Atlas via Ray Casting, building albedo, depth and normal

## Pipeline optmizations (vantagens de saber todos os passos da pipeline ao invés de tratar cada etapa como uma caixa preta)
- Preservar regiões importantes durante simplificação (regiao de alta frequencia, bordas detectadas por sobel/canny, regiões com alto contraste, regiões proximas de seams UV) modificando o custo do colapso (pair contraction or edge collapsing)


https://chatgpt.com/share/6a220985-1ae0-83e9-896e-70d18807898a
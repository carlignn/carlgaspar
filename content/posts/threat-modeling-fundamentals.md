---
title: Threat Modeling Fundamentals
date: 2022-09-15 17:25
tags:
  - security
  - devsecops
  - blueteam
  - writeup
description: Write-up of the Threat Modeling Fundamentals by Peter Mosmans
---
## Threat Modeling, the What, Why, Who and When

### W﻿hat Is Threat Modeling

Threat Modeling is a process of systematically listing all potential ways one can attack an application.

* Systematic approach - repeatable and consistent process during the whole development lifecycle
* Looking at attacks - actively looking at what can be abused
* Probable threat scenarios - list of threats

#### Definitions

* Weakness - software defect, bug
* Vulnerability - weakness that can be exploited
* Attack/Incident - target, attack vector, threat actor
* A﻿ttack surface - anything that can be obtained, used, or attacked by a threat actor
* Risk = Impact * Likelihood

### W﻿hy Should One Perform Threat Modeling

* P﻿ro-active approach - security upfront
* E﻿fficient - the sooner a bug or a vulnerability is discovered in the SDLC, the cheaper it is
* P﻿rioritize bugs - the outcome is the list of potential threats and/or risks of the application, which is used to determine further mitigation strategies that will allow to prioritize the workload
* B﻿etter understanding - will give the developers a whole overview of the system

The ﻿ultimate objective of threat modeling is risk reduction.

#### O﻿ther methodologies that can perform risk reduction aside from Threat Modeling

* A﻿rchitectural analysis
* S﻿ource code analysis
* V﻿ulnerability scanning
* P﻿enetration testing

\*﻿ Threat modeling is a collaborative and repeatable process.

### Who Should Perform Threat Modeling

* System Architect - somebody who knows how the system ha been designed and how the data flows across
* Developer - somebody who knows the intricate details on how the application was built and the detailed interactions between components
* Tester - somebody who knows the requirements and what the application is expected to do
* Security Professional - somebody who knows specific attack factors and think like an attacked

\* The best way to implement threat modeling is to make as little changes to the process as possible.

### W﻿hen Should One Perform Threat Modeling

* A﻿s early as possible
* R﻿equirements phase
* D﻿esign phase

\*﻿ In general, early on in the process.

### Choosing the Right Approach

### A﻿sset-centric Approach

A﻿lso called **Risk-centric Approach.**

1. C﻿reate lists of assets
2. D﻿raw assets, components and data flows
3. F﻿or each element, check for threats

E﻿xamples:

* P﻿ASTA - Process for Attack Simulation and Analysis
* T﻿RIKE - dated threat modeling technology with accompanying tool

> I﻿f you don't know what to protect, how do you know you're protecting it?

### A﻿ttacker-centric Approach

1. C﻿reate a list of threat actors

   1. M﻿otive
   2. M﻿eans
   3. O﻿pportunity
2. C﻿reate a list of threats

### A﻿pplication-centric Approach

1. D﻿raw a diagram of the application

   * F﻿or example a Data Flow Diagram
2. L﻿ist threats for each elements

   * S﻿TRIDE
   * O﻿WASP Top 10
3. R﻿ank threats using classification model

\* C﻿hoose approach based on skillset.

## C﻿hoosing the Right Methodology

### P﻿ASTA
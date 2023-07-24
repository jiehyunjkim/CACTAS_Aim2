# CACTAS Project

## Table of Contents
* [Project Overview](#project-overview)
* [Usage](#usage)
* [Examples](#examples)
* [License](#license)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)

## Project Overview

CACTAS(Carotid Artery-Computed Tomographic Angiography Scoring) project is an open-source project.

The goal of our project is to design a program that can characterize qualitative and quantitative morphologic features of calcific plaque. Using machine learning algorithms, we automatically identify calcific plaque in the carotid artery visible in CTA scans and perform image segmentation on them. We then train the algorithm to determine useful features about the plaque, such as its estimated risk to the patient to lead to a stroke, and then create another program to calculate its manual features such as the number, size, and volume. This program would be able to be used as the groundwork to simplify further research tasks in identifying critical features of plaque, such as determining causal relationships between a given feature and estimated risk. The current version (1.0) of this software uses 2D UNet, 2D and 3D Swin UNETR for image segmentation, Random Forest and CNN for risk estimation, and the Mahotas library for manual features.


## Usage

Here is an example of CACTAS-Tool: <br/>
![Screen Shot 2023-07-18 at 3 59 33 PM](https://github.com/jiehyunjkim/CACTAS/assets/54910137/4c27601c-caf2-4c4d-bb6a-20977d0c9ae3)


## Examples
Here is an SCCT Poster: <br/>
![SCCT_Poster](https://github.com/jiehyunjkim/CACTAS/assets/54910137/7bb758ac-0377-4a41-9754-4d10541f6eee)<br/>

## License 
This project is licensed under the MIT License - see the [LICENSE](https://github.com/jiehyunjkim/CACTAS/blob/main/LICENSE) file for details.

## Acknowledgements
The work of Josh Kotler was supported in part by the College of Science and Mathematics Dean’s Undergraduate Research Fellowship through fellowship support from Oracle, project ID R20000000025727.

## Contact
For any questions or comments, feel free to reach out to:
  * Jenna Kim at JieHyun.Kim001@umb.edu

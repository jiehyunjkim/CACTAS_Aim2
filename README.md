# CACTAS
Carotid Artery-Computed Tomographic Angiography Scoring

The work of Josh Kotler was supported in part by the College of Science and Mathematics Dean’s Undergraduate Research Fellowship through fellowship support from Oracle, project ID R20000000025727

# CACTAS Program

## Table of Contents
* [Software Information](#software-information)
* [Project Overview](#project-overview)
* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [License](#license)


## Software Information
**Software Name:** CACTAS Program<br/>
**Latest Software Version:** v.1.0

## Project Overview

The goal of our project is to design a program that can characterize qualitative and quantitative morphologic features of calcific plaque. Using machine learning algorithms, we automatically identify calcific plaque in the carotid artery visible in CTA scans and perform image segmentation on them. We then train the algorithm to determine useful features about the plaque, such as its estimated risk to the patient to lead to a stroke, and then create another program to calculate its manual features such as the number, size, and volume. This program would be able to be used as the groundwork to simplify further research tasks in identifying critical features of plaque, such as determining causal relationships between a given feature and estimated risk. The current version (1.0) of this software uses 2D UNet, 2D and 3D Swin UNETR for image segmentation, Random Forest and CNN for risk estimation, and the Mahotas library for manual features.

## Installation

**Fork our github repository:**
```
git clone git@github.com:jiehyunjkim/cs410_upenn.git [local directory]
```

**Data:** <br/> Change the DATAPATH at ```experiments - cactus- util.py - load() - DATAPATH``` to your own local directory. The size of npy file should be 512 by 512.

Open the terminal:<br/>

**Install conda:** https://docs.conda.io/projects/conda/en/latest/user-guide/install/download.html<br/>

From terminal, go to your local github fork directory and run the following steps. 
To create the environment necessary to run the program:
```
conda env create -f environment.yml
conda install notebook
jupyter--notebook --generate-config
vi /home/[YourUsername]/.jupyter/jupyter_notebook_config.py
```

Uncomment and populate the following fields within the file using your IP address and an arbitrary port number:
```
c.NotebookApp.ip = ‘0.0.0.0’
c.NotebookApp.open_browser = False
c.NotebookApp.port = YOUR_PORT_NUMBER
```
Lastly, to start up the environment and notebook:
```
conda activate CACTAS
jupyter notebook
```

At this point, you should have access to all the program files, visible within the Jupyter Notebook environment, where you can also run them.

## Usage

**Image segmentation:** [keras_2d_unet_usingAPI_v1.ipynb](https://github.com/jiehyunjkim/cs410_upenn/blob/master/experiments/keras_2d_unet_usingAPI_v1.ipynb),
[keras_swinUnetr_full_v11.ipynb](https://github.com/jiehyunjkim/cs410_upenn/blob/master/experiments/keras_swinUnetr_full_v11.ipynb),
[SwinUnetR_Chunks_Try5.ipynb](https://github.com/jiehyunjkim/cs410_upenn/blob/master/experiments/SwinUnetR_Chunks_Try5.ipynb)<br/>
**Risk estimation:** [RandomForest.ipynb](https://github.com/jiehyunjkim/cs410_upenn/blob/master/experiments/RandomForest.ipynb),
[CNN.ipynb](https://github.com/jiehyunjkim/cs410_upenn/blob/master/experiments/CNN.ipynb)<br/>
**Manual Features:** [upenn_plaque_features_oo_v1.py](https://github.com/jiehyunjkim/cs410_upenn/blob/master/experiments/upenn_plaque_features_oo_v1.py)<br/>

## Examples
Here is an SCCT Poster: <br/>
<img src="[https://drive.google.com/uc?id=1_dJ1mKtbxw2RwG6fSvnVBvIOrn6HscQy](https://drive.google.com/file/d/1I64i-cC2hPYubqQzkgtiZEVIwr5RJLht/view?usp=sharing)"
     alt="SCCT Poster"
     style="display: block; margin-right: auto; margin-left: auto; width: 40%;" /><br/>

## License 
This project is licensed under the MIT License - see the [LICENSE](https://github.com/jiehyunjkim/CACTAS/blob/main/LICENSE) file for details.

## Contact
For any questions or comments, feel free to reach out to:
  * Jenna Kim at JieHyun.Kim001@umb.edu

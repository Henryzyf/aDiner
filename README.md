# aDiner: Adaptive Dynamic Implicit Neural Representation for Dynamic CBCT Imaging

Author: Yufu Zhou, Hua Chen, Ziheng Deng, Jun Zhao


This repository is the official implementation of aDiner: Adaptive Dynamic Implicit Neural Representation for Dynamic CBCT Imaging. In this paper, we introduce a novel framework for dynamic CBCT imaging. 
Two main contributions of the paper are:

* We propose a PAD (Pseudo All-phase clinical-Dataset). The dataset provides paired training samples (images with and without motion artifacts) which are __*dynamic*__ and __*realistic*__.
* We propose a novel temporal transformer U-Net (TT U-Net) for motion artifact reduction. We consider this challenging problem as a video deblurring task and modify the vanilla U-Net by introducing a self-attention mechanism along the temporal dimension. We achieve __*whole heart*__ motion artifact reduction in __*dynamic*__ cardiac CT images.


The dynamic demos are available in [aDiner](https://henryzyf.github.io/aDiner/)

# aDiner: Adaptive Dynamic Implicit Neural Representation for Dynamic CBCT Imaging

Author: Yufu Zhou, Hua Chen, Ziheng Deng, Jun Zhao

This repository is the official implementation of aDiner: Adaptive Dynamic Implicit Neural Representation for Dynamic CBCT Imaging. 

The dynamic demos are available in [aDiner](https://henryzyf.github.io/aDiner/). The MP4 files can be downloaded from this repository.

**Abstract**:
Cone-beam Computed Tomography (CBCT) is essential for target localization and treatment planning in image-guided radiotherapy for lung cancer. Dynamic reconstruction is an ill-posed inverse problem, as each motion state is captured by only one single projection. Although several deep learning methods have been proposed, most algorithms rely on training by large datasets with high-quality ground-truth labels, and reconstruct images at discrete respiratory phases. Therefore, we propose a self-supervised learning method, adaptive Dynamic implicit neural representation (aDiner), to reconstruct dynamic CBCT images for each timepoint. Specifically, an adaptive composite representation (ACR) is introduced. In ACR, the inter- and intra-cycle encoding (iICE) captures the inter- and intra-cycle similarities of lung motion and ensures temporal coherence. Moreover, a probability-based feature fusion (PFF) is proposed to fuse decoupled static and dynamic features, composing the spatiotemporal representation. To improve the motion estimation, we further design a motion-guided coarse-to-fine sampling (MCS) strategy to focus on dynamic regions, with adaptive projection-ray sampling (APS) and adaptive deformed-point sampling (ADS). Compared with the previous methods, aDiner separately estimates static and dynamic regions, and takes advantage of the inter- and intra-cycle similarities to achieve better reconstruction quality. aDiner was evaluated on simulated and clinical datasets. The results showed that aDiner could accurately and robustly reconstruct dynamic CBCTs for each timepoint. It also captured the lung motion in both regular and irregular respirations.

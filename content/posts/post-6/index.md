---
title: "DINO: DETR with Improved DeNoising Anchor Boxes for End-to-End Object Detection"
date: 2022-03-07
venue: "ICLR"
keywords: ["Object Detection", "DETR"]
---

We present DINO (**D**ETR with **I**mproved de**N**oising anch**O**r boxes), a state-of-the-art end-to-end object detector. in this paper. DINO improves over previous DETR-like models in performance and efficiency by using a contrastive way for denoising training, a mixed query selection method for anchor initialization, and a look forward twice scheme for box prediction. DINO achieves 49.4AP in 12 epochs and 51.3AP in 24 epochs on COCO with a ResNet-50 backbone and multi-scale features, yielding a significant improvement of +6.0AP and +2.7AP, respectively, compared to DN-DETR, the previous best DETR-like model. DINO scales well in both model size and data size. Without bells and whistles, after pre-training on the Objects365 dataset with a SwinL backbone, DINO obtains the best results on both COCO `val2017` (63.2 **AP**) and `test-dev` (63.3AP). Compared to other models on the leaderboard, DINO significantly reduces its model size and pre-training data size while achieving better results. Our code will be available at this [https URL](https://github.com/IDEACVR/DINO).

[Paper](https://arxiv.org/abs/2203.03605) | [Code](https://github.com/IDEA-Research/DINO)
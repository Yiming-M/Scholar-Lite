---
title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale"
date: 2020-10-22
venue: "ICLR"
keywords: ["Image Recognition", "Transformer", "Attention Mechanism"]
---

**Authors**: Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, Neil Houlsby, **Jane Doe**

While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.), Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring substantially fewer computational resources to train.

## Resources

[Paper](https://arxiv.org/abs/2010.11929) | [Code](https://github.com/lucidrains/vit-pytorch) | [Project Page](https://huggingface.co/docs/transformers/model_doc/vit) | [Google Research](https://research.google/pubs/pub49430/)
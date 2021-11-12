---
title: Detecting and Cropping a Face from an Image
author: Rohan Faiyaz Khan
draft: true
tags: ['machine learning', 'computer vision', 'face detection']
date: 2021-06-16
---

<!-- Excert Start -->

Detecting a face from an image is an important step to many computer vision applications, for instance extracting features from a face using a model like VGGFace2. This tutorial goes over two well known approaches: HAAR Cascade Classifier [^1] using OpenCV and a Convolutional Neural Network, specifically MTCNN [^2].

<!-- Excert End -->

> Disclaimer: There is a lot of debate on the ethicality of common use cases of computer vision tasks used on human faces such as emotion detection. There is an abundance of ethically questionable studies that claim to be able to tell a person's characteristics such as sexuality [^3] which have come under criticism for their questionable methodology and leaps in logic [^4]. I do not wish to contribute to such work with this tutorial, and hence I do request any AI practitioners and researchers use their ethical reasoning into any application of such technology.

[^1]: Paul Viola and Michael J. Jones. Robust real-time face detection. International Journal of Computer Vision, 57(2):137–154, 2004

[^2]: Zhang, K., Zhang, Z., Li, Z., and Qiao, Y. (2016). Joint face detection and alignment using multitask cascaded convolutional networks. IEEE Signal Processing Letters, 23(10):1499–1503.

[^3]: Y. Wang and M. Kosinski, “Deep neural networks are more accurate than humans at detecting sexual orientation from facial images.,” American Psychological Association, vol. 114, no. 2, pp. 460–468, 2017.

[^4]

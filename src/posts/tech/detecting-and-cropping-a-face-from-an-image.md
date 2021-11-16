---
title: Detecting and Cropping a Face from an Image Using HAAR Cascade Classifier and MTCNN
author: Rohan Faiyaz Khan
draft: true
tags: ['machine learning', 'computer vision', 'face detection']
date: 2021-12-05
---

<!-- Excert Start -->

Detecting a face from an image is an important step to many computer vision applications, for instance extracting features from a face using a model like VGGFace2. This tutorial goes over two well known approaches: HAAR Cascade Classifier [^1] using OpenCV and a Convolutional Neural Network, specifically MTCNN [^2].

<!-- Excert End -->

> <small>__Disclaimer__: There is a lot of debate on the ethicality of common use cases of computer vision tasks used on human faces such as emotion detection. There is an abundance of ethically questionable studies that claim to be able to tell a person's characteristics which have rightfully come under criticism. I do not wish to contribute to such work with this tutorial, and hence I do request any AI practitioners and researchers use their ethical reasoning into any application of such technology.</small>
## HAAR Cascade Classifier

HAAR Cascading [^1] is a technique that has been around for quite a while and yet is still very popular due to how well it works given relatively little computational power. The technique involves a sliding window over an image's pixels, very similar to a single convolutional layer in a Convolutional Neural Network. The window contains a cascade of classifier filters that have been pretrained with weights. The cascade implies that the 6000+ filters are applied one after the other, but only when previous filters have passed. This is what makes the algorithm perform so well, the sliding window only focuses on the pixels most likely to be a face.

For more details on the theory, the best source would be [the OpenCV library's tutorial on this](https://docs.opencv.org/3.4/db/d28/tutorial_cascade_classifier.html). OpenCV is a free computer vision library that includes the most well known implementation of a HAAR Cascade Classifier, which is the one we will be seeing a glimpse of today.

### Code

We'll be using the `opencv-python` library (along with `numpy` and `PIL`). You can install them if you haven't already using:

```bash
pip3 install numpy pillow opencv-python
```

Then in a python environment:

```python
from pathlib import Path
from PIL import Image
import numpy as np
import cv2

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
```

In this bit we are initializing a Cascade Classifier. The `'haarcascade_frontalface_default.xml'` is a specification for which pretrained model to use. You can find a full list of the options [here](https://github.com/opencv/opencv/tree/master/data/haarcascades).

```python
img = cv2.imread('path/to/image.jpg')

# Convert the image to gray 
gray_image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

faces = face_cascade.detectMultiScale(gray_image, scaleFactor=1.25, minNeighbors=3, minSize=(40,40))
```
The last line is where the detection happens and the parameters here are quite important. You can refer to [this stackoverflow user's answer] for more details on each parameter and recommended values for them. You may need to tinker with these values to find the best set of trade offs for your use (oh yes, this method is fast and simple, but by no means perfect).

```python
# Check number of faces found
print('Number of faces detected:', len(faces))

# Crop out the selected faces
crops = []

for count,face in enumerate(faces):
    x, y, w, h = face
    
    left = x - padding
    right = x + w + padding
    top = y - padding
    bottom = y + h + padding
    crop = original[left:right,top:bottom]

    crops.append({'img':crop,'weight':x+y})
    
# ensure that faces are sorted in the order in which they appear
crops.sort(key=lambda x: x['weight'])
crops = [c['img'] for c in crops]
```

Of course you can also draw rectangles on the faces on the original image as well.

```python
# copy for drawing rectangles on
image_copy = np.copy(img)

for (x,y,w,h) in faces:
    cv2.rectangle(image_copy,(x,y),(x+w,y+h),(0,255,0),2)
```

### Why Use HAAR Cascade Classifier?

It is very fast, and does not require a lot of computational resources. This makes it perfect for running if you don't have a GPU, or for running on an embedded devices.

### Why Not Use HAAR Cascade Classifier?

While the performance is good enough for a lot of use cases, it is also very brittle. It is not reliable for detecting a face that is not looking straight at the camera. The algorithm specializes in edge detection, and doesn't work quite when the edges are not obvious, such as in the dark or wearing sunglasses. And yes, it works particularly poorly on people not presenting their assigned gender.

[^1]: Rainer Lienhart and Jochen Maydt. An extended set of haar-like features for rapid object detection. In Image Processing. 2002. Proceedings. 2002 International Conference on, volume 1, pages I–900. IEEE, 2002.

[^2]: Zhang, K., Zhang, Z., Li, Z., and Qiao, Y. (2016). Joint face detection and alignment using multitask cascaded convolutional networks. IEEE Signal Processing Letters, 23(10):1499–1503.

[^3]: Y. Wang and M. Kosinski, “Deep neural networks are more accurate than humans at detecting sexual orientation from facial images.,” American Psychological Association, vol. 114, no. 2, pp. 460–468, 2017.

[^4]: B. A. y Arcas, “Do algorithms reveal sexual orientation or just expose our stereotypes?,” Jan. 18, 2018. https://medium.com/@blaisea/do-algorithms-reveal-sexual-orientation-or-just-expose-our-stereotypes-d998fafdf477 (accessed Nov. 12, 2021).



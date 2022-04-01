---
title: 'A Game of Feels: Literature Analysis into Ethics of Emotion Detection and Recognition'
author: 'Rohan Faiyaz Khan'
date: 2022-03-12
header_img: '/img/egg.jpg'
header_img_caption: Photo by <a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shubham Dhage</a> on <a href="https://unsplash.com/s/photos/emotion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
header_img_alt: 'picture of a sad egg'
share_img: '/img/egg.jpg'
share_desc: In this essay, I look over the literature discussing ethics of emotion detection and recognition technology (EDR). I go over the views of emotion held by psychologists, philosophers and scientists. I discuss how one perspective based on basic emotion theory, "the common view", would become the most popular view and despite criticisms, how it go on to become intertwined with technology
tags:
  - 'AI'
  - 'AI Bias'
  - 'Fairness'
  - 'Emotion'
excerpt: In this essay, I look over the literature discussing ethics of emotion detection and recognition technology (EDR). I go over the views of emotion held by psychologists, philosophers and scientists. I discuss how one perspective based on basic emotion theory, "the common view", would become the most popular view and despite criticisms, how it go on to become intertwined with technology
---

> “If a machine is expected to be infallible, it cannot also be
> intelligent.” - Alan Turing

The detection and recognition of emotion and affect given only externally observed features such as facial features, gait and voice have become a burgeoning area within the tech industry. At present, emotion detection and recognition (EDR) is a billion dollar industry that is growing at a rate of 18.01% annually [^5]. Companies and services within the space include Amazon’s Rekognition, Microsoft Azure’s Face Recognition, VibraImage, SkyBiometry, Affectiva, Sentiance, Realeyes, Kairos, Noldus Information Technology, CrowdEmotion among many others.

EDR products developed by these companies, while each having their own intricacies, generally all use some sort of facial recognition technology to classify a subject’s emotion into one of several distinct categories of emotion. While the categories used differ product to product, they are generally variations of well-known emotions (or at least well-known in a Western Europe/North American context) such as joy, sadness, excitement, disgust, fear, surprise and neutral which perhaps implicates an absence of emotion. The implication of course is that these emotional categories are recognizable through some form of facial expression such that it is readable through a facial recognition algorithm.

At first glance there may be some truth to this. After all, the reading of emotion in the people we interact with is something we either consciously or sub-consciously need to do in a daily basis to function in our lives. Often we consider those that are unable to effectively read emotion in others as disabled such as those diagnosed with autism. However this brings into question how effectively do we really read into others’ emotion, the language of emotion we use to both express and read emotion, and how much of socialization and culture play a part in the process. These question inevitably lead to the larger question at play - to what extent can a facial recognition algorithm truly recognize emotion?

In this article I will look over the literature analyzing the ethics of emotion recognition. I will first do so by shedding light on the history of science surrounding emotion itself. I will then go over what is often described as the “common view” [^1] of emotion and how it manifests within the world in non-technology related settings. Finally I will look into the methods of emotion recognition and how it has critics worried.

## The Theory of Emotion

Contrary to what I have implied above regarding the acceptance of a “common view” of emotion, the theory of emotion and affect have a long history with conflicting opinions among scholars across multiple disciplines. One particular problem of course is the definition of emotion which has been pondered on by philosophers such as Aristotle, René Descartes and Immanuel Kant . Over time emotion has been used to describe “a compound phenomenon variously consisting of evaluative, physiological, phenomenological, expressive, behavorial and mental components” [^10].

There are numerous philosophies and theories that have been used to explain emotion. One such is affect which is described as unconcsious effects in the body arising from external stimuli. While many know accept affect as independent to emotion, there have been any instance of the two being used interchangibly. Under this framework, emotion appears as the opposite of logic or reasoning, a view championed by aforementioned Descartes. A similar and yet slightly deviant view to this was suggested by nineteenth century philosopher William James, who suggests emotion is a specific and subjective sensory feelings that are a result of autonomous responses in the body [^6]. Williams implies that we do not cry because we are sad, but rather we are sad because we cry [^6].

The idea of emotion and reasoning being opposed was strongly disputed by late nineteenth century perceptions of emotion being constituted by cognitive capacities, rather than being opposed to it. One such example is neuroscientist Antonio Damasio’s book _Descartes’ Error_ where Damasio argues that good logic and reasoning depends on how someone experiences emotion, that the faculties of emotion and reason were closely linked. Stark and Hoey’s review of [^12] argues that a central element of this philosophy is that there some element of “intentionality” to emotion, and there emotional expression could be performed in social contexts [^10].

One theory which aligns with emotion and reasoning being opposed is the theory of emotion being a motivational state that causes external behaviours. This theory extends that the results of experiencing emotion are given away through the human body. Psychologist Sylvan Tomkins argued that innate effects of emotion in terms of changes to the brain and hormone activity were common among all humans [^11]. Tomkins believed these could be distilled into nine different distinct affective categories - interest, enjoyment, surprise, fear, anger, distress, shame, contempt and disgust [^11]. This philosophy, once extended by students of Tomkins, Paul Ekman and Carol E. Izard, would become formalized as basic emotion theory (BET).

In their review of BET, Scarantino and de Souza emphasize that BET claims universality of the basic emotions such that they can be observed across social and cultural barriers and a result of evolutionary advantages to expressing certain emotions [^9]. There has however been several challenges to BET. An example of a philosophical challenge is that the assumption of evolution selecting for the expression of emotion is not possible given that it may not be in one’s survival interests to express the emotion they are experiencing [^4]. Empirical challenges to BET have also pointed out that the alleged response profiles have not been adequately proven in terms of “the level of expressive responses or at the level of autonomic changes, neural changes, preset actions or learned actions” [^9]. Barrett et. al. in their review of scientific evidence analyizing the express of six common basic emotions found that evidence suggests the manner in which emotions such as anger, disgust, fear, happiness, sadness, and surprise is communicated varies significantly across culture, context and even similar people [^1]. Furthermore, certain configurations of facial movements used in basic emotion theory are commonly used to convey more than a single emotion, and sometimes something other than emotion altogether [^1].

Alternative theories in response to BET take a wholly different perspectives on facial expression altogether. An influencial view is Behavorial Ecology view, which sees facial expression interpreted as emotion to be intentional displays performed for a specific audience [^4]. An example of this what basic emotion theorists would consider an angry face may be seen by behavorial ecologists as a display of an intent to attack [^4].

Despite these challenges, modern BET has become the most influential view of emotion It has been extended to suggest that there are upto 20 basic emotions, including multimodal expressions [^7]. A simplified version of BET is described by Barrett et. al. as the “common view” of emotion [^1] and is widely adopted across systems, technology and media.

## Mass adoption of the “common view” into technology

Emotion-related technology would widely come to accept a version of basic emotion theory, albeit a simplified version. In defense of tech companies, this phenomenom was not isolated to them only. Western culture had at some point adopted this view, which Barrett et. al. calls the “common view” [^1]. Several examples are given in [^1] of the “common view” in action such as:

- social facial expressions taught in schooling
- emoji that assumes facial expressions express certain “feelings”
- disabilities being related to one’s ability to understand facial
  expressions
- FBI training agents to read facial expression to assess suspicious
  intent
- Judges using facial expression in defendants as an indicator of
  remorsefulness in order to assess how strict to be with a sentence

Therefore it may not be surprising that technology has shared the same common view of emotion. Scientists using technology to attempt to “measure” emotion from the body has quite a long history, such as levels of the hormone adrenaline being used in the early twentieth century to measure the “excitement” emotion [^2]. Modern BET provides a formalization of such assumptions, which can then be encoded through the training of an Emotion Detection and Recognition (EDR) algorithm. EDR solutions generally predict a finite number of categories of emotion from an image of someone’s face using facial markers as features. For example Affectiva uses anger, contempt, disgust, fear, joy, sadness and surprise as categories of emotion. Some systems also use a binary system to measure whether one has positive or negative emotion, or are passive or aggressive, or are engaged or disinterested.

Despite criticisms to basic emotion theory and the numerous alternative paradigms to it, it seems to be accepted as truth within the language of technology. BET presents a framework of recognizing emotion from faces that is translatable as a computing task given facial recognition technology. Due to the opacity of facial recognition models, interpretibility of these results are difficult and under-researched, which lends credibility to the results of the algorithms. Furthermore, the societal acceptance of the “common view” makes these algorithms’ predictions sound plausible to the layperson.

This is not saying that EDR technology does not suffer from other criticisms. The systems can generally predict only one emotion, and not a combination of multiple emotions. This limitation is a well-known shortcoming of classification algorithms. Another critism is a lack of reliable results across implementations. This is particularly true for interpreting facial expressions that are not smiles. Dupre et. al. finds that three commercial EDR technologies from Affectiva, Microsoft and Kairos find that accuracy of the systems varies significantly on the same frame of the same video, and the discrepancies are most significant when the subject is not smiling [^3]. Furthermore, it was also observed that error rates where higher when infering naturally occuring facial expressions as opposed to acted facial expressions.

The technology is also prone to bias similar to the facial recognition technology they are built on. In one study, Rhue finds that EDR technology of Microsoft AI and Face++ found profile pictures of black NBA players to be more negative than white NBA players [^8]. Face++ regularly found black players to angrier and Microsoft AI regularly found black player to have more contempt.

These findings seem to suggest that EDR technologies still have a way to go in terms of being reliable for any potential use case. However, as mentioned before EDR is a massive industry and these are some areas in which EDR technology is already being implemented:

- Marketers use EDR tech to visualize how customers are reacting to advertisements
- Security and smart city solutions implement EDR as part of their surveillance
- Education solutions measure how people engage with educational content
- Automated hiring uses EDR has part of the process of assessing candidates
- Call centers using EDR to monitor if callers are being satisfied

Deployment of EDR technologists reinforce a normative view of emotion and enforce a normative form of behaviour on subjects of the technology. Individuals are expected to be fluent in expressing their emotion that aligns with the technology, and individuals who are unable to do so draw to themselves inconvenience or harm. A surveillance device interpreting someone's facial expression as aggressive, or an interview software flagging a candidate's facial expression as nervous can have significant implications on the person. The opacity of EDR software as well as that of emotion as defined by BET makes it difficult for the subject to meaningfully protest such cases.

Ethical considerations of EDR technology must be carefully considered before such technology is developed or deployed. Developers must be aware that facial expressions may not be a proxy for forms of emotion relevant to their use case, and that said emotion can a large degree of cultural variance. The growth and usage of EDR technology is concerning because these ethical considerations are not apparent in commercial and state-of-the-art EDR technology.

## References

[^1]:
    Barrett, L.F. et al. 2019. Emotional Expressions Reconsidered: Challenges to Inferring Emotion From Human Facial Movements. _Psychological Science in the Public Interest: A Journal of the American Psychological Society_. 20, 1 (Jul. 2019), 1–68.
    DOI:https://doi.org/[10.1177/1529100619832930](https://doi.org/10.1177/1529100619832930).

[^2]:
    Dror, O.E. 2009. Afterword: A Reflection on Feelings and the History of Science. _Isis_. 100, 4 (Dec. 2009), 848–851.
    DOI:https://doi.org/[10.1086/652024](https://doi.org/10.1086/652024).

[^3]: Dupre, D. et al. 2018. Accuracy of three commercial automatic emotion recognition systems across different individuals and their facial expressions. _2018 IEEE International Conference on Pervasive Computing and Communications Workshops (PerComWorkshops)_ (Athens, Mar. 2018), 627–632.
[^4]: Fridlund, A.J. 1994. _Human facial expression: An evolutionary view._ Academic Press.
[^5]: Intelligence, M. 2022. Emotion Detection And Recognition (EDR) Market 2022 - 27 Industry Share, Size, Growth - Mordor Intelligence. Retrieved 15 March 2022 from [https://www.mordorintelligence.com/industry-reports/emotion-detection-and-recognition-edr-market](https://www.mordorintelligence.com/industry-reports/emotion-detection-and-recognition-edr-market)
[^6]:
    James, W. 1884. <span class="nocase">II.—What is an Emotion? _Mind_. os-IX, 34 (Apr. 1884), 188–205.
    DOI:https://doi.org/[10.1093/mind/os-IX.34.188](https://doi.org/10.1093/mind/os-IX.34.188).

[^7]:
    Keltner, D. et al. 2019. Emotional Expression: Advances in Basic Emotion Theory. _Journal of nonverbal behavior_. 43, 2 (Jun. 2019), 133–160.
    DOI:https://doi.org/[10.1007/s10919-019-00293-3](https://doi.org/10.1007/s10919-019-00293-3).

[^8]: Rhue, L. 2018. _Racial Influence on Automated Perceptions of Emotions_. Technical Report #ID 3281765. Social Science Research Network.
[^9]: Scarantino, A. and Sousa, R. de 2021. Emotion. _The Stanford Encyclopedia of Philosophy_. E.N. Zalta, ed. Metaphysics Research Lab, Stanford University.
[^10]:
    Stark, L. and Hoey, J. 2021. The Ethics of Emotion in Artificial Intelligence Systems. _Proceedings of the 2021 ACM
    Conference on Fairness, Accountability, and Transparency_ (New York, NY, USA, Mar. 2021), 782–793.

[^11]: Tomkins, S.S. and Izard, C.E. eds. 1965. _Affect, cognition, and personality: Empirical studies._ Springer.
[^12]: Wilson, E.A. 2011. _Affect and Artificial Intelligence_. University of Washington Press.

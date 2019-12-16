# Fake news detection using Deep Learning

# Exercuse 1 - Initiate

## Overview
This repository contains all artifacts used for the class Applied Deep Learning. The topic of this project is **NLP - Fake news Detection** and is primarily based on the following two papers:

[1]  Alvaro Ibrain Rodriguez and Lara Lloret Iglesias. [Fake news detection using deep learning, 2019.](https://arxiv.org/abs/1910.03496)

[2]  Yang Yang, Lei Zheng, Jiawei Zhang, Qingcai Cui, Zhoujun Li, and Philip S. Yu. [TI-CNN: convolutional neural networks for fake news detection, 2018.](https://arxiv.org/abs/1806.00749)

## Problem Definition and Solution Approach
With the growth of online newspapers who update news almost instantly, people have found a better and faster way to be informed of the matter of his/her interest. Nowadays social-networking systems, online news portals, and other online media have become the main sources of news through which interesting and breaking news are shared at a rapid pace. However, many news portals serve special interest by feeding with distorted, partially correct, and sometimes imaginary news that is likely to attract the attention of a target group of people. Fake news has become a major concern for being destructive sometimes spreading confusion and deliberate disinformation among the people.

This problem has reached its peak of notoriety after the 2016 US electoral campaign when it has been determined that the fake news have been crucial to polarize society and promote the triumph of Donald Trump. The big technology companies (Twitter, Facebook, Google) have spotted this danger and have already begun to work on systems to detect these fake news on their platforms.

To express the problem to solve in a slightly more formal way; given a news article defined by a set of own characteristics (ie. title, text, photos, newspaper, author, ...), a function is sought such that it returns 0 when the news article is fake and 1 otherwise.

Several different approaches and solutions for detecting the fake news have been proposed in recent years. In this work, the focus will be on the use of convolutional neural networks to detect fake news. 

The above mentioned two papers, both proposed their each convolutional neural networks that use the content of the news as input. Both with similar accuracy results, 92% and 93%, respectively. The idea here is to build a convolution neural network from scratch by using these two papers as role models. The final goal is, of course, to top their accuracy results. 

This means that the project type of this work is **Bring your own method**.

## Datasets
Primarily, two datasets will be used.

* TI-CNN: 
The dataset used in this work has been built in [2]. It is composed of 20015 news articles labeled as fake or true which are gathered from two sources. On the one hand, the fake ones come from the dataset Getting Real About Fake News [14] while the real ones have been obtained from well-known sources such as The New York Times or The Washington Post.

* Fake News Corpus
Besides TI-CNN dataset, the Fake News Corpus will be used for testing and fine tuning the models. This one is
composed by millions of online articles classified in several categories like bias, clickbait, fake, political or true.

If time allows, other datasets and options will be explored.

## Work Organization
The work for this project is divided into the following issues:
1. [How-Tos](https://github.com/acoj1993/fake-news-deeplearning/issues/1) (Time estimate: 16h)
2. [Dataset Collection](https://github.com/acoj1993/fake-news-deeplearning/issues/2), [Resource planning and environment setting](https://github.com/acoj1993/fake-news-deeplearning/issues/3) (Time estimate: 4h + 12h)
2. [Desingning and Buidling the CNN](https://github.com/acoj1993/fake-news-deeplearning/issues/4) (Time estimate: 32h) 
3. [Experiments](https://github.com/acoj1993/fake-news-deeplearning/issues/5) (Time estimate: 16h)
5. [Application](https://github.com/acoj1993/fake-news-deeplearning/issues/6) (Time stimate: 12h)
6. [Report + Presentation](https://github.com/acoj1993/fake-news-deeplearning/issues/7) (Time estimate: 12h)


# Exercise 2 - Hacking

## Overview
In the following sections I will briefly deliver the goals and results for the exercise 2.

## The target
After carefully reading and examining the papers specified above, I decided that my goals (checkpoints) are the following.

1. Since I had almost no experience with building and designing neural networks, I first had to understand and learn how to do it. This included many tutorials, documentations, github repositories etc.  

2. The first (real) checkpoint for the project was to re-implement the work done in [1]. The main reason to focus more on [1] (instead of on [2]) is that [1] reports slightly better results. On the plus side, the paper is new and, honestly, their approach seemed a bit more interesting to me. 

3. Finally, I wanted to improve their results. I wanted to (based on the network in [1]) design and build my own network that would probably be more complex, but with better accuracy.

## The results
As far as I see it, I successfully  accomplished all three of my target goals. After I acquired enough skills, I successfully re-implemented the CNN from [1] well within my estimated time. At that point, I had to brainstorm possible changes and improvements. I first tried to tweak some parameters and settings, just to see what will happen. However, this approach did not lead to a significant and consistent accuracy improvement. The results were highly dependent on the randomness of the split and also on the size of the splits.

The next attempt was to try to redesign the network to have better accuracy on the test split. Note that the approach in [1] is to learn to distinguish between real and fake news by feeding the network with text (body) and title feature, whereas the CNN in [2] does it with image and title. My approach however puts the entire weight solely on the text feature. At least for this datasets, it turns out that training on the text feature has much higher impact on accuracy than title and image feature. After some research and trial and error the network architecture looks like this:

<figure>    
   <img src="https://github.com/acoj1993/fake-news-deeplearning/blob/master/model_extended.h5.png" width = "35%" height="50%">
</figure>

Most of the hyper-parameters remained the same as in [1]. 
The network was trained over 5 epochs with accuracy results on the test split ranging from 0.965 to 0.995. These results beat the results of the CNN in [1]. However, one has to notice the slight increase in complexity (going from two to three branches).

## The remaining work 
Duo to time constraint for this project, I did not get to fine-tune the network by using Bayesian Optimization and Fake News Corpus dataset.

## The struggles
I cannot really report that I experienced any unforeseeable  struggles. Naturally, the experimenting part of the project costs the most time and it can be stressful if one does not get any improving results. This was a limiting part, but other than that, everything went as expected.

## Work Organization
1. [How-Tos](https://github.com/acoj1993/fake-news-deeplearning/issues/1) (Actual time spent: 8h)
2. [Dataset Collection](https://github.com/acoj1993/fake-news-deeplearning/issues/2), [Resource planning and environment setting](https://github.com/acoj1993/fake-news-deeplearning/issues/3) (Actual time spent: 4h + 4h)
2. [Desingning and Buidling the CNN](https://github.com/acoj1993/fake-news-deeplearning/issues/4) (Actual time spent: 34h) 
3. [Experiments](https://github.com/acoj1993/fake-news-deeplearning/issues/5) (Actual time spent: 8h)
4. Submission of the exercise (Actual time spent: 3h)

## Summary
Finally to summarize the deliverables:
1. The error metric that was the most important for me was the accuracy on the test data.
2. The target of that error metric was to beat the result achieved in [1] and [2] with a relatively similar model
3. The best achieved value showed promising results, outperforming both results with an average accuracy of 97-98% on test data (compared to 94% and 93% reported in [1] and [2])
4. The amounts of time spent on each task are represented in the section **Work Organization**.

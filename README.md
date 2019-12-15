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

## Work Organisation
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
After carefully reading and examining the papers specifed above, I decided that my goals (checkpoints) are the following.

1. Since I had almost no experience with building and designing neural networks, I first had to understand and learn how to do it. This included many tutorials, documentations, github repositories etc.  

2. The first (real) checkpoint for the project was to re-implement the work done in [1]. The main reason to focus more on [1] (instead of on [2]) is that [1] repots slightly better results. On the plus side, the paper is new and, honestly, their approach seemed a bit more interesting to me. 

3. Finally, I wanted to improve their results. I wanted to (based on the network in [1]) design and build my own network that would probably be more complex, but with better accuracy.

## The results
As far as I see it, I succesfully accomplished all three of my target goals. After I acquired enough skills, I successfully re-implemented the CNN from [1] well within my estimated time. At that point, I had to brainstorm possible changes and improvements. I first tried to tweak some parameters and settings, just to see what will happen. However, this approach did not lead to a significant and consistant change/improvement. The results were highly dependent on the randomness of the split and also on the size of the splits.

The approach in [1] is to learn to distinguish between real and fake news by feeding the network with text (body) and title feature. The CNN in [2] does it with image and title. But I would argue, that the weight of importance for a successful detection of the fake news is probably much higher on the text rather than on the title. This is why, I decided to focus primarly on the text feature. 

After searching for inspiration and ideas, I designed my network to look like this:
-- todo -- insert image

Most of the hyper-parameters remained the same as in [1]. 
The network was trained over 5 epochs with accuracy results on the test split ranging from 0.965 to 0.995. These results significantly beat the results of the CNN in [1]. However, one has to notice the slight increase in complexity (going from two to three branches).

## The remaining work 
Sadly the time scope for the project did not allow to go further with my network and hence some options are left untouched, even though they are, by all means, not crucial for this project. 

- No fine-tuning by using Bayesian Optimization was conducted and the "big" Fake News Corpus dataset was not used at all. 
- Some further "smart" design changes could have been tested on the network. 

## The struggles
TODO

## Work Organisation
TODO

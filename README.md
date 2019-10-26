# Fake news detection using Deep Learning
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
2. Dataset Collection, Resource planning and environment setting
2. Desingning and Buidling the CNN 
3. Experiments
4. Result Analysis
5. Application
6. Report + Presentation


<template>
    <div class="fakeNews" style="display: inline-block">
        <b-card-group deck v-if="news && news.length">
            <b-card v-for="article in news"
                    v-bind:title="article.title"
                    title-tag="h5"
                    v-bind:img-src="article.imageUrl"
                    img-alt="Image"
                    img-height="200px"
                    img-top
                    align="center"
                    tag="article"
                    style="max-width: 25rem; float:left;"
                    class="mb-2"
            >
                <b-button href="#" variant="primary" style="float:left" @click="readArticle(article)">Read Article
                </b-button>
                <b-button href="#" variant="warning" v-show="!article.predicted" style="float:right"
                          @click="verifyArticle(article)">Verfiy Article
                    <!--                    <b-spinner v-bind:disabled="modelPredictionInProgress" v-show="modelPredictionInProgress" small></b-spinner>-->
                    <!--                    <span class="sr-only">Loading...</span>-->
                </b-button>
                <b-button href="#" variant="success" v-show="article.predicted && !article.predictedFake"
                          style="float:right" @click="verifyArticle(article)">Verified!
                </b-button>
                <b-button href="#" variant="danger" v-show="article.predicted && article.predictedFake"
                          style="float:right" @click="verifyArticle(article)">Fake article!
                </b-button>
            </b-card>
        </b-card-group>

        <b-modal id="bv-modal-example" scrollable v-bind:title="this.selectedArticle.title" ok-only>
            <p>
                {{ this.selectedArticle.text }}
            </p>
        </b-modal>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Article} from "@/Article";
    import * as tf from "@tensorflow/tfjs";
    import {LayersModel, Tensor} from "@tensorflow/tfjs";
    import {ModelHelper} from "../helper";

    @Component
    export default class FakeNews extends Vue {
        news: Array<Article>;
        selectedArticle: Article | null = null;
        model: LayersModel | null = null;

        // modelPredictionInProgress : boolean = false;

        async created() {
            this.model = await tf.loadLayersModel(
                "https://acoj1993.github.io/model/model.json"
            );

            await ModelHelper.warmupModel(this.model);
        }

        constructor() {
            super();
            this.news = new Array<Article>();
            this.news.push(new Article(
                1,
                false,
                "Trump Foundation Tells New York It Has Stopped Soliciting After State Order",
                "Donald J. Trump <U+2019>s foundation informed Attorney General Eric T. Schneiderman of New York that it has ceased soliciting donations in the state, after a recent order to halt such fund-raising efforts, a spokesman for the attorney general<U+2019>s office said on Monday. The charity, the Donald J. Trump Foundation, also requested and was granted an extension for filing its financial paperwork, including audits, said Eric Soufer, the spokesman. The developments come about two weeks after the attorney general<U+2019>s office ordered the foundation to stop soliciting charitable contributions in the state of New York, saying that the nonprofit was not properly registered to do so under state law. A <U+201C>notice of violation<U+201D> letter sent to the foundation on Sept. 30 required it to submit financial documents within 15 days, or <U+201C>be deemed to be a continuing fraud upon the people of the state of New York.<U+201D> The foundation has become a source of controversy during Mr. Trump<U+2019>s presidential campaign amid reports about questionable expenditures, doubts about whether he followed through on charitable pledges and his own lack of financial support for the charity. <U+201C>The Trump Foundation is cooperating with the office of the N.Y. A.G. in its investigation of the foundation and, given the scope of the N.Y. A.G.<U+2019>s requests, is working with the N.Y. A.G. to respond in a reasonable and timely manner,<U+201D> said Hope Hicks, a spokeswoman for Mr. Trump<U+2019>s campaign. Mr. Trump<U+2019>s campaign has dismissed the criticism of the foundation, saying he has provided ample support to worthy causes over the years, both through the charity and directly. Ms. Hicks has previously said he is concerned about the <U+201C>political motives<U+201D> behind the attorney general<U+2019>s investigation. Mr. Schneiderman, a Democrat and supporter of Mrs. Clinton, has tangled with Mr. Trump over other matters, including his high-profile lawsuit alleging that students were defrauded out of thousands of dollars at Mr. Trump<U+2019>s for-profit education program, Trump University. Find out what you need to know about the 2016 presidential race today, and get politics news updates via Facebook , Twitter and the First Draft newsletter .",
                "https://static01.nyt.com/images/2016/10/18/us/18fd-trumpfoundation/18fd-trumpfoundation-master675.jpg",
                false,
                false
            ));

            this.news.push(new Article(
                12345,
                true,
                "What does the future hold for Russian politics?",
                "What does the future hold for Russian politics? The September parliamentary elections in Russia proved once again that the power of the Russian president and his party remains largely uncontested. But how will this impact Russia<U+2019>s future political and economic development? The September parliamentary elections in Russia proved once again that the power of the Russian president and his party remains largely uncontested. But how will this impact Russia<U+2019>s future political and economic development? \\n\\nGrigory Yavlinsky, the leader of the one of the major liberal parties in Russia - Yabloko. Even though the party\\'s ;claim for the role of a uniting force for all democrats appeared more convincing than five years ago, Yabloko failed to attract supporters in Duma elections. Photo: TASS \\nOn Sept. 18, the Russian public went to the election polls to vote for candidates for the State Duma, the lower chamber of the country<U+2019>s parliament. But, as many experts predicted, the election did not bring any change to the current political system. Similarly to the previous parliament, the new one contains the same four parties <U+2013> United Russia, the Liberal Democratic Party of Russia (LDPR), the Communist Party and A Just Russia.\\nThe success of Putin and United Russia as the <U+201C>party of power<U+201D> is unquestionable, but does it mean that this status quo will remain for long? And how will the recent shakeups in the country<U+2019>s political elite influence the direction the country is taking?\\nRussia Direct examines these question in its new analytical report, \" Hawks vs. Doves: Russia\\'s political drama heading into 2018 ,\" featuring expert insights from several prominent Russian experts: Yuri Korgunyuk of INDEM Foundation, Andrei Kolesnikov of Carnegie Moscow Center, and Mikhail Zygar, former editor-in-chief of the independent Russian TV channel Dozhd.\\nIn his thorough analysis of the outcomes of the State Duma elections, Korgunyuk explains what tools helped the Kremlin ensure its leading position in power and discusses what factors accounted for the defeat of the liberal opposition, represented most importantly by the Yabloko and PARNAS parties.\\nAlthough the victory of United Russia is clear, it still will face many challenges in keeping its power in the long run . According to him, one cannot exclude that at some point, when the regime feels vulnerable, it will turn to using tough measures to strengthen its position, as it was exactly these measures that helped to stop the nation<U+2019>s incipient protest wave in 2011-2012.\\n<U+201C>Such measures will only cement the problems accumulated in the economy and society while erasing the traditional ways of solving them within the existing system,<U+201D> he writes. This in turn might make political regime change more possible.\\nJames Sherr, associate fellow at Chatham House, also thinks that the success of the ruling party in the election does not necessarily reflect a positive trend. As he sees it, the real issues in Russia involve the relationship between the people and power at various levels. While in some parts of the country it is good, in other places it leaves much to be desired. <U+201C>There is still a real possibility of discord rising locally at different levels in ways that people had difficulties predicting before,<U+201D> he says.\\nAccording to Kolesnikov, the results of the Duma elections provide a preview of what to expect in 2018 presidential elections and beyond that. Building on his analysis on the results, he argues that even though it is highly likely that Putin is going to be re-elected in 2018, it poses problems for the authorities to create at least some kind of competition in 2018 elections. The expert discusses the liberal and conservative camps in Putin<U+2019>s closest circle and explains why the transition of power (which is bound to happen at some point) will be very difficult in Russia.\\n<U+201C>If technocrats and liberals are able to persuade him that his security depends on democracy, he might chose this path, yet, again, not because he likes democracy,<U+201D> he argues.\\nThe question of whether Russian society is ready for democracy has been on the table for quite some time now. However, according Zygar, who has recently authored a book on Putin and the people surrounding him, that<U+2019>s not the best way to think about the current Russian political scene.\\nZygar warns against oversimplifying the picture and supports those who see Russia as a country where people differ in their political views and aspirations. While liberals and conservatives oppose each other in many respects, they do not represent the general public, which tends to remain politically apathetic. They are occupied with their daily routines and don<U+2019>t want to be bothered. Hence, <U+201C>a lot depends on the current political situation,<U+201D> he argues.\\nWho will dominate in the Kremlin before the 2018 elections? ; Download the report and find out .",
                "https://picsum.photos/600/300/?image=29",
                false,
                false
            ));

            this.news.push(new Article(
                7891,
                true,
                "Why You Should Stop Apologizing for Doing All That You Can",
                "Why You Should Stop Apologizing for Doing All That You Can Illustration by Kim Ryu By Kelly Hayes / transformativespaces.org \\nI<U+2019>ve noticed lately that lot of allies and accomplices I talk to about NoDAPL and other struggles will name what they are trying to contribute to the cause, and then promptly apologize that they can<U+2019>t do more. Often, the apologies seem perfunctory, or even insincere, but sometimes, they seem quite heartfelt. Personally, I deal with enough ideological tourists and movement loitering to feel a little sad when good people are doing good things, and feeling shitty about themselves anyway. \\nMaybe they don<U+2019>t realize how many people applaud themselves for <U+201C>standing on the right side of history,<U+201D> as though reading an article or a book, and figuring out where to <U+201C>stand,<U+201D> is how one affects the course of history. \\nOr perhaps they just don<U+2019>t know how to appreciate themselves <U+2014> or have even been taught not to. \\nSo I just want to say to everyone <U+2014> whether you see yourself as an ally, accomplice or frontline struggler: \\nIf you are really doing all that you can, you have nothing to apologize for. \\nBecause if you are really and truly doing all that you can, you<U+2019>re actually setting a pretty high standard for the rest of us. \\nAnd if you are really and truly doing all that you can, you should appreciate that about yourself, and allow yourself to be appreciated by others. Because as simple as it may sound, it<U+2019>s often hard for us to internalize the fact that, on the scale of what we can all contribute, all you can is actually everything. \\nIf you<U+2019>re accustomed to selling yourself short, that may seem a little grandiose, so let<U+2019>s vision this through for a moment: \\nCan you imagine how much closer to free we could get if everyone really did all that they could <U+2014> within their own capacity, without martyring themselves in a heap of burnout? \\nWhat would it look like? \\nWhat could we build? \\nI think some of us have seen snapshots of what that could look like, in moments of consuming, fast-paced community collaboration, where we had to take care of each other to sustain community, and the work. But those breakneck sprints of action and inspiration, and the community-care triage that they necessitate, are not a model for day-to-day living. Because that intensity burns out. A broad, sustainable vision <U+2014> and a simple one really <U+2014> of community where everyone who claims to care passionately about a thing simply does all they can, and does their best<U+2026> that<U+2019>s obviously a dream that<U+2019>s still under construction. \\nWhen we think about what obstacles impede that dream, we might first think of the internal failings of individuals: apathy, selfishness, etc. But what informs these tendencies? Is it possible that we are taught that some contributions are too small to matter, and that some are so great that they<U+2019>ll make all the difference? Are we caught in a mythology where we are deemed either heroic or insignificant? \\nThe idea that heroic individuals somehow marshal their talents, and resources (hello, Batman), to liberate the masses has, to put it mildly, an oppressive functionality. If internalized, it has the potential to shorten our social and political reach, due to our own self obsession. In movement building, we learn that heroic communities, rather than heroic individuals, propel our freedom dreams. Such communities are made up of people of all capacities, who bravely and lovingly do all they can. \\nRespecting our differing capacities is part of taking care of each other, and personally, I want to live in world where we honor each other<U+2019>s contributions, celebrate one another, and love and care for each other. \\nSo the bottom line here is: Be glad to acknowledge that you do all you can. \\nLet<U+2019>s not teach others, who might take an interest in movement work, that feelings of insufficiency and guilt are the inevitable consequences of those efforts. We can be humble without erasing or diminishing ourselves. We can tell people what it means to us to do what we can, and we can discuss the different shapes that can take <U+2014> and how fulfilling it can be. \\nIf you<U+2019>re reading this and thing to yourself, <U+201C>Well, I really could do a lot more,<U+201D> you could be right. I don<U+2019>t know your story, or who depends on you, what your health is like or what resources you have to give. But if you think you have more to offer, don<U+2019>t approach those efforts from a place of guilt <U+2014> because as you may have noticed, the guilt of the privileged has never gotten anyone free. \\nSo take joy in sharing your efforts and ideas with others. Celebrate what it means to be a resistor acting in defense of your community, or acting in solidarity with others. And if you<U+2019>re a white accomplice, appreciate what it means to be a full-fledged traitor to white supremacy. Because that<U+2019>s a beautiful thing and worth smiling about. \\nI<U+2019>m not saying we should gloss over the messes we make and wade through in our organizing spaces. As communities, we need to be real about the rough places movement work can go <U+2014> especially when discussing the structural oppressions we replicate in our own spaces. But we also need to feel right about the things we deserve to feel right about, and to remind each other of that. \\nIf your goal is to be enough to put right everything that<U+2019>s wrong, you will never be enough. But if your goal is to build a culture and a community that upends its oppressions, then the best you<U+2019>ve got <U+2014> the best that a whole lot of us have got <U+2014> is exactly what it<U+2019>s going to take. \\nIt<U+2019>s easy to tell people not to burn out, but I think it sometimes helps to think of movements as larger forces of nature <U+2014> as constellations of actions, movements, stories and freedom fighters. There are all kinds of action-takers who show us what the pursuit of freedom looks like. \\nSo just do your best today, and do it again tomorrow, and feel right about that. Because together, we will get there. 0.0 <U+00B7>",
                "https://picsum.photos/600/300/?image=25",
                false,
                false
            ));

            this.selectedArticle = this.news[0];
        }

        readArticle(article: Article) {
            this.selectedArticle = article;
            this.$bvModal.show("bv-modal-example");
        }

        verifyArticle(article: Article) {
            // this.updateSpinner(true);

            this.selectedArticle = article;
            const inputTextVector = ModelHelper.padSequence(ModelHelper.tokenize(article.text));
            const inputTensor = tf.tensor(inputTextVector, [1, 1606], "int32");

            if (this.model != null) {
                const output = this.model.predict([inputTensor]);
                if (output instanceof Tensor) {
                    let predictions = output.dataSync();
                    if (predictions.length >= 2) {
                        const probabilityFakeNews = predictions[0];
                        const probabilityRealNews = predictions[1];
                        article.predictedFake = probabilityFakeNews >= probabilityRealNews;
                        article.predicted = true;
                        console.log(article.title);
                        console.log("Probability fake news:" + probabilityFakeNews);
                        console.log("Probability real news:" + probabilityRealNews);
                    }
                }
            }

            // this.updateSpinner(false);
        }

        // updateSpinner(toggle : boolean) {
        //     this.modelPredictionInProgress = toggle;
        // }
    }

</script>

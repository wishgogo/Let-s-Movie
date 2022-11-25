let vm = new Vue({
    el: '#app',
    data: {
        isActive: '全部',
        showMessage: true,
        citys: ['全部', '台北市', '台北二輪', '新北市', '桃園', '新竹', '苗栗', '台中', '彰化', '南投', '雲林', '嘉義', '台南', '高雄', '屏東', '基隆', '宜蘭', '花蓮', '台東', '金門', '澎湖'],
        selectCitys: '全部',
        selectMovies: [],
        animationOrFantasyOrAdventures: [],
        plotOrRecords: [],
        fearOrSuspense: [],
        funnyOrLoves: [],
        actionOrscienceFictionOrCrimes: [],
        others: [],
        nowDate: null,
        nowTimer: "",
        search: '',
        searchAll: [],
        isSearch: [],
    },
   
    mounted() {

     
        this.showMovies();
    },
    created() {
        this.nowTimer = setInterval(this.gettime, 1000);
    },
    async beforeUpdate() {

        $(function () {
            $(".cityresponsive").slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 5,

            });
            $(".responsive").slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    },
    methods: {
        gettime() {
            this.nowDate = new Date().toLocaleString();
        },
        showMovies: function () {

            var animation = new RegExp("動畫");
            var adventure = new RegExp("冒險");
            var plot = new RegExp("劇情");
            var fear = new RegExp("恐怖");
            var suspense = new RegExp("懸疑/驚悚");
            var record = new RegExp("紀錄片");
            var funny = new RegExp("喜劇");
            var love = new RegExp("愛情");
            var action = new RegExp("動作");
            var scienceFiction = new RegExp("科幻");
            var music = new RegExp("音樂/歌舞");
            var history = new RegExp("歷史/傳記");
            var crime = new RegExp("犯罪");
            var fantasy = new RegExp("奇幻");

            axios.get('20221004toCCV3.json')
                .then((res) => {

                    for (var i = 0; i <= res.data.Data.length; i++) {
                        this.searchAll.push(res.data.Data[i]);
                    }
                    if (this.selectCitys == "全部") {

                        for (var i = 0; i <= res.data.Data.length; i++) {
                            if (animation.test(res.data.Data[i].劇情分類) || adventure.test(res.data.Data[i].劇情分類) || fantasy.test(res.data.Data[i].劇情分類)) {
                                this.animationOrFantasyOrAdventures.push(res.data.Data[i]);
                            }
                            if (plot.test(res.data.Data[i].劇情分類)) {
                                this.plotOrRecords.push(res.data.Data[i]);
                            }
                            if (fear.test(res.data.Data[i].劇情分類) || suspense.test(res.data.Data[i].劇情分類)) {
                                this.fearOrSuspense.push(res.data.Data[i]);
                            }
                            if (funny.test(res.data.Data[i].劇情分類) || love.test(res.data.Data[i].劇情分類)) {
                                this.funnyOrLoves.push(res.data.Data[i]);
                            }
                            if (action.test(res.data.Data[i].劇情分類) || scienceFiction.test(res.data.Data[i].劇情分類) || crime.test(res.data.Data[i].劇情分類)) {
                                this.actionOrscienceFictionOrCrimes.push(res.data.Data[i]);
                            }
                            if (record.test(res.data.Data[i].劇情分類) || music.test(res.data.Data[i].劇情分類) || history.test(res.data.Data[i].劇情分類)) {
                                this.others.push(res.data.Data[i]);
                            }

                        }
                    } else {
                        for (var i = 0; i <= res.data.Data.length; i++) {
                            //alert(i)
                            for (var j = 0; j < res.data.Data[i].時刻表.length; j++) {
                                for (var k = 0; k < res.data.Data[i].時刻表[j].地區.length; k++) {

                                    if (res.data.Data[i].時刻表[j].地區[k].名稱 == this.selectCitys && res.data.Data[i].時刻表[j].地區[k].電影院.length > 0) {
                                        if (animation.test(res.data.Data[i].劇情分類) || adventure.test(res.data.Data[i].劇情分類) || fantasy.test(res.data.Data[i].劇情分類)) {
                                            this.animationOrFantasyOrAdventures.push(res.data.Data[i]);
                                        }
                                        if (plot.test(res.data.Data[i].劇情分類)) {
                                            this.plotOrRecords.push(res.data.Data[i]);
                                        }
                                        if (fear.test(res.data.Data[i].劇情分類) || suspense.test(res.data.Data[i].劇情分類)) {
                                            this.fearOrSuspense.push(res.data.Data[i]);
                                        }
                                        if (funny.test(res.data.Data[i].劇情分類) || love.test(res.data.Data[i].劇情分類)) {
                                            this.funnyOrLoves.push(res.data.Data[i]);
                                        }
                                        if (action.test(res.data.Data[i].劇情分類) || scienceFiction.test(res.data.Data[i].劇情分類) || crime.test(res.data.Data[i].劇情分類)) {
                                            this.actionOrscienceFictionOrCrimes.push(res.data.Data[i]);
                                        }
                                        if (record.test(res.data.Data[i].劇情分類) || music.test(res.data.Data[i].劇情分類) || history.test(res.data.Data[i].劇情分類)) {
                                            this.others.push(res.data.Data[i]);

                                        }
                                    }

                                }

                            }

                        }
                    }
                });

        },
        selectCity: function (c) {
            this.selectCitys = c;
            this.isActive = c

            alert(this.selectCitys)
            this.animationOrFantasyOrAdventures.splice(0);
            this.plotOrRecords.splice(0);
            this.fearOrSuspense.splice(0);
            this.funnyOrLoves.splice(0);
            this.actionOrscienceFictionOrCrimes.splice(0);
            this.others.splice(0);
            //$(".movies").empty();
            this.showMovies();
        },
        selectMovie: function (m) {
            this.selectMovies = m;


        },
        searchNow: function (m) {
            this.isSearch.splice(0);

            var search = new RegExp(this.search);

           
            if (this.search.length > 0) {
                for (var i = 0; i <= this.searchAll.length; i++) {
                    if (search.test(this.searchAll[i].中文名稱) || search.test(this.searchAll[i].英文名稱)) {
                        this.isSearch.push(this.searchAll[i]);
                    }

                }
            } 

        },
    },
})


var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: true,
    showlrc: false,
    mutex: true,
    theme: '#e6d0b2',
    preload: 'metadata',
    music: {
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'http://devtest.qiniudn.com/Preparation.mp3',
        pic: 'http://devtest.qiniudn.com/Preparation.jpg'
    }
});
ap1.on('play', function () {
    console.log('play');
});
ap1.on('play', function () {
    console.log('play play');
});
ap1.on('pause', function () {
    console.log('pause');
});
ap1.on('canplay', function () {
    console.log('canplay');
});
ap1.on('playing', function () {
    console.log('playing');
});
ap1.on('ended', function () {
    console.log('ended');
});
ap1.on('error', function () {
    console.log('error');
});
//ap1.init();

var ap2 = new APlayer({
    element: document.getElementById('player2'),
    narrow: true,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#e6d0b2',
    music: {
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'http://devtest.qiniudn.com/Preparation.mp3',
        pic: 'http://devtest.qiniudn.com/Preparation.jpg'
    }
});
//ap2.init();

var ap3 = new APlayer({
    element: document.getElementById('player3'),
    narrow: false,
    autoplay: false,
    showlrc: 1,
    mutex: true,
    theme: '#615754',
    music: {
        title: '回レ！雪月花',
        author: '小倉唯',
        url: 'http://devtest.qiniudn.com/回レ！雪月花.mp3',
        pic: 'http://devtest.qiniudn.com/回レ！雪月花.jpg',
        lrc: "[by:京兆万年]\n[ti:回レ!雪月花 小紫ver.]\n[ar:小倉唯]\n[lr:ヒゲドライバー]\n[co:ヒゲドライバー]\n[ag:ヒゲドライバー]\n[00:00.00]せ〜の　いちにっさんはい！（预~备 一 二 三 嗨！）\n[00:04.68]ほい！　いよーーーーっ　ぽん！（嘿 咿哟 嘭）\n[00:07.66]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[00:11.12]ハッハッハッハッハッハッ　う～（哈 哈 哈 哈 哈 哈 呜~）\n[00:13.36]さぁさぁさぁ（来 来 来）\n[00:14.08]これよりご覧いただきますは（接下来诸位将欣赏到的是）\n[00:15.65]カブキ者たちの栄枯盛衰（歌舞伎演员们的荣辱盛衰）\n[00:17.14]時代常に日進月歩（时代总是在日新月异）\n[00:18.24]聞いてってよ老若男女（且听我一一道来 男女老少）\n[00:20.14]一見は勧善懲悪（乍一看是惩恶扬善）\n[00:21.49]悪者どもを一刀両断（将坏人们一刀两断）\n[00:22.85]「でもホンドにそれだけで楽しいの？」（“但是你真的会因此而觉得扬眉吐气吗？”）\n[00:25.63]もうなんだって蒟蒻問答（无论问什么 都是牛头马嘴）\n[00:27.58]ハッハッハッハッハッハッハィヤ（哈哈哈哈哈哈 咿呀）\n[00:30.57]ハッハッハッハッ（哈哈哈哈）\n[00:31.97]いよーーーーっ　ぽん！（咿哟 嘭）\n[00:33.61]どこからともなく現れて（自何处出现委实难料）\n[00:34.96]すぐどこかへ行っちゃって神出鬼沒（眼又遁隐他处总是神出鬼没）\n[00:36.35]チャンスを待ったら一日千秋（若是静候机会 便是一日千秋）\n[00:38.03]追いかければ東奔西走（追上前去的话又要东奔西走）\n[00:39.68]時代常に千変万化（时代总是千变万化）\n[00:40.95]人の心は複雑怪奇（世人之心复杂怪奇）\n[00:42.31]「でも本気でそんなこ言ってんの？」（“但是说着这些话的你岂不也是难免戏谑?”）\n[00:45.02]もうどうにも満身創痍（也罢 无论怎样都将满身疮痍）\n[00:46.98]嗚呼、巡り巡って夜の町（呜呼 绕来绕去相会在这夜色下的街）\n[00:53.27]キミは合図出し踊りだす（（由）你发出信号 （让）我们一同起舞转）\n[00:58.12]はぁ～（哈呜~）\n[00:58.88]回レ回レ回レ回レ回レ回レ回レ回レ回レ！（旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧！）\n[01:02.12]華麗に花弁　散らすように（在散落的美丽花瓣中）\n[01:04.97]回レ回レ回レ回レ回レ回レ回レ回レ回レ！（旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧！）\n[01:08.13]髪も振り乱して（头发凌乱又怎样？）\n[01:10.23]一昨日、昨日、今日と、明日と、明後日と（前日、昨日、今日、明日、后日）\n[01:14.13]この宴は続く（这场宴会亦不息）\n[01:16.31]踊レ、歌エ、一心不乱に回レ！（舞动吧 歌唱吧 一心不乱的旋转吧于）\n[01:20.19]今宵は雪月花（今夜的雪月花）\n[01:25.43]ほい！　いよーーーーっ　ぽん！（哈～!～哟ーーーー～嘣～!）\n[01:29.14]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[01:32.16]ハッハッハッハッハッハッ　う～（哈 哈 哈 哈 哈 哈 呜）\n[01:34.39]ねぇねぇねぇ（呐～呐～呐～）\n[01:35.12]この世に平安訪れるの？（平安已经访问此世了吗?）\n[01:36.50]のべつ幕無し丁丁発止（不会闭幕的丁当争斗）\n[01:38.09]兵ども千客万来（官兵们接踵而来）\n[01:39.50]ひしめき合群雄割拠（相互吵吵嚷嚷群雄割据）\n[01:41.00]伸るか反るか一攫千金（成败在于敢否一举千金）\n[01:42.47]気が付いたら絶体絶命（回过头来却已穷途末路）\n[01:43.50]「でも本音のとこ、どうなってんの？」（「不过真心的所在、到底是什么样呢?」）\n[01:46.62]もうまったく奇想天外（真是的总这么异想天开）\n[01:48.51]嗚呼、辿り辿って夜の町（呜呼、追溯于夜晚小镇上）\n[01:54.83]迷い一つなく踊りだす（心无杂念的就此起舞吧）\n[01:59.68]はぁ～（哈阿～）\n[02:00.44]回レ回レ回レ回レ回レ 回レ回レ回レ回レ！（转啊转啊转啊转啊转啊转啊转啊转啊转啊!）\n[02:03.64]華麗に花弁　散らすように（犹如花瓣华丽的散落一般）\n[02:06.49]回レ回レ回レ回レ回レ 回レ回レ回レ回レ！（转啊转啊转啊转啊转啊转啊转啊转啊转啊!）\n[02:09.66]髪も振り乱して（长发也随风飘散）\n[02:11.72]一昨日、昨日、今日と、明日と、明後日と（无论前天、昨天、还是今天、明天、与后天）\n[02:15.63]この宴は続く（这宴会还会持续）\n[02:17.67]踊レ、歌エ、一心不乱に回レ！（跳吧、唱吧、一心一意的转吧!）\n[02:21.60]今宵は雪月花（因为今宵乃是雪月花）\n[02:36.74]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[02:39.72]ハッハッハッハッハッハッ　さぁさぁさぁ（哈 哈 哈 哈 哈 哈 来～来～来～）\n[02:42.45]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[02:45.49]ハッハッハッハッハッハッ（哈 哈 哈 哈 哈 哈）\n[02:47.66]花で一つ、鳥で二つ（花就是一、鸟就是二）\n[02:51.31]手打ち鳴らす（拍着手轻声唱）\n[02:54.12]風で三つ、嗚呼、月出て四つ（风就是三、呜呼、月出就有四）\n[02:58.76]鳴らす鳴らす……（轻声唱轻轻唱……）\n[03:00.09]花で一つ、鳥で二つ（花就是一、鸟就是二）\n[03:03.34]手打ち鳴らす（拍着手轻声唱）\n[03:06.25]風で三つ、嗚呼、月出て四つ（风就是三、呜呼、月出就有四）\n[03:10.78]鳴らす鳴らす……（轻轻唱轻声唱……）\n[03:13.28]今は（在此）\n[03:15.35]回レ回レ回レ回レ回レ 回レ回レ回レ回レ！（转啊转啊转啊转啊转啊转啊转啊转啊转啊!）\n[03:18.63]華麗に花弁　散らすように（犹如花瓣华丽的散落一般）\n[03:21.35]回レ回レ回レ回レ回レ 回レ回レ回レ回レ！（转啊转啊转啊转啊转啊转啊转啊转啊转啊!）\n[03:24.60]髪も振り乱して（长发也随风飘散）\n[03:26.72]一昨日、昨日、今日と、明日と、明後日と（无论前天、昨天、还是今天、明天、与后天）\n[03:30.67]この宴は続く（这宴会不会结束）\n[03:32.75]踊レ、歌エ、一心不乱に回レ！（跳吧、唱吧、一心一意的转吧!）\n[03:36.63]今宵は何曜日か？（今宵是星期几呢?）\n[03:39.02]水木金？（三四五?）\n[03:40.56]土日月火？（六七一二?）\n[03:44.11]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[03:47.00]ハッハッハッハッ（哈 哈 哈 哈 哈 哈）\n[03:48.57]いよーーーーっ　ぽん！（～哟ーーーー～嘣～!）\n[03:50.43]-終わり-（-End-）"
    }
});
//ap3.init();

var ap4 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#ad7a86',
    music: [
        {
		title: 'Hide (Tropkillaz Remix)',
		author: 'N.A.S.A',
	      url: './traplord/01Hide(TropkillazRemix)[feat.AynzliJones].m4a',
		pic: './traplord/2.jpg'
        },{
		title: 'Two Drags',
            author: 'Tropkillaz',
  		url: './traplord/Two_Drags.mp3',
            pic: './traplord/1.jpg'
	  },{
            title: '',
            author: '',
		url: './traplord/ .mp3',
            pic: './traplord/24'
        }
    ]
});
//ap4.init();

var ap5 = new APlayer({
    element: document.getElementById('player5'),
    narrow: false,
    autoplay: false,
    showlrc: true,
    mutex: false,
    theme: '#1684FB',

    music: [
        {//
		title: 'Hide (Tropkillaz Remix)',
	  	author: 'N.A.S.A',
	  	url: './traplord/01Hide(TropkillazRemix)[feat.AynzliJones].m4a',
	  	pic: './traplord/2.jpg',
	  	lrc: ""
	  },
        {//
		title: ' Two Drags',
            author: 'Tropkillaz',
    		url: './traplord/Two_Drags.mp3',
            pic: './traplord/1.jpg',
            lrc: ""
        },
	  {//
		title: ' We Like To Party (NGHTMRE Remix)',
            author: 'Showtek',
    		url: './traplord/WeLikeToParty(Slander&NGHTMREFestivalTrapEdit).mp3',
            pic: './traplord/st.jpg',
            lrc: ""
	},{//
		title: ' How We Do',
            author: 'Showtek',
    		url: './traplord/25_How_We_Do.mp3',
            pic: './traplord/st.jpg',
            lrc: ""
	},{//
		title: ' Assests (feat. The Kemist)',
            author: 'Tropkillaz',
    		url: './traplord/Assets_(feat._The Kemist).m4a',
            pic: './traplord/1.jpg',
            lrc: ""
	},{//
		title: ' Bad (feat. Vassy)',
            author: 'David Guetta',
    		url: './traplord/Badft.Vassy.m4a',
            pic: './traplord/bad.jpg',
            lrc: ""
	},{////////////
		title: ' Bap U',
            author: 'Party Favor',
    		url: './traplord/BapU.mp3',
            pic: './traplord/pf.jpg',
            lrc: ""
        },{////////////
		title: ' Boa Noite',
            author: 'Tropkillaz',
    		url: './traplord/BoaNoite.mp3',
            pic: './traplord/1.jpg',
            lrc: ""
        },{////////////
		title: ' Bricks (feat. Migos)',
            author: 'DJ Carnage',
    		url: './traplord/Bricks(Feat.Migos).mp3',
            pic: './traplord/dc.jpeg',
            lrc: ""
        },{////////////
		title: 'Hardcore',
            author: 'Tropkillaz',
    		url: './traplord/HARDCORE.mp3',
            pic: './traplord/1.jpg',
            lrc: ""
        },{////////////
		title: 'Hate Being (Dotcom Remix)',
            author: 'Chief Keef',
    		url: './traplord/HateBeingSober(DotcomsFestivalTrapRemix).mp3',
            pic: './traplord/ck.jpg',
            lrc: ""
        },{////////////
		title: 'HIDEHO',
            author: 'Tropkillaz',
    		url: './traplord/HIDEHO.m4a',
            pic: './traplord/1.jpg',
            lrc: ""
        },{////////////
		title: 'Hot Damn',
            author: 'Tropkillaz',
    		url: './traplord/HotDamn.mp3',
            pic: './traplord/1.jpg',
            lrc: ""
        },{////////////
		title: 'I Want U',
            author: 'Alison Wonderland',
    		url: './traplord/IWantU.mp3',
            pic: './traplord/iwu.jpeg',
            lrc: ""
        },{////////////
		title: 'I\'m Blue (Trap Remix)',
            author: 'Effel 65',
    		url: './traplord/ImBlue(TrapRemix).mp3',
            pic: './traplord/et.jpg',
            lrc: ""
        },{////////////
		title: 'IBETCHU',
            author: 'Yellow Claw & Cesqeaux',
    		url: './traplord/IBETCHU.mp3',
            pic: './traplord/yc.jpg',
            lrc: ""
        },{////////////
		title: 'LOKO (Original Mix)',
            author: 'LOOKAS',
    		url: './traplord/LOKO(OriginalMix).mp3',
            pic: './traplord/la.png',
            lrc: ""
        },{////////////
		title: 'MAMBO',
            author: 'Tropkillaz',
    		url: './traplord/MAMBO.mp3',
            pic: './traplord/1.jpg',
            lrc: ""
        },{////////////
		title: 'One Here Comes The Two',
            author: 'Tropkillaz',
    		url: './traplord/OneHereComesTheTwo.mp3',
            pic: './traplord/1.jpg',
            lrc: ""
        },{////////////
		title: 'Rollup (Baauer Remix)',
            author: 'Flosstradamus',
    		url: './traplord/Rollup(BaauerRemix).m4a',
            pic: './traplord/fm.jpg',
            lrc: ""
        },{////////////
		title: 'Sixes',
            author: 'thefaded',
    		url: './traplord/Sixes.mp3',
            pic: './traplord/tf.jpg',
            lrc: ""
        },{////////////
		title: 'Take You There (feat. Kiesza)',
            author: 'Skrillex & Diplo',
    		url: './traplord/TakeUThere(Feat.Kiesza).mp3',
            pic: './traplord/sd.jpg',
            lrc: ""
        },{////////////
		title: 'Turn Up (Kill The Noise Remix)',
            author: 'Gent & Jawns',
    		url: './traplord/TurnUp(KillTheNoiseRemix).m4a',
            pic: './traplord/gj.jpg',
            lrc: ""
        },{////////////
		title: 'Way Up',
            author: 'Tropkillaz',
    		url: './traplord/WayUp.mp3',
            pic: './traplord/1.jpg',
            lrc: ""
        }
    ]
});
ap5.on('play', function () {
    console.log('play');
});
ap5.on('play', function () {
    console.log('play play');
});
ap5.on('pause', function () {
    console.log('pause');
});
ap5.on('canplay', function () {
    console.log('canplay');
});
ap5.on('playing', function () {
    console.log('playing');
});
ap5.on('ended', function () {
    console.log('ended');
});
ap5.on('error', function () {
    console.log('error');
});
ap5.init();

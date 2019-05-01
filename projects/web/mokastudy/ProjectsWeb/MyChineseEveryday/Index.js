//THIS IS A SIMPLE SCRIPT WITH AN ARRAY AND TWO FUNCTION
//THE ARRAY WILL CONTAINS ALL THE WORD THAT I SHOULD KNOW, FROM A STRING TO MAKE IT EASIER
//THE SLICE ELEMENT WILL BE /
//MYWORDSSTRING: EACH "" WILL CONTAINS HSK WORD OR OTHER AS FOLLOW: "HSK1" + "other"

var hsk1 = "我	wǒ	I, me/我们	wǒmen	we, us (pl.)/你	nǐ	you/你们	nǐmen	you (pl.)/她	tā	she, her/他们	tāmen	they (male+female / male, pl.)/这 (这儿)	zhè ( zhèr)	here, this/那 (那儿)	nà (nàr)	there, that/	哪（哪儿）	nǎ (nǎr)	where/谁	shuí	who/什么	shén me	what, why/多少	duōshǎo	how many, how much/几	jǐ	a few, how many/怎么	zěnme	how/怎么样	zěnmeyàng	how about/	二	èr	two/三	sān	three/五	wǔ	five/六	liù	six/七	qī	seven/九	jiǔ	nine/十	shí	ten/零	líng	zero/岁	suì	year/本	běn	volume/些	xiē	some/不	bù	no/没	méi	no/很	hěn	quite, very/太	tài	too/都	dōu	all/和	hé	and/在	zài	in, at/的	de/了	le/吗	ma/呢	ne/喂	wèi	hello/家	jiā	home/学校	xuéxiào	school/饭店	fàndiàn	restaurant/商店	shāngdiàn	store/火车站	huǒchēzhàn	train station/中国	zhōng guó	China/北京	běijīng	Beijing/上	shàng	up/下	xià	down/前面	qiánmiàn	front/后面	hòumiàn	behind/里	lǐmiàn	inside/今天	jīntiān	today/明天	míngtiān	tomorrow/昨天	zuótiān	yesterday/上午	shàngwǔ	morning/中午	zhōngwǔ	noon/下午	xiàwǔ	afternoon/年	nián	year/月	yuè	month/日	rì	day/星期	xīngqī	week/点	diǎn	dot, spot/分钟	fēnzhōng	minute/现在	xiànzài	now/时候	shíhou	time/爸爸	bàba	father/妈妈	māma	mother/儿子	érzi	son/女儿	nǚér	daughter/老师	lǎoshī	teacher/学生	xuéshēng	student/同学	tóngxué	shoolmate/朋友	péngyou	friend/医生	yīshēng	doctor/先生	xiānsheng	sir/小姐	xiǎojiě	Miss/衣服	yīfu	cloth/水	shuǐ	water/菜	cài	vegetable/米饭	mǐfàn	rice/水果	shuǐguǒ	fruit/苹果	píngguǒ	apple/茶	chá	tea/杯子	bēizi	cup/钱	qián	money/飞机	fēijī	airplane/出租车	chūzūchē	taxi/电视	diànshì	television/电脑	diànnǎo	computer/电影	diànyǐng	movie/天气	tiānqì	weather/猫	māo	cat/狗	gǒu	dog/东西	dōngxi	thing/人	rén	person/名字	míngzi	name/书	shū	book/汉语	hànyǔ	mandarin Chinese/字	zì	character/桌子	zhuōzi	desk/椅子	yǐzi	chair/谢谢	xièxie	thank/不客气	búkèqì	you are welcome/再见	zàijiàn	good-bye/请	qǐng	please/对不起	duìbùqǐ	sorry/没关系	méiguānxì	It doesn’t matter/是	shì	be (am, is, are)/有	yǒu	have/看	kàn	look/听	tīng	listen/说话	shuōhuà	speak/读	dú	read/写	xiě	write/看见	kànjiàn	see/叫	jiào	call/来	lái	come/回	huí	return/去	qù	go/吃	chī	eat/喝	hē	drink/睡觉	shuìjiào	sleep/打电话	dǎdiànhuà	call up/做	zuò	do/买	mǎi	buy/开	kāi	open/坐	zuò	sit/住	zhù	live/学习	xuéxí	study/工作	gōngzuò	work/下雨	xiàyǔ	rain/爱	ài	love/喜欢	xǐhuān	love, like/想	xiǎng	want/认识	rènshi	know/会	huì	can/能	néng	can, be able to/好	hǎo	good/大	dà	big/小	xiǎo	small/多	duō	many, much/少	shǎo	few, little/冷	lěng	cold/热	rè	hot/高兴	gāoxìng	happy/漂亮	piàoliàng	beautiful"
var myWordsString = hsk1;
var myWordsArray = myWordsString.split("/")
var thisList = [];

//FUNCTION GetList()
//WILL RETURN A 10 LIST WORD AND REPLACE IT ON THE HTML
function GetList() {
	var chooseList = myWordsString.split("/")
  	var newList = [];
  	var word = "";
  	for(i = 0; i < 10; i++ ) {
  		var newWord = Math.floor(Math.random() * chooseList.length);
  		newList.push(chooseList[newWord]);
  		var index = chooseList.indexOf(myWordsArray[newWord]);
  		chooseList.splice(index, 1);
  	}
  	for(i = 0; i < newList.length; i++ ) {
		word += newList[i];
		word += "<br>";
	}
	return word;
}

function GetListHSK1() {
	var chooseList = hsk1.split("/")
  	var newList = [];
  	var word = "";
  	for(i = 0; i < 10; i++ ) {
  		var newWord = Math.floor(Math.random() * chooseList.length);
  		newList.push(chooseList[newWord]);
  		var index = chooseList.indexOf(myWordsArray[newWord]);
  		chooseList.splice(index, 1);
  	}
  	for(i = 0; i < newList.length; i++ ) {
		word += newList[i];
		word += "<br>";
	}
	return word;
}

function GetSelected(myArray) {
	var word = myArray;
	for(i = 0; i < myArray.length; i++ ) {
		word += myArray[i];
		word += "<br>";
	}
	return word;
}

function GetAll() {
	var word = "";
	for(i = 0; i < myWordsArray.length; i++ ) {
		word += myWordsArray[i];
		word += "<br>";
	}
	return word;
}
var aA = document.getElementsByClassName('hash-go')
var title = 'hexxi - a creative platform where culture interaction happens'

for (var i = 0; i < aA.length; i++) {
    aA[i].onclick = function () {
        var hash = this.dataset.hash
        window.location.hash = hash
    }
}

//programs数据
var programsData = [
    {
        pic: '/images/programs/project b003_a space odyssey/cover page.jpg',
        detailPic: ['/images/programs/project b003_a space odyssey/cover page.jpg', '/images/programs/project b003_a space odyssey/Archi-1.jpg', '/images/programs/project b003_a space odyssey/Archi-12.jpg', '/images/programs/project b003_a space odyssey/Archi-33.JPG', '/images/programs/project b003_a space odyssey/Archi-41.JPG', '/images/programs/project b003_a space odyssey/Archi-70.JPG', '/images/programs/project b003_a space odyssey/Archi-77.JPG'],
       rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">A Space Odyssey</h1> <p class="m-member__text">' + 'self-published photo book </p> <p class="m-member__text">'+ '<span class="m-label -margin-top">time:</span> 2019</p><p class="m-member__text">' + '<span class="m-label">location:</span> Italy, England</p><p class="m-member__text">'+ '<span class="m-label -margin-top">photographer:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">editor:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">book designer:</span> yinxilu</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">A Space Odyssey is a series of photography along my architectural journey this year. Those photographies each unfolds the unseen atmosphere of a certain space, focusing on the unabashed emotion and a tension between strangeness and familiarity. Those seemingly private moments of a public or semi- open space evoke my attachment of the space, the abstractions in this photography reveal my interest and studies in colours and light.' + '</p>' + '</div></div>',
  },
    {
        pic: '/images/programs/project b004_love has to be reinvented/cover page.jpg',
        detailPic: ['/images/programs/project b004_love has to be reinvented/cover page.jpg', '/images/programs/project b004_love has to be reinvented/RFR15.jpg', '/images/programs/project b004_love has to be reinvented/RFR16.jpg', '/images/programs/project b004_love has to be reinvented/RFR20.jpg', '/images/programs/project b004_love has to be reinvented/RFR22.jpg', '/images/programs/project b004_love has to be reinvented/RFR23.jpg', '/images/programs/project b004_love has to be reinvented/RFR26.jpg'],
        rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">Love Has To Be Reinvented</h1> <p class="m-member__text">' + 'self-published photo book </p> <p class="m-member__text">'+ '<span class="m-label -margin-top">time:</span> 2019</p><p class="m-member__text">' + '<span class="m-label">location:</span> China</p><p class="m-member__text">'+ '<span class="m-label -margin-top">photographer:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">editor:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">book designer:</span> yinxilu</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">Love Has To Be Reinvented is a photography series about one of the persons who brought me to this world, these private scenes reveal my observations of her sentiment, her joy, her loss, her confusion, her loneliness and her love. I dare promise you that you wouldn’t have another similar chance to see and capture such spectacles as if you are watching your own dissection, with this (un)natural and constant bond and a truly tenderness. "Love alone is more to be feared than all shipwrecks," Fénelon says in his Télémaque, when family became a laboratory of sentiment and was also about to become the foundation of the social connection, I am curious that whether love will be reformed by themselves, whether the documentation of these natural sentiments will be re- awakened and repopulated.' + '</p>' + '</div></div>',
  },
    {
        pic: '/images/programs/project b005_Atlas/cover.jpg',
        detailPic: ['/images/programs/project b005_Atlas/cover.jpg', '/images/programs/project b005_Atlas/01.jpg'],
        rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">Atlas</h1> <p class="m-member__text">' + 'self-published photo book </p> <p class="m-member__text">'+ '<span class="m-label -margin-top">time:</span> 2019</p><p class="m-member__text">' + '<span class="m-label">location:</span> Rotterdam, The Netherlands</p><p class="m-member__text">'+ '<span class="m-label -margin-top">photographer:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">editor:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">book designer:</span> yinxilu</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">Atlas is a photography portfolio for atelier Yinxi, it summarised the recent works for the spatial representation and documentation.' + '</p>' + '</div></div>',
  },
    {
        pic: '/images/programs/project pb006_a room of one\'s own/cover.jpg',
        detailPic: ['/images/programs/project pb006_a room of one\'s own/cover.jpg', '/images/programs/project pb006_a room of one\'s own/01.JPG', '/images/programs/project pb006_a room of one\'s own/02.JPG', '/images/programs/project pb006_a room of one\'s own/03.JPG', '/images/programs/project pb006_a room of one\'s own/04.JPG', '/images/programs/project pb006_a room of one\'s own/05.JPG', '/images/programs/project pb006_a room of one\'s own/06.JPG'],
        rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">Room of One\'s Own</h1>  <p class="m-member__text">' + '2019/03/01-2019/04/02</p> <p class="m-member__text">' + 'drawing series </p> <p class="m-member__text">' + '<span class="m-label -margin-top">drawing:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">book designer:</span> yinxilu</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">This photobook is about a watercolor painting book about captured time in a room of a girl on her own.' + '</p>' + '</div></div>',
  },
    {
        pic: '/images/programs/project making_Mountain-shape Chopstick Holder/01.jpg',
        detailPic: ['/images/programs/project making_Mountain-shape Chopstick Holder/01.jpg'],
           rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font"> Mountain-shape Chopstick Holder </h1> <p class="m-member__text">' + 'wood craftsmanship </p> <p class="m-member__text">'+ '<span class="m-label -margin-top">time:</span> 2016-2020 </p><p class="m-member__text">' + '<span class="m-label">location:</span> Wuhan, China</p><p class="m-member__text">'+ '<span class="m-label -margin-top">designer:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">craftsman:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">photographer:</span> yinxilu</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">Atlas is a photography portfolio for atelier Yinxi, it summarised the recent works for the spatial representation and documentation.' + '</p>' + '</div></div>',
  },
]

//archive数据
var archivesData = [
    {
        pic: '/images/archives/archive b001_Delft Reconnaissance/01.jpg',
        detailPic: ['/images/archives/archive b001_Delft Reconnaissance/01.jpg', '/images/archives/archive b001_Delft Reconnaissance/02.jpg', '/images/archives/archive b001_Delft Reconnaissance/03.jpg', '/images/archives/archive b001_Delft Reconnaissance/04.jpg'],
        rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">Delft Reconnaissance</h1>  <p class="m-member__text">' + 'self-published photo book</p> <p class="m-member__text">' + ' 2017-Delft, The Netherlands</p> <p class="m-member__text">' + '<span class="m-label -margin-top">photographer:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">editor:</span> yinxilu</p><p class="m-member__text">' + '<span class="m-label">book designer:</span> yinxilu</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">“Delft Reconnaissance: A Visual Survey of a Small City” : In this project we are asked to carefully determine subjects to be photographed from the centre of the city to its periphery. My portfolio contains 25 images of the district I have surveyed - Schieweg, and 5 images of Binnestad of Delft. And my focus is on the interiors of this industrial zone which also includes several public facilities cultural recreation space. Scenes have been carefully chosen to tell the details of the activities might happen in the industrial area, and the ambiguity and the soft light reveal an incongruity between the atmosphere of the photo and its industrial background.' + '</p>' + '</div></div>',
        rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">Delft Reconnaissance</h1>  <p class="m-member__text">' + 'collective photo book</p> <p class="m-member__text">' + ' 2017 / Delft, The Netherlands</p> <p class="m-member__text">' + '<span class="m-label -margin-top">photographer:</span> Yinxi Lu</p><p class="m-member__text">' + '<span class="m-label">tutor:</span> David Grandorge</p><p class="m-member__text">' + '<span class="m-label">tutor:</span> Sam de Vocht</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">“Delft Reconnaissance: A Visual Survey of a Small City” : In this project we are asked to carefully determine subjects to be photographed from the centre of the city to its periphery. My portfolio contains 25 images of the district I have surveyed - Schieweg, and 5 images of Binnestad of Delft. And my focus is on the interiors of this industrial zone which also includes several public facilities cultural recreation space. Scenes have been carefully chosen to tell the details of the activities might happen in the industrial area, and the ambiguity and the soft light reveal an incongruity between the atmosphere of the photo and its industrial background.' + '</p>' + '</div></div>',
  },
    {
        pic: '/images/archives/archive b002_Encounter Barbican/cover page.jpg',
        detailPic: ['/images/archives/archive b002_Encounter Barbican/cover page.jpg', '/images/archives/archive b002_Encounter Barbican/Archi-26.JPG', '/images/archives/archive b002_Encounter Barbican/Archi-27.JPG', '/images/archives/archive b002_Encounter Barbican/Archi-28.JPG', '/images/archives/archive b002_Encounter Barbican/Archi-29.JPG', '/images/archives/archive b002_Encounter Barbican/Archi-30.JPG', '/images/archives/archive b002_Encounter Barbican/Archi-31.JPG'],
         rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">Encounter Barbican</h1>  <p class="m-member__text">' + 'self-published photo book</p> <p class="m-member__text">' + ' 2018 / London, England</p> <p class="m-member__text">' + '<span class="m-label -margin-top">photographer:</span> Yinxi Lu</p><p class="m-member__text">' + '<span class="m-label">editor:</span> Yinxi Lu</p><p class="m-member__text">' + '<span class="m-label">book designer:</span> Yinxi Lu</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">“Encounter Barbican” is a series of a self-published photographic essay I made for my journey in London and for my graduation thesis of designing a concert hall on the site of Barbican. Each image captures the fragment of the journey while I walking towards Barbican Centre in the City of London. I tried to understand the urban context and the city through these fragments. As Aldo Rossi says: “One can say that the city itself is the collective memory of its people, and like memory, it is associated with objects and places. The city is the locus of collective memory. This relationship between the locus and the citizenry then becomes the city’s predominant image, both of architecture and of landscape, and as certain artefacts become part of its memory, new ones emerge.”' + '</p>' + '</div></div>',
  },
    {
        pic: '/images/archives/archive a001_Infrastructure Playscape/01.jpg',
        detailPic: ['/images/archives/archive a001_Infrastructure Playscape/01.jpg', '/images/archives/archive a001_Infrastructure Playscape/02.jpg', '/images/archives/archive a001_Infrastructure Playscape/03.jpg', '/images/archives/archive a001_Infrastructure Playscape/04.jpg'],
           rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">Infrastructure Playscape</h1>  <p class="m-member__text">' + 'landscape infrastructure</p> <p class="m-member__text">' + ' 2013 / Madrid, Spain</p> <p class="m-member__text">' + '<span class="m-label -margin-top">designer:</span> Yichi Wang</p><p class="m-member__text">' + '<span class="m-label">visualization:</span> Yichi Wang</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">A space for playing is not just an object or a plastic device, its a matter of atmosphere. Forest, a perfect playground, both environment and object compose the playground atmosphere. The project is a concrete cone designed as a single stand- ing element or an entire surface. The element provides both the environment and city installation that results into a new playscape atmosphere, which provides 3 levels of interaction: The ground, the cone and the canopy.' + '</p>' + '</div></div>',
  },
    {
        pic: '/images/archives/archive a002_Urban Dichotomy/01.png',
        detailPic: ['/images/archives/archive a002_Urban Dichotomy/01.png', '/images/archives/archive a002_Urban Dichotomy/02.png'],
      rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">Urban Dichotomy</h1>  <p class="m-member__text">' + 'landscape design</p> <p class="m-member__text">' + ' 2017 / Copenhagen, Denmark</p> <p class="m-member__text">' + '<span class="m-label -margin-top">designer:</span> Fred Zhang</p><p class="m-member__text">' + '<span class="m-label">editor:</span> Yinxi Lu</p><p class="m-member__text -margin-top">' + '<span class="underline">about</span>  </p><p class="m-member__text">The plan on page shows the proposal for the 2030 plan of Refshaleøen. The site has been divided which creates a built up urban area to the west and a natural recreational area to the east. The urban area is divid- ed by canals, generating different spatial experiences while the natural area has been divided into an industrial park that gradually evolves into a wetland to the north-east of the site. The plan on the next page shows the long term proposal. In the future the surrounding seawater is used to create small islands, connected by bridges. This wetland inspired area offers flooding of the entire area, in case of the sea–level rising.' + '</p>' + '</div></div>',
  },
]

//member数据
var memberObject = {
    'yinxi-lu': {
        class: 'yinxi-lu',
        name: 'yinxi lu',
        image: '/images/members/yinxi.jpg',
        bgcolor: '#40ae49',
        rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">Yinxi Lu </h1> <p class="m-member__title">-architect / visual designer / photographer </p> <p class="m-member__text">' +
            '-website: <a href="https://www.yinxilu.com/" target="_blank">www.yinxilu.com</a></p> <p class="m-member__text">' +
            '-contact: <a href="mailto:atelier@yinxilu.com ">atelier@yinxilu.com </a></p> <p class="m-member__text -margin-top">' +
            '-location: <a href="javascript:void(0)"> Rotterdam, The Netherlands </a>' +
            '</p>' +
            '<p class="m-member__text -margin-top">' +
            '-focus:' + 'Yinxi is the founder of atelier yinxi which is a creative initiative based in Rotterdam, specializing in design related to space, in built environment, on paper or in digital world: architecture design, space design and visual design for publication and digital media. She is deeply interested in the spatial concept and the intended role of material and structure.' +
            '</p> </div></div>',
    },
    'fred-zhang': {
        class: 'fred-zhang',
        name: 'fred zhang',
        image: '/images/members/fred.png',
        bgcolor: '#00aeef',
        rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">fred zhang </h1> <p class="m-member__title">-landscape architect / photographer </p> <p class="m-member__text">' +
            '-contact: <a href="mailto:smelescwx@gmail.com">smelescwx@gmail.com  </a></p> <p class="m-member__text -margin-top">' +
            '-location: <a href="javascript:void(0)"> copenhagen, danmark  </a>' +
            '</p>' +
            '<p class="m-member__text -margin-top">' +
            '-focus: Fred is a lead design landscape architect and works on a variety of international landscape ' +
            'and urban space projects across Europe and Asia. Holding a bachelor’s degree in ' +
            'architecture from China and a master’s degree in landscape architecture from Denmark, ' +
            'Fred has a very valuable understanding of how to create cohesive urban solutions where ' +
            'buildings, infrastructure, landscape and city nature fusion in sustainable and holistic design, ' +
            'that increases life quality and strengthens the environment. ' +
            '</p> </div></div>',
    },
    'eki-ong': {
        class: 'eki-ong',
        name: 'eki ong',
        image: '/images/members/eki_ong.jpg',
        bgcolor: '#f9e108',
        rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">eki ong </h1> <p class="m-member__title">-designer / architect / independent curator  </p> <p class="m-member__text">' +
            '-contact: <a href="mailto:yichi.wang88@gmail.com ">yichi.wang88@gmail.com </a></p> <p class="m-member__text -margin-top">' +
            '-location: <a href="javascript:void(0)"> Guangzhou, China  </a>' +
            '</p>' +
            '<p class="m-member__text -margin-top">' +
            '-focus: Yi-Chi Wang, (1988, Taiwan) the founder of ski ong studio, she graduated in architecture in ' +
            'Taipei in 2010, and she completed her master degree in Madrid in 2013. Beside ' +
            'architecture, she’s passionate about food and cuisine as a journey to discover everything ' +
            'related to people, agriculture, cooking, eating and conviviality in different cultures. She is ' +
            'especially fascinated by the rich terroir and cultural influences behind food culture, which ' +
            'she feels architecture is made of, as well. Currently, she lives and works between Beijing, ' +
            'Guangzhou and Taipei. ' +
            '</p> </div></div>',
    },
    'sebastiano-pibia': {
        class: 'sebastiano-pibia',
        name: 'sebastiano pibia',
        image: '/images/members/S_Pibia.jpg',
        bgcolor: '#ecc7de',
        rightDom: '<div class="l-layer__content -tight"><div class="m-member"> <h1 class="m-member__name title-font">sebastiano pibia </h1> <p class="m-member__title">-designer / architect </p> <p class="m-member__text">' +
            '-contact: <a href="mailto:spibia@outlook.com  ">spibia@outlook.com  </a></p> <p class="m-member__text -margin-top">' +
            '-location: <a href="javascript:void(0)"> Rotterdam, The Netherlands  </a>' +
            '</p>' +
            '<p class="m-member__text -margin-top">' +
            'Sebastiano, (1989, Italy) graduated from TU delft with a master degree in architecture. He is fascinated about all designs which build up characters and imaginary worlds in themselves. His conceptual thinking and practical method of developing a creative idea into a feasible individual solution for the design strengthens the ability of the team to built on a deep understanding of its objectives.' +
            '</p> </div></div>',
    },
    
}



//渲染project页面
var renderProgram = function (isProgram) {
    var proramDom = ''
    if (isProgram) {
        for (var i = 0; i < programsData.length; i++) {
            programsData[i].index = i
            proramDom += '<img onload="programImgLoad(' + i + ')" onclick="programPicClick(' + i + ')" src="' + programsData[i].pic + '" alt="Space" class="swiper-slide m-space__photo"></img>'
        }
    } else {
        for (var i = 0; i < archivesData.length; i++) {
            proramDom += '<img onload="archiveImgLoad(' + i + ')" onclick="archivePicClick(' + i + ')" src="' + archivesData[i].pic + '" alt="Space" class="swiper-slide m-space__photo"></img>'
        }
    }

    return proramDom
}

var programPicClick = function (x) {
    window.location.hash = '/program/' + (x + 1)
}

var archivePicClick = function (x) {
    window.location.hash = '/archive/' + (x + 1)
}
var programLoaded = 0

function programImgLoad() {
    programLoaded++
    if (programLoaded === programsData.length) {
        setTimeout(function () {
            var swiper = new Swiper('.program-container', {
                slidesPerView: 'auto',
                initialSlide: 1,
                centeredSlides: true,
                updateOnImagesReady: true,
                spaceBetween: -10,
                observer: true,
                freeMode: true,
                watchSlidesProgress: true,
                observeSlideChildren: true,
                navigation: {
                    nextEl: '.-next',
                    prevEl: '.-prev',
                },
            })
        }, 500)
    }
}



var archiveLoaded = 0

function archiveImgLoad() {
    archiveLoaded++
    if (archiveLoaded === archivesData.length) {
        setTimeout(function () {
            new Swiper('.archive-container', {
                slidesPerView: 'auto',
                initialSlide: 1,
                centeredSlides: true,
                updateOnImagesReady: true,
                spaceBetween: -10,
                observer: true,
                freeMode: true,
                watchSlidesProgress: true,
                observeSlideChildren: true,
                navigation: {
                    nextEl: '.-next',
                    prevEl: '.-prev',
                },
            })
        }, 500)
    }
}


//回退页面
var hashback = function () {
    var hash = window.location.hash.substring(1)
    hasharray = hash.split('/')
    hasharray.pop()
    window.location.hash = hasharray.join('/')
}


//展示programs或archive
var showPrograms = function (isProgram, projectIndex) {
    if (isProgram && !$('.zindexprogram .swiper-container').length) {
        var swiperDomArray = ['<div class="swiper-container program-container swiper-container-3d swiper-container-coverflow">', '<div class="swiper-wrapper">' + renderProgram(isProgram) + '</div>', '</div>']
        $('.zindexprogram .common-layer').append($(swiperDomArray.join('')))
    }
    if (!isProgram && !$('.zindexarchive .swiper-container').length) {
        var swiperDomArray = ['<div class="swiper-container archive-container swiper-container-3d swiper-container-coverflow">', '<div class="swiper-wrapper">' + renderProgram(isProgram) + '</div>', '</div>']
        $('.zindexarchive .common-layer').append($(swiperDomArray.join('')))
    }
    if (projectIndex) {
        showProject(projectIndex - 1, isProgram)
    }
}

//展示member
var showMember = function (name, isInfo) {
    if ($('.' + (isInfo ? 'info-' : 'who-') + name).length) {
        return false
    }
    let memberData = memberObject[name]
    renderMember(memberData, isInfo)
}


//渲染member
var renderMember = function (memberData, isInfo) {
    let domTemplate =
        '<div class="target-wrap rightmodal hash-target info-member ' +
        (isInfo ? 'info-' : 'who-') +
        memberData.class +
        '" data-hash="/' +
        (isInfo ? 'info/' : 'whoweare/') +
        memberData.class +
        '">' +
        '<div class="common-layer">' +
        '<div class="left-layer" ' +
        'style="background-image: url(&quot;' +
        memberData.image +
        '&quot;);">' +
        '</div>' +
        '<div class="right-layer">' +
        '<a href="javascript:hashback()" class="l-layer__close nuxt-link-active"><svg width="41" height="40" viewbox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">' +
        '<g fill-rule="evenodd">' +
        '<path d="M6.372 39.68L40.41 5.645 34.75-.014.715 34.021"></path>' +
        '<path d="M.713 5.645L34.75 39.679l5.66-5.657L6.371-.012"></path>' +
        '</g>' +
        '</svg></a>' +
        '<div class="infomodal-layer-info" style="background-color:' +
        memberData.bgcolor +
        '">' +
        memberData.rightDom +
        '</div></div></div></div>'
    $(domTemplate).appendTo($('.l-page'))
    setTimeout(function () {
        $('.' + (isInfo ? 'info-' : 'who-') + memberData.class).addClass('act')
    }, 100)
}


//展示project项目
var showProject = function (index, isProgram) {
    var projectData
    if (isProgram) {
        if ($('.project-' + index).length) {
            return false
        }
        projectData = programsData[index]
    } else {
        if ($('.archive-' + index).length) {
            return false
        }
        projectData = archivesData[index]
    }
    renderProject(projectData, index, isProgram)
}

var swiperController = '<div class="m-space__slider-controls"><button class="m-space__slider-button -prev" tabindex="0" role="button"' + 'aria-label="Previous slide" aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="43" ' + 'viewBox="0 0 28 43"> ' + '<path fill="none" fill-rule="evenodd" stroke="#000" stroke-width="8" ' + 'd="M25.02 2.904L6.024 21.9l17.95 17.95"></path> ' + '</svg></button> <button class="m-space__slider-button -next" tabindex="0" role="button" aria-label="Next slide" ' + 'aria-disabled="false"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="43" viewBox="0 0 29 43"> ' + '<path fill="none" fill-rule="evenodd" stroke="#000" stroke-width="8" ' + 'd="M3.503 39.85L22.5 20.853 4.55 2.903"></path> ' + '</svg></button></div>'


//渲染project
var renderProject = function (projectData, index, isProgram) {
    var domTemplate =
        '<div class="target-wrap rightmodal project-modal hash-target '+(isProgram ? 'is-project ' : 'is-archive ') +
        (isProgram ? 'project' : 'archive') +
        '-' +
        index +
        '" data-hash="/' +
        (isProgram ? 'program' : 'archive') +
        '/' +
        (index + 1) +
        '">' +
        '<div class="common-layer">' +
        '<div class="left-layer" ' +
        '>' +
        '<div class="swiper-container"><div class="swiper-wrapper">' +
        renderProjectSwiper(projectData, isProgram) +
        '</div></div></div>' +
        '<div class="right-layer">' +
        (projectData.detailPic && projectData.detailPic.length > 1 ? swiperController : '') +
        '<a href="javascript:void(0)" class="l-layer__close project-back nuxt-link-active"><svg width="41" height="40" viewbox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">' +
        '<g fill-rule="evenodd">' +
        '<path d="M6.372 39.68L40.41 5.645 34.75-.014.715 34.021"></path>' +
        '<path d="M.713 5.645L34.75 39.679l5.66-5.657L6.371-.012"></path>' +
        '</g>' +
        '</svg></a>' +
        '<div class="infomodal-layer-info" style="background-color:' +
        (isProgram ? '#40ae49' : '#e3a923') +
        '">' +
        projectData.rightDom +
        '</div><p class="copyright" style="position: absolute;right: 20px;bottom: 10px;font-size: 12px;">copyright © 2020 hexxi.co | All rights reserved</p></div></div></div>'
    $(domTemplate).appendTo($('.l-page'))
    setTimeout(function () {
        $('.' + (isProgram ? 'project' : 'archive') + '-' + index).addClass('act')
        if (projectData.detailPic && projectData.detailPic.length > 1) {
            var swiperContainer = '.' + (isProgram ? 'project' : 'archive') + '-' + index + ' .swiper-container'
            new Swiper(swiperContainer, {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                observer: true,
                navigation: {
                    nextEl: '.-next',
                    prevEl: '.-prev',
                },
            })
        }
    }, 100)
}

var projectBack = function(e){
    window.aa = e;
    console.log(e)
    hashback()
}
//project 左侧swiper
var renderProjectSwiper = function (projectData, isProgram) {
    // style="background-image: url(&quot;'+projectData.pic+'&quot;);"
    var picArray = projectData.detailPic

    var slide = ''
    for (var i = 0; i < picArray.length; i++) {
        slide += '<div class="swiper-slide" style="background-image: url(&quot;' + picArray[i] + '&quot;);"></div>'
    }
    return slide
}

var initHash = function () {
    var firsthash = window.location.hash.substring(1)
    var hasharray = firsthash.split('/')
    var aDiv = document.getElementsByClassName('hash-target')
    if (hasharray.length < 2) {
        document.title = title
        $('.hash-target').removeClass('act')
    }
    if (hasharray.length == 2) {
        document.title = hasharray[1] + ' / ' + title
        for (var i = 0; i < aDiv.length; i++) {
            if (aDiv[i].dataset.hash == firsthash) {
                $(aDiv[i]).addClass('act')
            } else {
                $(aDiv[i]).removeClass('act')
            }
        }
        if (firsthash === '/program') {
            showPrograms(1)
        }
        if (firsthash === '/archive') {
            showPrograms(0)
        }
    } else if (hasharray.length > 2) {
        var pophash = hasharray.pop()
        var firstlevelhash = hasharray.join('/')
        document.title = pophash + ' / ' + title
        for (var i = 0; i < aDiv.length; i++) {
            if (aDiv[i].dataset.hash == firsthash || aDiv[i].dataset.hash === firstlevelhash) {
                $(aDiv[i]).addClass('act')
            } else {
                $(aDiv[i]).removeClass('act')
            }
        }
        if (firstlevelhash === '/program') {
            showPrograms(1, pophash)
        } else if (firstlevelhash === '/archive') {
            showPrograms(0, pophash)
        } else if (firstlevelhash === '/info') {
            showMember(pophash, 1)
        } else if (firstlevelhash === '/whoweare') {
            showMember(pophash)
        }
    }
}

setTimeout(function () {
    initHash()
}, 300)

window.onhashchange = function () //回车更新地址
{
    initHash()
}


$("body").on("click",'.project-back',function(){
    var that = $(this);
    that.closest('.project-modal').remove();
    hashback();
})

const gridDisplay = document.querySelector('#grid')
const score = document.querySelector('#result')

let currentRoom = [
    {
        name: 'tlc',
        img: 'images/topleftcorner.png',
    },
    {
        name: 'ts1',
        img: 'images/topside.png',
    },
    {
        name: 'ts2',
        img: 'images/topside.png',
    },
    {
        name: 'ts3',
        img: 'images/topside.png',
    },
    {
        name: 'ts4',
        img: 'images/topside.png',
    },
    {
        name: 'ts5',
        img: 'images/topside.png',
    },
    {
        name: 'ts6',
        img: 'images/topside.png',
    },
    {
        name: 'ts7',
        img: 'images/topside.png',
    },
    {
        name: 'ts8',
        img: 'images/topside.png',
    },
    {
        name: 'ts9',
        img: 'images/topside.png',
    },
    {
        name: 'ts10',
        img: 'images/topside.png',
    },
    
    {
        name: 'trc',
        img: 'images/toprightcorner.png',
    },
    {
        name: 'ls0',
        img: 'images/leftside.png',
    },
    {
        name: 'floor00',
        img: 'images/flr.png',
    },
    {
        name: 'floor10',
        img: 'images/flr.png',
    },
    {
        name: 'floor20',
        img: 'images/flr.png',
    },
    {
        name: 'floor30',
        img: 'images/flr.png',
    },
    {
        name: 'floor40',
        img: 'images/flr.png',
    },
    {
        name: 'floor50',
        img: 'images/flr.png',
    },
    {
        name: 'floor60',
        img: 'images/flr.png',
    },
    {
        name: 'floor70',
        img: 'images/flr.png',
    },
    {
        name: 'floor80',
        img: 'images/flr.png',
    },
    {
        name: 'floor90',
        img: 'images/flr.png',
    },
    {
        name: 'rs0',
        img: 'images/rightside.png',
    },
    {
        name: 'ls1',
        img: 'images/leftside.png',
    },
    {
        name: 'floor01',
        img: 'images/flr.png',
    },
    {
        name: 'floor11',
        img: 'images/flr.png',
    },
    {
        name: 'floor21',
        img: 'images/flr.png',
    },
    {
        name: 'floor31',
        img: 'images/flr.png',
    },
    {
        name: 'floor41',
        img: 'images/flr.png',
    },
    {
        name: 'floor51',
        img: 'images/flr.png',
    },
    {
        name: 'floor61',
        img: 'images/flr.png',
    },
    {
        name: 'floor71',
        img: 'images/flr.png',
    },
    {
        name: 'floor81',
        img: 'images/flr.png',
    },
    {
        name: 'floor91',
        img: 'images/flr.png',
    },
    {
        name: 'rs1',
        img: 'images/rightside.png',
    },
    {
        name: 'ls2',
        img: 'images/leftside.png',
    },
    {
        name: 'floor02',
        img: 'images/flr.png',
    },
    {
        name: 'floor12',
        img: 'images/flr.png',
    },
    {
        name: 'floor22',
        img: 'images/flr.png',
    },
    {
        name: 'floor32',
        img: 'images/flr.png',
    },
    {
        name: 'floor42',
        img: 'images/flr.png',
    },
    {
        name: 'floor52',
        img: 'images/flr.png',
    },
    {
        name: 'floor62',
        img: 'images/flr.png',
    },
    {
        name: 'floor72',
        img: 'images/flr.png',
    },
    {
        name: 'floor82',
        img: 'images/flr.png',
    },
    {
        name: 'floor92',
        img: 'images/flr.png',
    },
    {
        name: 'rs2',
        img: 'images/rightside.png',
    },
    {
        name: 'ls3',
        img: 'images/leftside.png',
    },
    {
        name: 'floor03',
        img: 'images/flr.png',
    },
    {
        name: 'floor13',
        img: 'images/flr.png',
    },
    {
        name: 'floor23',
        img: 'images/flr.png',
    },
    {
        name: 'floor33',
        img: 'images/flr.png',
    },
    {
        name: 'floor43',
        img: 'images/flr.png',
    },
    {
        name: 'floor53',
        img: 'images/flr.png',
    },
    {
        name: 'floor63',
        img: 'images/flr.png',
    },
    {
        name: 'floor73',
        img: 'images/flr.png',
    },
    {
        name: 'floor83',
        img: 'images/flr.png',
    },
    {
        name: 'floor93',
        img: 'images/flr.png',
    },
    {
        name: 'rs3',
        img: 'images/rightside.png',
    },
    {
        name: 'ls4',
        img: 'images/leftside.png',
    },
    {
        name: 'floor04',
        img: 'images/flr.png',
    },
    {
        name: 'floor14',
        img: 'images/flr.png',
    },
    {
        name: 'floor24',
        img: 'images/flr.png',
    },
    {
        name: 'floor34',
        img: 'images/flr.png',
    },
    {
        name: 'floor44',
        img: 'images/flr.png',
    },
    {
        name: 'floor54',
        img: 'images/flr.png',
    },
    {
        name: 'floor64',
        img: 'images/flr.png',
    },
    {
        name: 'floor74',
        img: 'images/flr.png',
    },
    {
        name: 'floor84',
        img: 'images/flr.png',
    },
    {
        name: 'floor94',
        img: 'images/flr.png',
    },
    {
        name: 'rs4',
        img: 'images/rightside.png',
    },
    {
        name: 'ls5',
        img: 'images/leftside.png',
    },
    {
        name: 'floor05',
        img: 'images/flr.png',
    },
    {
        name: 'floor15',
        img: 'images/flr.png',
    },
    {
        name: 'floor25',
        img: 'images/flr.png',
    },
    {
        name: 'floor35',
        img: 'images/flr.png',
    },
    {
        name: 'floor45',
        img: 'images/flr.png',
    },
    {
        name: 'floor55',
        img: 'images/flr.png',
    },
    {
        name: 'floor65',
        img: 'images/flr.png',
    },
    {
        name: 'floor75',
        img: 'images/flr.png',
    },
    {
        name: 'floor85',
        img: 'images/flr.png',
    },
    {
        name: 'floor95',
        img: 'images/flr.png',
    },
    {
        name: 'rs5',
        img: 'images/rightside.png',
    },
    {
        name: 'ls6',
        img: 'images/leftside.png',
    },
    {
        name: 'floor06',
        img: 'images/flr.png',
    },
    {
        name: 'floor16',
        img: 'images/flr.png',
    },
    {
        name: 'floor26',
        img: 'images/flr.png',
    },
    {
        name: 'floor36',
        img: 'images/flr.png',
    },
    {
        name: 'floor46',
        img: 'images/flr.png',
    },
    {
        name: 'floor56',
        img: 'images/flr.png',
    },
    {
        name: 'floor66',
        img: 'images/flr.png',
    },
    {
        name: 'floor76',
        img: 'images/flr.png',
    },
    {
        name: 'floor86',
        img: 'images/flr.png',
    },
    {
        name: 'floor96',
        img: 'images/flr.png',
    },
    {
        name: 'rs6',
        img: 'images/rightside.png',
    },
    {
        name: 'ls7',
        img: 'images/leftside.png',
    },
    {
        name: 'floor07',
        img: 'images/flr.png',
    },
    {
        name: 'floor17',
        img: 'images/flr.png',
    },
    {
        name: 'floor27',
        img: 'images/flr.png',
    },
    {
        name: 'floor37',
        img: 'images/flr.png',
    },
    {
        name: 'floor47',
        img: 'images/flr.png',
    },
    {
        name: 'floor57',
        img: 'images/flr.png',
    },
    {
        name: 'floor67',
        img: 'images/flr.png',
    },
    {
        name: 'floor77',
        img: 'images/flr.png',
    },
    {
        name: 'floor87',
        img: 'images/flr.png',
    },
    {
        name: 'floor97',
        img: 'images/flr.png',
    },
    {
        name: 'rs7',
        img: 'images/rightside.png',
    },
    {
        name: 'ls8',
        img: 'images/leftside.png',
    },
    {
        name: 'floor08',
        img: 'images/flr.png',
    },
    {
        name: 'floor18',
        img: 'images/flr.png',
    },
    {
        name: 'floor28',
        img: 'images/flr.png',
    },
    {
        name: 'floor38',
        img: 'images/flr.png',
    },
    {
        name: 'floor48',
        img: 'images/flr.png',
    },
    {
        name: 'floor58',
        img: 'images/flr.png',
    },
    {
        name: 'floor68',
        img: 'images/flr.png',
    },
    {
        name: 'floor78',
        img: 'images/flr.png',
    },
    {
        name: 'floor88',
        img: 'images/flr.png',
    },
    {
        name: 'floor98',
        img: 'images/flr.png',
    },
    {
        name: 'rs8',
        img: 'images/rightside.png',
    },
    {
        name: 'ls9',
        img: 'images/leftside.png',
    },
    {
        name: 'floor09',
        img: 'images/flr.png',
    },
    {
        name: 'floor19',
        img: 'images/flr.png',
    },
    {
        name: 'floor29',
        img: 'images/flr.png',
    },
    {
        name: 'floor39',
        img: 'images/flr.png',
    },
    {
        name: 'floor49',
        img: 'images/flr.png',
    },
    {
        name: 'floor59',
        img: 'images/flr.png',
    },
    {
        name: 'floor69',
        img: 'images/flr.png',
    },
    {
        name: 'floor79',
        img: 'images/flr.png',
    },
    {
        name: 'floor89',
        img: 'images/flr.png',
    },
    {
        name: 'floor99',
        img: 'images/flr.png',
    },
    {
        name: 'rs9',
        img: 'images/rightside.png',
    },
    {
        name: 'blc',
        img: 'images/botleftcorner.png',
    },
    {
        name: 'bs0',
        img: 'images/bottomside.png',
    },
    {
        name: 'bs1',
        img: 'images/bottomside.png',
    },
    {
        name: 'bs2',
        img: 'images/bottomside.png',
    },
    {
        name: 'bs3',
        img: 'images/bottomside.png',
    },
    {
        name: 'bs4',
        img: 'images/bottomside.png',
    },
    {
        name: 'bs5',
        img: 'images/bottomside.png',
    },
    {
        name: 'bs6',
        img: 'images/bottomside.png',
    },
    {
        name: 'bs7',
        img: 'images/bottomside.png',
    },
    {
        name: 'bs8',
        img: 'images/bottomside.png',
    },
    {
        name: 'bs9',
        img: 'images/bottomside.png',
    },
    {
        name: 'brc',
        img: 'images/botrightcorner.png',
    },
]


function genCurrentRoom () {
    for (let i=0; i<currentRoom.length; i++){
        const space = document.createElement('img')
        console.log(currentRoom[i])
        space.setAttribute('src', currentRoom[i].img)
        space.setAttribute('data-id', i)
        //space.addEventListener('click', flipCard)
        console.log(space, i)
        gridDisplay.appendChild(space)
    }
        
        //gridDisplay.push(currentRoom)   
    
}
genCurrentRoom()





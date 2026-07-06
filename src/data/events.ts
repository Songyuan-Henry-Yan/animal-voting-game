import {CampaignEvent} from '../types/game';
export const campaignEvents:CampaignEvent[]=[
{id:'heat',title:'Forest Heat Wave',icon:'☀️',text:'A hot week dries up part of the pond. Animals start asking more questions about trees, shade, and clean water.',issueBoosts:{river:2},axisBoosts:{buildEnvironment:1}},
{id:'snackjump',title:'Snack Prices Jump',icon:'🍪',text:'Cookies, nuts, and fish crackers cost more than last week. Families want to know what candidates will do.',issueBoosts:{prices:2,budget:1}},
{id:'robotwrong',title:'Robot Parrot Gets It Wrong',icon:'🤖',text:'The Robot Parrot gives three wrong homework answers in one day. Owl reporters ask for better checking rules.',issueBoosts:{robot:2},axisBoosts:{promiseFacts:1}},
{id:'bearads',title:'Big Bear Buys Megaphone Ads',icon:'📣',text:'A wealthy bear buys very loud megaphone ads. Some animals hear the message; others cover their ears.',issueBoosts:{ads:2},visibilityDelta:.25},
{id:'traffic',title:'Berry Bridge Traffic Jam',icon:'🌉',text:'The bridge to the neighboring kingdom gets crowded. Animals debate whether to cooperate, build more paths, or set limits.',issueBoosts:{bridge:2}},
{id:'unsafe',title:'Unsafe Toy Argument',icon:'🛝',text:'A playground argument about unsafe toys makes families ask how the forest should prevent future trouble.',issueBoosts:{safety:2}},
{id:'fact',title:'Owl Fact-Check Report',icon:'🦉',text:'The owl reporters compare campaign promises with the acorn budget.',issueBoosts:{robot:1,budget:1},factCheck:true},
{id:'stickers',title:'Sticker Volunteers',icon:'🍃',text:'Friendly volunteers hand out leaf stickers and explain their candidate’s ideas.',issueBoosts:{},trustDelta:.2},
{id:'book',title:'Budget Book Opens',icon:'📖',text:'The forest treasurer opens the budget book so everyone can see how many acorns are available.',issueBoosts:{budget:2},budgetBoost:true},
{id:'neighbors',title:'New Neighbor Families Arrive',icon:'🦔',text:'New animal families arrive at the edge of the forest. Voters ask how the community should welcome them.',issueBoosts:{newcomers:2},axisBoosts:{localWelcome:1}}
];

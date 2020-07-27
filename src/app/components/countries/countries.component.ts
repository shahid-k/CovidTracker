import { Component, OnInit } from '@angular/core';
// import {} from 'mapbox-gl'
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
// function updateMap() {
//   fetch("https://api.covid19api.com/summary").then(response => response.json()).then(res => {
//       res['Countries'].forEach(element => {
//           let country = myMap.get(element['CountryCode'])
//           if (country != null) {
//               var popup = new mapboxgl.Popup({ offset: 20 }).setHTML(
//                   "<div>"+"<h3>"+element['Country']+"</h3>"+"<p>Total Confirmed: "+element['TotalConfirmed']+"&nbsp&nbsp+"+element['NewConfirmed']+"</p>"+"<p>Total Recovered: "+element['TotalRecovered']+"&nbsp&nbsp+"+element['NewRecovered']+"</p>"+"<p>Total Deaths: "+element['TotalDeaths']+"&nbsp&nbsp+"+element['NewDeaths']+"</p>"+"</div>"
//               );
//               new mapboxgl.Marker({
//                   draggable: false
//               }).setLngLat([parseFloat(country.split(',')[1]), parseFloat(country.split(',')[0])]).setPopup(popup).addTo(map);
//           }
//       });
      
//   })
// }


// use of api http://api.worldbank.org/v2/country/in?format=json can also be done
let myMap = new Map()
myMap.set("AD", "42.546245,1.601554");
myMap.set("AE", "23.424076,53.847818");
myMap.set("AF", "33.93911,67.709953");
myMap.set("AG", "17.060816,-61.796428");
myMap.set("AI", "18.220554,-63.068615");
myMap.set("AL", "41.153332,20.168331");
myMap.set("AM", "40.069099,45.038189");
myMap.set("AN", "12.226079,-69.060087");
myMap.set("AO", "-11.202692,17.873887");
myMap.set("AQ", "-75.250973,-0.071389");
myMap.set("AR", "-38.416097,-63.616672");
myMap.set("AS", "-14.270972,-170.132217");
myMap.set("AT", "47.516231,14.550072");
myMap.set("AU", "-25.274398,133.775136");
myMap.set("AW", "12.52111,-69.968338");
myMap.set("AZ", "40.143105,47.576927");
myMap.set("BA", "43.915886,17.679076");
myMap.set("BB", "13.193887,-59.543198");
myMap.set("BD", "23.684994,90.356331");
myMap.set("BE", "50.503887,4.469936");
myMap.set("BF", "12.238333,-1.561593");
myMap.set("BG", "42.733883,25.48583");
myMap.set("BH", "25.930414,50.637772");
myMap.set("BI", "-3.373056,29.918886");
myMap.set("BJ", "9.30769,2.315834");
myMap.set("BM", "32.321384,-64.75737");
myMap.set("BN", "4.535277,114.727669");
myMap.set("BO", "-16.290154,-63.588653");
myMap.set("BR", "-14.235004,-51.92528");
myMap.set("BS", "25.03428,-77.39628");
myMap.set("BT", "27.514162,90.433601");
myMap.set("BV", "-54.423199,3.413194");
myMap.set("BW", "-22.328474,24.684866");
myMap.set("BY", "53.709807,27.953389");
myMap.set("BZ", "17.189877,-88.49765");
myMap.set("CA", "56.130366,-106.346771");
myMap.set("CC", "-12.164165,96.870956");
myMap.set("CD", "-4.038333,21.758664");
myMap.set("CF", "6.611111,20.939444");
myMap.set("CG", "-0.228021,15.827659");
myMap.set("CH", "46.818188,8.227512");
myMap.set("CI", "7.539989,-5.54708");
myMap.set("CK", "-21.236736,-159.777671");
myMap.set("CL", "-35.675147,-71.542969");
myMap.set("CM", "7.369722,12.354722");
myMap.set("CN", "35.86166,104.195397");
myMap.set("CO", "4.570868,-74.297333");
myMap.set("CR", "9.748917,-83.753428");
myMap.set("CU", "21.521757,-77.781167");
myMap.set("CV", "16.002082,-24.013197");
myMap.set("CX", "-10.447525,105.690449");
myMap.set("CY", "35.126413,33.429859");
myMap.set("CZ", "49.817492,15.472962");
myMap.set("DE", "51.165691,10.451526");
myMap.set("DJ", "11.825138,42.590275");
myMap.set("DK", "56.26392,9.501785");
myMap.set("DM", "15.414999,-61.370976");
myMap.set("DO", "18.735693,-70.162651");
myMap.set("DZ", "28.033886,1.659626");
myMap.set("EC", "-1.831239,-78.183406");
myMap.set("EE", "58.595272,25.013607");
myMap.set("EG", "26.820553,30.802498");
myMap.set("EH", "24.215527,-12.885834");
myMap.set("ER", "15.179384,39.782334");
myMap.set("ES", "40.463667,-3.74922");
myMap.set("ET", "9.145,40.489673");
myMap.set("FI", "61.92411,25.748151");
myMap.set("FJ", "-16.578193,179.414413");
myMap.set("FK", "-51.796253,-59.523613");
myMap.set("FM", "7.425554,150.550812");
myMap.set("FO", "61.892635,-6.911806");
myMap.set("FR", "46.227638,2.213749");
myMap.set("GA", "-0.803689,11.609444");
myMap.set("GB", "55.378051,-3.435973");
myMap.set("GD", "12.262776,-61.604171");
myMap.set("GE", "42.315407,43.356892");
myMap.set("GF", "3.933889,-53.125782");
myMap.set("GG", "49.465691,-2.585278");
myMap.set("GH", "7.946527,-1.023194");
myMap.set("GI", "36.137741,-5.345374");
myMap.set("GL", "71.706936,-42.604303");
myMap.set("GM", "13.443182,-15.310139");
myMap.set("GN", "9.945587,-9.696645");
myMap.set("GP", "16.995971,-62.067641");
myMap.set("GQ", "1.650801,10.267895");
myMap.set("GR", "39.074208,21.824312");
myMap.set("GS", "-54.429579,-36.587909");
myMap.set("GT", "15.783471,-90.230759");
myMap.set("GU", "13.444304,144.793731");
myMap.set("GW", "11.803749,-15.180413");
myMap.set("GY", "4.860416,-58.93018");
myMap.set("GZ", "31.354676,34.308825");
myMap.set("HK", "22.396428,114.109497");
myMap.set("HM", "-53.08181,73.504158");
myMap.set("HN", "15.199999,-86.241905");
myMap.set("HR", "45.1,15.2");
myMap.set("HT", "18.971187,-72.285215");
myMap.set("HU", "47.162494,19.503304");
myMap.set("ID", "-0.789275,113.921327");
myMap.set("IE", "53.41291,-8.24389");
myMap.set("IL", "31.046051,34.851612");
myMap.set("IM", "54.236107,-4.548056");
myMap.set("IN", "20.593684,78.96288");
myMap.set("IO", "-6.343194,71.876519");
myMap.set("IQ", "33.223191,43.679291");
myMap.set("IR", "32.427908,53.688046");
myMap.set("IS", "64.963051,-19.020835");
myMap.set("IT", "41.87194,12.56738");
myMap.set("JE", "49.214439,-2.13125");
myMap.set("JM", "18.109581,-77.297508");
myMap.set("JO", "30.585164,36.238414");
myMap.set("JP", "36.204824,138.252924");
myMap.set("KE", "-0.023559,37.906193");
myMap.set("KG", "41.20438,74.766098");
myMap.set("KH", "12.565679,104.990963");
myMap.set("KI", "-3.370417,-168.734039");
myMap.set("KM", "-11.875001,43.872219");
myMap.set("KN", "17.357822,-62.782998");
myMap.set("KP", "40.339852,127.510093");
myMap.set("KR", "35.907757,127.766922");
myMap.set("KW", "29.31166,47.481766");
myMap.set("KY", "19.513469,-80.566956");
myMap.set("KZ", "48.019573,66.923684");
myMap.set("LA", "19.85627,102.495496");
myMap.set("LB", "33.854721,35.862285");
myMap.set("LC", "13.909444,-60.978893");
myMap.set("LI", "47.166,9.555373");
myMap.set("LK", "7.873054,80.771797");
myMap.set("LR", "6.428055,-9.429499");
myMap.set("LS", "-29.609988,28.233608");
myMap.set("LT", "55.169438,23.881275");
myMap.set("LU", "49.815273,6.129583");
myMap.set("LV", "56.879635,24.603189");
myMap.set("LY", "26.3351,17.228331");
myMap.set("MA", "31.791702,-7.09262");
myMap.set("MC", "43.750298,7.412841");
myMap.set("MD", "47.411631,28.369885");
myMap.set("ME", "42.708678,19.37439");
myMap.set("MG", "-18.766947,46.869107");
myMap.set("MH", "7.131474,171.184478");
myMap.set("MK", "41.608635,21.745275");
myMap.set("ML", "17.570692,-3.996166");
myMap.set("MM", "21.913965,95.956223");
myMap.set("MN", "46.862496,103.846656");
myMap.set("MO", "22.198745,113.543873");
myMap.set("MP", "17.33083,145.38469");
myMap.set("MQ", "14.641528,-61.024174");
myMap.set("MR", "21.00789,-10.940835");
myMap.set("MS", "16.742498,-62.187366");
myMap.set("MT", "35.937496,14.375416");
myMap.set("MU", "-20.348404,57.552152");
myMap.set("MV", "3.202778,73.22068");
myMap.set("MW", "-13.254308,34.301525");
myMap.set("MX", "23.634501,-102.552784");
myMap.set("MY", "4.210484,101.975766");
myMap.set("MZ", "-18.665695,35.529562");
myMap.set("NA", "-22.95764,18.49041");
myMap.set("NC", "-20.904305,165.618042");
myMap.set("NE", "17.607789,8.081666");
myMap.set("NF", "-29.040835,167.954712");
myMap.set("NG", "9.081999,8.675277");
myMap.set("NI", "12.865416,-85.207229");
myMap.set("NL", "52.132633,5.291266");
myMap.set("NO", "60.472024,8.468946");
myMap.set("NP", "28.394857,84.124008");
myMap.set("NR", "-0.522778,166.931503");
myMap.set("NU", "-19.054445,-169.867233");
myMap.set("NZ", "-40.900557,174.885971");
myMap.set("OM", "21.512583,55.923255");
myMap.set("PA", "8.537981,-80.782127");
myMap.set("PE", "-9.189967,-75.015152");
myMap.set("PF", "-17.679742,-149.406843");
myMap.set("PG", "-6.314993,143.95555");
myMap.set("PH", "12.879721,121.774017");
myMap.set("PK", "30.375321,69.345116");
myMap.set("PL", "51.919438,19.145136");
myMap.set("PM", "46.941936,-56.27111");
myMap.set("PN", "-24.703615,-127.439308");
myMap.set("PR", "18.220833,-66.590149");
myMap.set("PS", "31.952162,35.233154");
myMap.set("PT", "39.399872,-8.224454");
myMap.set("PW", "7.51498,134.58252");
myMap.set("PY", "-23.442503,-58.443832");
myMap.set("QA", "25.354826,51.183884");
myMap.set("RE", "-21.115141,55.536384");
myMap.set("RO", "45.943161,24.96676");
myMap.set("RS", "44.016521,21.005859");
myMap.set("RU", "61.52401,105.318756");
myMap.set("RW", "-1.940278,29.873888");
myMap.set("SA", "23.885942,45.079162");
myMap.set("SB", "-9.64571,160.156194");
myMap.set("SC", "-4.679574,55.491977");
myMap.set("SD", "12.862807,30.217636");
myMap.set("SE", "60.128161,18.643501");
myMap.set("SG", "1.352083,103.819836");
myMap.set("SH", "-24.143474,-10.030696");
myMap.set("SI", "46.151241,14.995463");
myMap.set("SJ", "77.553604,23.670272");
myMap.set("SK", "48.669026,19.699024");
myMap.set("SL", "8.460555,-11.779889");
myMap.set("SM", "43.94236,12.457777");
myMap.set("SN", "14.497401,-14.452362");
myMap.set("SO", "5.152149,46.199616");
myMap.set("SR", "3.919305,-56.027783");
myMap.set("ST", "0.18636,6.613081");
myMap.set("SV", "13.794185,-88.89653");
myMap.set("SY", "34.802075,38.996815");
myMap.set("SZ", "-26.522503,31.465866");
myMap.set("TC", "21.694025,-71.797928");
myMap.set("TD", "15.454166,18.732207");
myMap.set("TF", "-49.280366,69.348557");
myMap.set("TG", "8.619543,0.824782");
myMap.set("TH", "15.870032,100.992541");
myMap.set("TJ", "38.861034,71.276093");
myMap.set("TK", "-8.967363,-171.855881");
myMap.set("TL", "-8.874217,125.727539");
myMap.set("TM", "38.969719,59.556278");
myMap.set("TN", "33.886917,9.537499");
myMap.set("TO", "-21.178986,-175.198242");
myMap.set("TR", "38.963745,35.243322");
myMap.set("TT", "10.691803,-61.222503");
myMap.set("TV", "-7.109535,177.64933");
myMap.set("TW", "23.69781,120.960515");
myMap.set("TZ", "-6.369028,34.888822");
myMap.set("UA", "48.379433,31.16558");
myMap.set("UG", "1.373333,32.290275");
myMap.set("US", "37.09024,-95.712891");
myMap.set("UY", "-32.522779,-55.765835");
myMap.set("UZ", "41.377491,64.585262");
myMap.set("VA", "41.902916,12.453389");
myMap.set("VC", "12.984305,-61.287228");
myMap.set("VE", "6.42375,-66.58973");
myMap.set("VG", "18.420695,-64.639968");
myMap.set("VI", "18.335765,-64.896335");
myMap.set("VN", "14.058324,108.277199");
myMap.set("VU", "-15.376706,166.959158");
myMap.set("WF", "-13.768752,-177.156097");
myMap.set("WS", "-13.759029,-172.104629");
myMap.set("XK", "42.602636,20.902977");
myMap.set("YE", "15.552727,48.516388");
myMap.set("YT", "-12.8275,45.166244");
myMap.set("ZA", "-30.559482,22.937506");
myMap.set("ZM", "-13.133897,27.849332");
myMap.set("ZW", "-19.015438,29.154857");

// console.log(myMap);

  }

}

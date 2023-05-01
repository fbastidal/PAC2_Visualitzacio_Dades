var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
        "id": "1",
        "name": "Orchestra",
        "children": [
            { "id": "2",
              "name": "Classical orchestra",
              "children": [
                { "id": "3",
                  "name": "Brass",
                  "children": [
                  { "id": "4",
                    "name": "French Horns: 4" }, 
                  { "id": "5",
                    "name": "Trumpets: 2" }]
                },
                { "id": "6",
                  "name": "Percusion",
                  "children": [
                    { "id": "7",
                      "name": "Timpani: 2" }]
                },
                { "id": "8",
                  "name": "Strings",
                  "children": [
                    { "id": "9",
                      "name": "Cellos: 2" },
                    { "id": "10",
                      "name": "Double basses: 1" },
                    { "id": "11",
                      "name": "Violas: 4" },
                    { "id": "12",
                      "name": "Violins 1: 6" }]
                },
                { "id": "13",
                  "name": "WoodWinds",
                  "children": [
                    { "id": "14",
                      "name": "Bassoons: 2" },
                    { "id": "15",
                      "name": "Clarinets: 2" },
                    { "id": "16",
                      "name": "Flutes: 2" },
                    { "id": "17",
                      "name": "Oboes: 2" }]
                }]
            },
            { "id": "18",
              "name": "Early Romantic Orchestra",
              "children": [
                { "id": "19",
                  "name": "Brass",
                  "children": [
                  { "id": "20",
                    "name": "French Horns: 4" }, 
                  { "id": "21",
                    "name": "Trombones: 3" },
                  { "id": "21.2",
                    "name": "Trumpets: 2" },
                  { "id": "21.3",
                    "name": "Tubas: 1" }]
                },
                { "id": "22",
                  "name": "Percusion",
                  "children": [
                    { "id": "22.1",
                      "name": "Bass Drum: 1" },
                    { "id": "22.2",
                      "name": "Cymbals: 1" },
                    { "id": "22.3",
                      "name": "Glockenspiel: 1" },
                    { "id": "22.4",
                      "name": "Snare Drum: 1" },
                    { "id": "22.5",
                      "name": "Tambourine: 1" },
                    { "id": "22.6",
                      "name": "Timpani: 3" },
                    { "id": "22.7",
                      "name": "Triangle: 1" }]
                },
                { "id": "24",
                  "name": "Strings",
                  "children": [
                    { "id": "25",
                      "name": "Cellos: 8" },
                    { "id": "26",
                      "name": "Double basses: 6" },
                    { "id": "26.2",
                      "name": "Harps: 1" },
                    { "id": "27",
                      "name": "Violas: 10" },
                    { "id": "28",
                      "name": "Violins 1: 14" },
                    { "id": "28.2",
                      "name": "Violins 2: 12" }]
                },
                { "id": "29",
                  "name": "WoodWinds",
                  "children": [
                    { "id": "29.2",
                      "name": "Bass Clarinets: 1" },
                    { "id": "30",
                      "name": "Bassoons: 2" },
                    { "id": "30.1",
                      "name": "Contrabassoons: 1" },
                    { "id": "30.2",
                      "name": "English Horn: 1" },
                    { "id": "31",
                      "name": "Clarinets: 2" },
                    { "id": "32",
                      "name": "Flutes: 2" },
                    { "id": "32.2",
                      "name": "Piccolo: 1" },
                    { "id": "33",
                      "name": "Oboes: 2" }]
                }]
            },
            { "id": "100",
              "name": "Late Romantic Orchestra",
              "children": [
                { "id": "119",
                  "name": "Brass",
                  "children": [
                  { "id": "120",
                    "name": "French Horns: 8" }, 
                  { "id": "121",
                    "name": "Trombones: 4" },
                  { "id": "121.2",
                    "name": "Trumpets: 4" },
                  { "id": "121.4",
                    "name": "Wagner Tubas: 1" },
                  { "id": "121.3",
                    "name": "Tubas: 2" }]
                },
                { "id": "122A",
                  "name": "Keyboards",
                  "children": [
                    { "id": "122A.1",
                      "name": "Celesta: 1" },
                    { "id": "122A.2",
                      "name": "Piano: 1" }]
                },
                { "id": "122",
                  "name": "Percusion",
                  "children": [
                    { "id": "122.1",
                      "name": "Bass Drum: 1" },
                    { "id": "122.21",
                      "name": "Chimes: 1" },
                    { "id": "122.2",
                      "name": "Cymbals: 1" },
                    { "id": "122.3",
                      "name": "Glockenspiel: 1" },
                    { "id": "122.4",
                      "name": "Snare Drum: 1" },
                    { "id": "122.42",
                      "name": "Tam-tam: 1" },
                    { "id": "122.5",
                      "name": "Tambourine: 1" },
                    { "id": "122.6",
                      "name": "Timpani: 4" },
                    { "id": "122.7",
                      "name": "Triangle: 1" },
                    { "id": "122.8",
                      "name": "Xylophone: 1" }]
                },
                { "id": "124",
                  "name": "Strings",
                  "children": [
                    { "id": "125",
                      "name": "Cellos: 10" },
                    { "id": "126",
                      "name": "Double basses: 8" },
                    { "id": "126.2",
                      "name": "Harps: 2" },
                    { "id": "127",
                      "name": "Violas: 12" },
                    { "id": "128",
                      "name": "Violins 1: 16" },
                    { "id": "128.2",
                      "name": "Violins 2: 14" }]
                },
                { "id": "129",
                  "name": "WoodWinds",
                  "children": [
                    { "id": "129.2",
                      "name": "Bass Clarinets: 1" },
                    { "id": "130",
                      "name": "Bassoons: 3" },
                    { "id": "130.1",
                      "name": "Contrabassoons: 1" },
                    { "id": "130.2",
                      "name": "English Horn: 1" },
                    { "id": "131",
                      "name": "Clarinets: 3" },
                    { "id": "132",
                      "name": "Flutes: 3" },
                    { "id": "132.2",
                      "name": "Piccolo: 1" },
                    { "id": "133",
                      "name": "Oboes: 3" }]
                }]
            },
            { "id": "200",
              "name": "Modern Orchestra",
              "children": [
                { "id": "219",
                  "name": "Brass",
                  "children": [
                  { "id": "220",
                    "name": "Baritone Horns: 1" }, 
                  { "id": "220.2",
                    "name": "French Horns: 8" }, 
                  { "id": "221",
                    "name": "Trombones: 6" },
                  { "id": "221.2",
                    "name": "Trumpets: 6" },
                  { "id": "221.3",
                    "name": "Tubas: 2" }]
                },
                { "id": "222A",
                  "name": "Keyboards",
                  "children": [
                    { "id": "222A.1",
                      "name": "Celesta: 1" },
                    { "id": "222A.2",
                      "name": "Piano: 1" },
                    { "id": "222A.3",
                      "name": "Pipe organ: 1" }]
                },
                { "id": "222",
                  "name": "Percusion",
                  "children": [
                    { "id": "222.1",
                      "name": "Bass Drum: 1" },
                    { "id": "222.2",
                      "name": "Cymbals: 1" },
                    { "id": "222.3",
                      "name": "Glockenspiel: 1" },
                    { "id": "222.32",
                      "name": "Marimba: 1" },
                    { "id": "222.4",
                      "name": "Snare Drum: 1" },
                    { "id": "222.42",
                      "name": "Tam-tam: 1" },
                    { "id": "222.5",
                      "name": "Tambourine: 1" },
                    { "id": "222.52",
                      "name": "Tenor drum: 1" },
                    { "id": "222.6",
                      "name": "Timpani: 4" },
                    { "id": "222.7",
                      "name": "Triangle: 1" },
                    { "id": "222.71",
                      "name": "Tubular bells: 1" },
                    { "id": "222.72",
                      "name": "Vibraphone: 1" },
                    { "id": "222.73",
                      "name": "Wood block: 1" },
                    { "id": "222.8",
                      "name": "Xylophone: 1" }]
                },
                { "id": "224",
                  "name": "Strings",
                  "children": [
                    { "id": "225",
                      "name": "Cellos: 12" },
                    { "id": "226",
                      "name": "Double basses: 10" },
                    { "id": "226.2",
                      "name": "Harps: 2" },
                    { "id": "227",
                      "name": "Violas: 14" },
                    { "id": "228",
                      "name": "Violins 1: 18" },
                    { "id": "228.2",
                      "name": "Violins 2: 16" }]
                },
                { "id": "229",
                  "name": "WoodWinds",
                  "children": [
                    { "id": "230",
                      "name": "Bassoons: 4" },
                    { "id": "231",
                      "name": "Clarinets: 4" },
                    { "id": "232",
                      "name": "Flutes: 4" },
                    { "id": "233",
                      "name": "Oboes: 4" }]
                }]
            }]
    };
    //end
    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth - 50, h = infovis.offsetHeight - 50;
    
    //init Hypertree
    var ht = new $jit.Hypertree({
      //id of the visualization container
      injectInto: 'infovis',
      //canvas width and height
      width: w,
      height: h,
      //Change node and edge styles such as
      //color, width and dimensions.
      Node: {
          dim: 9,
          color: "#f00"
      },
      Edge: {
          lineWidth: 2,
          color: "#088"
      },
      onBeforeCompute: function(node){
          Log.write("centering");
      },
      //Attach event handlers and add text to the
      //labels. This method is only triggered on label
      //creation
      onCreateLabel: function(domElement, node){
          domElement.innerHTML = node.name;
          $jit.util.addEvent(domElement, 'click', function () {
              ht.onClick(node.id, {
                  onComplete: function() {
                      ht.controller.onComplete();
                  }
              });
          });
      },
      //Change node styles when labels are placed
      //or moved.
      onPlaceLabel: function(domElement, node){
          var style = domElement.style;
          style.display = '';
          style.cursor = 'pointer';
          if (node._depth <= 1) {
              style.fontSize = "0.8em";
              style.color = "#ddd";

          } else if(node._depth == 2){
              style.fontSize = "0.7em";
              style.color = "#555";

          } else {
              style.display = 'none';
          }

          var left = parseInt(style.left);
          var w = domElement.offsetWidth;
          style.left = (left - w / 2) + 'px';
      },
      
      onComplete: function(){
          Log.write("done");
          
          //Build the right column relations list.
          //This is done by collecting the information (stored in the data property) 
          //for all the nodes adjacent to the centered node.
          var node = ht.graph.getClosestNodeToOrigin("current");
          var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
          html += "<ul>";
          node.eachAdjacency(function(adj){
              var child = adj.nodeTo;
              if (child.data) {
                  var rel = (child.data.band == node.name) ? child.data.relation : node.data.relation;
                  html += "<li>" + child.name + " " + "<div class=\"relation\">(relation: " + rel + ")</div></li>";
              }
          });
          html += "</ul>";
          $jit.id('inner-details').innerHTML = html;
      }
    });
    //load JSON data.
    ht.loadJSON(json);
    //compute positions and plot.
    ht.refresh();
    //end
    ht.controller.onComplete();
}

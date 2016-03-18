

function parseXML (link){	
if (window.DOMParser)
  {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(link,"text/xml");
  }
else // Internet Explorer
  {
    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async=false;
    xmlDoc.loadXML(link);
  }
}
var obimids = {
  'assets/images/mickeyMouseJedi2.png': ['boy1', 'boyto','boytoo'],
  'assets/images/goofyVader2.png': ['girl1', 'girlto','girltoo'],
  'assets/images/donaldMaul2.png': ['dog1', 'dogto','dogtoo'],
  'assets/images/minneyLeia2.png': ['mouse1', 'mouseto','mousetoo']
  // 'assets/images/stitchJedi2.png': ['fith1', 'fithto','fithtoo'],
  // 'assets/images/stichSith2.png': ['sith1', 'sithto','sithtoo']
 };

// function executed when click to move the image into the other tag
function whenAddImg() {
  /* Here you can add a code to be executed when the images is added in the other tag */
  return true;
}

         /* From here no need to edit */

// create object that will contain functions to alternate image from a tag to another
var obaImg = new Object();
 // http://coursesweb.net/javascript/
  // put the image in element with ID from "ide"
  obaImg.putImg = function(img, ide) {
    if(document.getElementById(ide)) {
      document.getElementById(ide).innerHTML = '<img src="'+ img+ '" />';
    }
  }

  // empty the element with ID from "elmid", add image in the other element associated to "img"
  obaImg.alternateImg = function(elmid) {
    var img = obaImg.storeim[elmid];
    var addimg = (elmid == obimids[img][0]) ? obimids[img][1] : obimids[img][0];
    document.getElementById(elmid).innerHTML = '';
    obaImg.putImg(img, addimg);

    // function executed after the image is moved into "addimg"
    whenAddImg();
  }
  obaImg.storeim = {};            // store /associate id_elm: image

  // add 'image': 'id_elm1', and 'image': 'id_elm1' in "storeim"
  // add the image in the first tag associated to image
  // register 'onclick' to each element associated with images in "obimids"
  obaImg.regOnclick = function() {
    for(var im in obimids) {
      obaImg.storeim[obimids[im][0]] = im;
      obaImg.storeim[obimids[im][1]] = im;
      obaImg.putImg(im, obimids[im][0]);
      document.getElementById(obimids[im][0]).onclick = function(){ obaImg.alternateImg(this.id); };
      document.getElementById(obimids[im][1]).onclick = function(){ obaImg.alternateImg(this.id); };
    }
  }
obaImg.regOnclick();       // to execute regOnclick()



/*area for moving background*/

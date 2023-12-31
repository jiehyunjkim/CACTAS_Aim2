var H = H || {};
H.version = '0.1';

window.onload = function() {

  // var url = '../data/avf.nii.gz';
  var url = '../data/esus12.nrrd';

  H.V = new H.Viewer( document.getElementById('viewer'), url );
  H.D = new H.Drawer( H.V ); // attach drawer

  H.A = new H.Annotator();
  H.A.setLabelmapPixel = H.D.setLabelmapPixel;
  H.A.getLabelmapPixel = H.D.getLabelmapPixel;
  H.A.getVolumePixel = H.D.getVolumePixel;
  H.A.getVolumeDimensions = H.D.getVolumeDimensions;
  
};

function changeView() {

    var combobox = document.getElementById('view');
    var orientation = combobox.selectedOptions[0].outerText;

    H.V.changeView(orientation);

};



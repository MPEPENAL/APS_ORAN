var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoDark_1 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_COBERTURA_APS_2021_2 = new ol.format.GeoJSON();
var features_COBERTURA_APS_2021_2 = format_COBERTURA_APS_2021_2.readFeatures(json_COBERTURA_APS_2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COBERTURA_APS_2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COBERTURA_APS_2021_2.addFeatures(features_COBERTURA_APS_2021_2);
var lyr_COBERTURA_APS_2021_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COBERTURA_APS_2021_2, 
                style: style_COBERTURA_APS_2021_2,
                interactive: true,
                title: '<img src="styles/legend/COBERTURA_APS_2021_2.png" /> COBERTURA_APS_2021'
            });
var format_Catastro_Aps_Orn_3 = new ol.format.GeoJSON();
var features_Catastro_Aps_Orn_3 = format_Catastro_Aps_Orn_3.readFeatures(json_Catastro_Aps_Orn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catastro_Aps_Orn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catastro_Aps_Orn_3.addFeatures(features_Catastro_Aps_Orn_3);
var lyr_Catastro_Aps_Orn_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Catastro_Aps_Orn_3, 
                style: style_Catastro_Aps_Orn_3,
                interactive: true,
                title: '<img src="styles/legend/Catastro_Aps_Orn_3.png" /> Catastro_Aps_Orán'
            });

lyr_GoogleSatelite_0.setVisible(false);lyr_CartoDark_1.setVisible(true);lyr_COBERTURA_APS_2021_2.setVisible(true);lyr_Catastro_Aps_Orn_3.setVisible(false);
var layersList = [lyr_GoogleSatelite_0,lyr_CartoDark_1,lyr_COBERTURA_APS_2021_2,lyr_Catastro_Aps_Orn_3];
lyr_COBERTURA_APS_2021_2.set('fieldAliases', {'ID': 'ID', 'SECTOR': 'SECTOR', 'SUBSECTOR': 'SUBSECTOR', 'APSDAT_CS': 'APSDAT_CS', 'AGENTE_SAN': 'AGENTE_SAN', });
lyr_Catastro_Aps_Orn_3.set('fieldAliases', {'id': 'id', 'Sector': 'Sector', 'Vivienda': 'Vivienda', 'layer': 'layer', });
lyr_COBERTURA_APS_2021_2.set('fieldImages', {'ID': 'TextEdit', 'SECTOR': 'TextEdit', 'SUBSECTOR': 'TextEdit', 'APSDAT_CS': 'TextEdit', 'AGENTE_SAN': 'TextEdit', });
lyr_Catastro_Aps_Orn_3.set('fieldImages', {'id': 'TextEdit', 'Sector': 'TextEdit', 'Vivienda': 'TextEdit', 'layer': 'TextEdit', });
lyr_COBERTURA_APS_2021_2.set('fieldLabels', {'ID': 'no label', 'SECTOR': 'header label', 'SUBSECTOR': 'no label', 'APSDAT_CS': 'header label', 'AGENTE_SAN': 'header label', });
lyr_Catastro_Aps_Orn_3.set('fieldLabels', {'id': 'no label', 'Sector': 'header label', 'Vivienda': 'header label', 'layer': 'no label', });
lyr_Catastro_Aps_Orn_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
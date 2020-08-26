var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Poblacion_0 = new ol.format.GeoJSON();
var features_Poblacion_0 = format_Poblacion_0.readFeatures(json_Poblacion_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacion_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Poblacion_0.addFeatures(features_Poblacion_0);var lyr_Poblacion_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblacion_0, 
                style: style_Poblacion_0,
                title: '<img src="styles/legend/Poblacion_0.png" /> Poblacion'
            });var format_AlmacenesExistentes_1 = new ol.format.GeoJSON();
var features_AlmacenesExistentes_1 = format_AlmacenesExistentes_1.readFeatures(json_AlmacenesExistentes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlmacenesExistentes_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AlmacenesExistentes_1.addFeatures(features_AlmacenesExistentes_1);var lyr_AlmacenesExistentes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlmacenesExistentes_1, 
                style: style_AlmacenesExistentes_1,
                title: '<img src="styles/legend/AlmacenesExistentes_1.png" /> AlmacenesExistentes'
            });var format_Buffer_2 = new ol.format.GeoJSON();
var features_Buffer_2 = format_Buffer_2.readFeatures(json_Buffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Buffer_2.addFeatures(features_Buffer_2);var lyr_Buffer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffer_2, 
                style: style_Buffer_2,
                title: '<img src="styles/legend/Buffer_2.png" /> Buffer'
            });var format_Rutas_3 = new ol.format.GeoJSON();
var features_Rutas_3 = format_Rutas_3.readFeatures(json_Rutas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rutas_3.addFeatures(features_Rutas_3);var lyr_Rutas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rutas_3, 
                style: style_Rutas_3,
                title: '<img src="styles/legend/Rutas_3.png" /> Rutas'
            });var format_MateriaPrimaPoint_4 = new ol.format.GeoJSON();
var features_MateriaPrimaPoint_4 = format_MateriaPrimaPoint_4.readFeatures(json_MateriaPrimaPoint_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MateriaPrimaPoint_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MateriaPrimaPoint_4.addFeatures(features_MateriaPrimaPoint_4);var lyr_MateriaPrimaPoint_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MateriaPrimaPoint_4, 
                style: style_MateriaPrimaPoint_4,
                title: '<img src="styles/legend/MateriaPrimaPoint_4.png" /> MateriaPrimaPoint'
            });var format_Clientes_5 = new ol.format.GeoJSON();
var features_Clientes_5 = format_Clientes_5.readFeatures(json_Clientes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clientes_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Clientes_5.addFeatures(features_Clientes_5);var lyr_Clientes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clientes_5, 
                style: style_Clientes_5,
                title: '<img src="styles/legend/Clientes_5.png" /> Clientes'
            });

lyr_Poblacion_0.setVisible(true);lyr_AlmacenesExistentes_1.setVisible(true);lyr_Buffer_2.setVisible(true);lyr_Rutas_3.setVisible(true);lyr_MateriaPrimaPoint_4.setVisible(true);lyr_Clientes_5.setVisible(true);
var layersList = [baseLayer,lyr_Poblacion_0,lyr_AlmacenesExistentes_1,lyr_Buffer_2,lyr_Rutas_3,lyr_MateriaPrimaPoint_4,lyr_Clientes_5];
lyr_Poblacion_0.set('fieldAliases', {'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'DPTO_CNMBR': 'DPTO_CNMBR', 'CodMunicip': 'CodMunicip', 'TotalMunic': 'TotalMunic', 'Contributi': 'Contributi', 'Especial': 'Especial', 'Subsidiado': 'Subsidiado', 'NoAfiliado': 'NoAfiliado', 'tot_person': 'tot_person', 'Porcentaje': 'Porcentaje', });
lyr_AlmacenesExistentes_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_MPIO': 'COD_MPIO', 'MPIO_NOMBR': 'MPIO_NOMBR', 'ORIG_FID': 'ORIG_FID', });
lyr_Buffer_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_MPIO': 'COD_MPIO', 'MPIO_NOMBR': 'MPIO_NOMBR', 'ORIG_FID': 'ORIG_FID', });
lyr_Rutas_3.set('fieldAliases', {'length': 'length', 'time': 'time', });
lyr_MateriaPrimaPoint_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'COD_MPIO': 'COD_MPIO', 'MPIO_NOMBR': 'MPIO_NOMBR', 'SHAPE_Leng': 'SHAPE_Leng', 'ORIG_FID': 'ORIG_FID', });
lyr_Clientes_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'COD_MPIO': 'COD_MPIO', 'MPIO_NOMBR': 'MPIO_NOMBR', 'SHAPE_Leng': 'SHAPE_Leng', 'ORIG_FID': 'ORIG_FID', });
lyr_Poblacion_0.set('fieldImages', {'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'CodMunicip': 'TextEdit', 'TotalMunic': 'TextEdit', 'Contributi': 'TextEdit', 'Especial': 'TextEdit', 'Subsidiado': 'TextEdit', 'NoAfiliado': 'TextEdit', 'tot_person': 'TextEdit', 'Porcentaje': 'TextEdit', });
lyr_AlmacenesExistentes_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_MPIO': 'TextEdit', 'MPIO_NOMBR': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Buffer_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_MPIO': 'TextEdit', 'MPIO_NOMBR': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Rutas_3.set('fieldImages', {'length': 'TextEdit', 'time': 'TextEdit', });
lyr_MateriaPrimaPoint_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'COD_MPIO': 'TextEdit', 'MPIO_NOMBR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Clientes_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'COD_MPIO': 'TextEdit', 'MPIO_NOMBR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Poblacion_0.set('fieldLabels', {'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'no label', 'DPTO_CNMBR': 'no label', 'CodMunicip': 'no label', 'TotalMunic': 'no label', 'Contributi': 'no label', 'Especial': 'no label', 'Subsidiado': 'no label', 'NoAfiliado': 'no label', 'tot_person': 'no label', 'Porcentaje': 'no label', });
lyr_AlmacenesExistentes_1.set('fieldLabels', {'OBJECTID': 'no label', 'COD_MPIO': 'no label', 'MPIO_NOMBR': 'no label', 'ORIG_FID': 'no label', });
lyr_Buffer_2.set('fieldLabels', {'OBJECTID': 'no label', 'COD_MPIO': 'no label', 'MPIO_NOMBR': 'no label', 'ORIG_FID': 'no label', });
lyr_Rutas_3.set('fieldLabels', {'length': 'no label', 'time': 'no label', });
lyr_MateriaPrimaPoint_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'COD_MPIO': 'no label', 'MPIO_NOMBR': 'no label', 'SHAPE_Leng': 'no label', 'ORIG_FID': 'no label', });
lyr_Clientes_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'COD_MPIO': 'no label', 'MPIO_NOMBR': 'no label', 'SHAPE_Leng': 'no label', 'ORIG_FID': 'no label', });
lyr_Clientes_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
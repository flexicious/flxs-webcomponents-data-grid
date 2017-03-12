# flxs-webcomponents-data-grid
Webcomponents DataGrid wrapper for flexicious DataGrid
Welcome to HTMLTreeGrid DataGrid

The MOST Powerful DataGrid/DataTable/Tree Table component for Web Components based Line Of Business Applications

Print, Word/Excel Export, Server/Client Paging and Filtering, Customizable Filter Controls and Summary Footers, User Settings, Preference Persistence

Smooth scroll, Nested Hierarchical Tree/child grids, Left/Right Locked Columns, Lazy Load/Virtual Scroll

Visit us at:

http://www.htmltreegrid.com/

Instructions

* git checkout https://github.com/flexicious/flxs-webcomponents-data-grid/
* bower install
* Place your licensed copy of html treegrid (v 3.xx) in lib_private 


In your head section:
```
    <script src="./bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="./bower_components/polymer/polymer.html">
    <link rel="import" href="src/flxs-webcomponents-data-grid.html" />
    <link rel="import" href="src/flxs-webcomponents-data-grid-column.html" />
    <link rel="stylesheet" href="http://www.htmltreegrid.com/demo/flexicious/css/flexicious.css" type="text/css" />
```
And then in your body section:
```
    <template id="tpl" is="dom-bind">
        <flxs-webcomponents-data-grid dataProvider="{{ donuts }}" forcePagerRow="true" enablePaging="true" enableExport="true" style="width:800px;height:400px"
            creationComplete="[[creationComplete]]">
            <flxs-webcomponents-data-grid-column type="checkbox"></flxs-webcomponents-data-grid-column>
            <flxs-webcomponents-data-grid-column dataField="id" headerText="ID" filterComboBoxDataProvider="{{donuts}}"></flxs-webcomponents-data-grid-column>
            <flxs-webcomponents-data-grid-column dataField="type" headerText="Type"></flxs-webcomponents-data-grid-column>
        </flxs-webcomponents-data-grid>
    </template>
```    
 And then in your script section:
```
    <script>
    
         var donuts = [
                            { "id":"5001", "type":"None None None" },
                            { "id":"5002", "type":"Glazed" },
                            { "id":"5005", "type":"Sugar" },
                            { "id":"5007", "type":"Powdered Sugar" },
                            { "id":"5006", "type":"Chocolate with Sprinkles" },
                            { "id":"5003", "type":"Chocolate" },
                            { "id":"5004", "type":"Maple" }
                        ];
    window.addEventListener('dom-change', function () {
      var tpl = document.getElementById('tpl');
      tpl.donuts = donuts;
      tpl.creationComplete =  function(evt){
            alert("Created " + evt.id)
        }
    });
    </script>
    
    

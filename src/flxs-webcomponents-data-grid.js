(function () {
    var template = new flexiciousNmsp.FlexDataGrid();
    var gridPropsAndBehaviors = flexiciousNmsp.SettingsParser.getPropertiesAndBehaviors(template);
    var behaviors = gridPropsAndBehaviors.behaviors, properties = gridPropsAndBehaviors.properties;



    Polymer({
        is: 'flxs-webcomponents-data-grid',
        properties: properties,
        behaviors: [
            behaviors
        ],

        /**
         * @property grid
         * @type FlexiDataGrid
         * @default null
         */
        grid: null,

        /**
         * On create element but not attached to DOM
         */
        created: function () {

        },

        /**
         * On attached element to DOM
         */
        attached: function () {
            if (this.width) {
                this.$.gridContainer.style.width = this.width;
            }
            if (this.height) {
                this.$.gridContainer.style.height = this.height;
            }

            this.grid = new flexiciousNmsp.FlexDataGrid(this.$.gridContainer);
            this.async(function () {
                for (var key in properties) {
                    if (this[key.toLowerCase()]) {
                        if (key === "style") {
                            //this is thehtmlstyle
                        } else {
                            this.grid.applyAttribute(this.grid, properties[key].orig, this[key.toLowerCase()], true);
                        }
                    }
                }

                if (this.grid.getColumnLevel()._tempCols.length) {
                    this.grid.getColumnLevel().setColumns(this.grid.getColumnLevel()._tempCols);
                }
            }, 1);
        },

        /**
         * Try to destroy instance if hadn't been destroyed
         */
        detached: function () {
            //this.grid.kill()
        },

        attributeChanged: function () {
            this._onChanged();
        },

        _onChanged: function () {
            // var settings;
            //TODO - dynamic updates
        }
    });
} ());

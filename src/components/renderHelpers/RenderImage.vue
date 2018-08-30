<template>
    <div class="gridChemImage">
       {{ valueSquared() }}
    </div>
</template>

<script>
    export default {
        name: 'GridChemImage',
        components: {
            AgGridVue
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
                this.columnApi = params.columnApi;
            },
            getSelectedRows() {
                const selectedNodes = this.gridApi.getSelectedNodes();
                const selectedData = selectedNodes.map(node => node.data);
                const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
                alert(`Selected nodes: ${selectedDataStringPresentation}`);
            }
        },
        beforeMount() {
            this.columnDefs = [
                {headerName: 'Make', field: 'make', rowGroupIndex: 0},
                {headerName: 'Model', field: 'model'},
                {headerName: 'Price', field: 'price'}
            ];

            this.autoGroupColumnDef = {
                headerName: 'Model',
                field: 'model',
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: {
                    checkbox: true
                }
            };

            fetch('https://api.myjson.com/bins/15psn9')
                .then(result => result.json())
                .then(rowData => this.rowData = rowData);
        }
    }
</script>

<style>
</style>
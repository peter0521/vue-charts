<template>
    <div>
        <canvas v-if="!target" ref="canvas" :width="width" :height="height">
    </div>
</template>
<script>
export default {
    mixins: [
        vue_charts.default,
    ],
    data() {
        return {
            type: 'bar',
            chart_data: {
                labels: this.labels,
                datasets: [{
                    label: this.datalabel,
                    backgroundColor: this.backgroundcolor,
                    borderColor: this.bordercolor,
                    borderWidth: 1,
                    data: this.data,
                }, ],
            },
        };
    },
}
</script>

import { SchemaBuilder } from '@/domain/commons/builders/SchemaBuilder'

type ChartOptions = App.Domain.Charts.ChartOptions

type ChartDataProps = Omit<App.Domain.Charts.ChartProps, 'width' | 'height'>

class ChartDataPropsBuilder extends SchemaBuilder<
  ChartOptions,
  ChartDataProps
> {
  public static create(base: ChartDataPropsBuilder | ChartOptions = {}) {
    if (base instanceof ChartDataPropsBuilder) return base.copy()

    return new ChartDataPropsBuilder(base)
  }

  public build(): ChartDataProps {
    const { series, ...options } = super.toJSON()

    return { series, options } satisfies ChartDataProps
  }

  public copy() {
    return new ChartDataPropsBuilder(structuredClone(this.options))
  }

  public annotations(annotationsOptions?: ChartOptions['annotations']) {
    return this.assign('annotations', annotationsOptions)
  }

  public chart(chartOptions?: ChartOptions['chart']) {
    return this.assign('chart', chartOptions)
  }

  public colors(colorsOptions?: ChartOptions['colors']) {
    return this.assign('colors', colorsOptions)
  }

  public dataLabels(dataLabelsOptions?: ChartOptions['dataLabels']) {
    return this.assign('dataLabels', dataLabelsOptions)
  }

  public fill(fillOptions?: ChartOptions['fill']) {
    return this.assign('fill', fillOptions)
  }

  public grid(gridOptions?: ChartOptions['grid']) {
    return this.assign('grid', gridOptions)
  }

  public labels(labelsOptions?: ChartOptions['labels']) {
    return this.assign('labels', labelsOptions)
  }

  public legend(legendOptions?: ChartOptions['legend']) {
    return this.assign('legend', legendOptions)
  }

  public markers(markersOptions?: ChartOptions['markers']) {
    return this.assign('markers', markersOptions)
  }

  public plotOptions(plotOptions?: ChartOptions['plotOptions']) {
    return this.assign('plotOptions', plotOptions)
  }

  public responsive(responsiveOptions?: ChartOptions['responsive']) {
    return this.assign('responsive', responsiveOptions)
  }

  public series(seriesOptions?: ChartOptions['series']) {
    return this.assign('series', seriesOptions)
  }

  public stroke(strokeOptions?: ChartOptions['stroke']) {
    return this.assign('stroke', strokeOptions)
  }

  public subtitle(subtitleOptions?: ChartOptions['subtitle']) {
    return this.assign('subtitle', subtitleOptions)
  }

  public theme(themeOptions?: ChartOptions['theme']) {
    return this.assign('theme', themeOptions)
  }

  public title(titleOptions?: ChartOptions['title']) {
    return this.assign('title', titleOptions)
  }

  public tooltip(tooltipOptions?: ChartOptions['tooltip']) {
    return this.assign('tooltip', tooltipOptions)
  }

  public xAxis(xAxisOptions?: ChartOptions['xaxis']) {
    return this.assign('xaxis', xAxisOptions)
  }

  public yAxis(yAxisOptions?: ChartOptions['yaxis']) {
    return this.assign('yaxis', yAxisOptions)
  }
}

export { ChartDataPropsBuilder }
